import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import Stripe from 'npm:stripe@13.10.0';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      throw new Error('No signature found');
    }

    const body = await req.text();
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET') ?? ''
    );

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.metadata.userId;
        const planTier = session.metadata.planTier;

        // Update profile subscription status
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            subscription_tier: planTier,
            subscription_status: 'active',
            has_payment_method: true
          })
          .eq('user_id', userId);

        if (profileError) {
          throw profileError;
        }

        // Update subscription record
        const { error: subscriptionError } = await supabase
          .from('subscriptions')
          .update({
            status: 'active',
            valid_until: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year from now
          })
          .eq('user_id', userId)
          .eq('status', 'pending');

        if (subscriptionError) {
          throw subscriptionError;
        }

        break;
      }

      case 'customer.subscription.deleted':
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        const userId = subscription.metadata.userId;

        if (subscription.status === 'canceled' || subscription.status === 'unpaid') {
          // Update profile subscription status
          const { error: profileError } = await supabase
            .from('profiles')
            .update({
              subscription_status: 'inactive'
            })
            .eq('user_id', userId);

          if (profileError) {
            throw profileError;
          }

          // Update subscription record
          const { error: subscriptionError } = await supabase
            .from('subscriptions')
            .update({
              status: 'cancelled',
              valid_until: new Date()
            })
            .eq('user_id', userId)
            .eq('status', 'active');

          if (subscriptionError) {
            throw subscriptionError;
          }
        }

        break;
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
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