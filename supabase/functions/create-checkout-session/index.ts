import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { stripe } from '../_shared/stripe.ts';
import { corsHeaders } from '../_shared/cors.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { priceId, planTier } = await req.json();
    const { data: { user } } = await supabase.auth.getUser(req.headers.get('Authorization')?.split(' ')[1] ?? '');

    if (!user) {
      throw new Error('Not authenticated');
    }

    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', // Changed to subscription mode
      success_url: `${req.headers.get('origin')}/dashboard?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/dashboard?payment=cancelled`,
      customer_email: user.email,
      metadata: {
        userId: user.id,
        planTier: planTier
      },
    });

    // Update the user's profile with pending subscription status
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        subscription_tier: planTier,
        subscription_status: 'pending'
      })
      .eq('user_id', user.id);

    if (updateError) {
      throw new Error('Failed to update subscription status');
    }

    // Create a subscription record
    const { error: subscriptionError } = await supabase
      .from('subscriptions')
      .insert([
        {
          user_id: user.id,
          plan_id: priceId,
          status: 'pending',
          valid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
        }
      ]);

    if (subscriptionError) {
      throw new Error('Failed to create subscription record');
    }

    return new Response(
      JSON.stringify({ sessionId: session.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});