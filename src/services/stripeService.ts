import { supabase } from '../lib/supabase';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export type PlanTier = 'basic' | 'premium';

export const stripeService = {
  async createCheckoutSession(priceId: string) {
    try {
      // Determine plan tier from price ID
      const planTier: PlanTier = priceId.includes('premium') ? 'premium' : 'basic';

      const { data: { sessionId }, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { 
          priceId,
          planTier
        }
      });

      if (error) throw error;

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Failed to load Stripe');

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
      if (stripeError) throw stripeError;
    } catch (error: any) {
      console.error('Stripe checkout error:', error);
      throw new Error('Failed to start checkout process. Please try again.');
    }
  },

  async verifySubscriptionStatus(userId: string) {
    try {
      // Check current subscription in subscriptions table
      const { data: subscription, error: subscriptionError } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .single();

      if (subscriptionError && subscriptionError.code !== 'PGRST116') {
        throw subscriptionError;
      }

      // Check if subscription is valid
      if (subscription && new Date(subscription.valid_until) > new Date()) {
        return true;
      }

      // If subscription is expired, update status
      if (subscription) {
        await Promise.all([
          supabase
            .from('profiles')
            .update({
              subscription_status: 'inactive',
              subscription_tier: 'free',
              has_payment_method: false
            })
            .eq('user_id', userId),
          supabase
            .from('subscriptions')
            .update({
              status: 'expired'
            })
            .eq('id', subscription.id)
        ]);
      }

      return false;
    } catch (error: any) {
      console.error('Subscription verification error:', error);
      return false;
    }
  },

  async updateSubscriptionStatus(userId: string, status: 'active' | 'inactive', planTier: PlanTier = 'basic') {
    // Update profile subscription status
    const updates = {
      subscription_status: status,
      subscription_tier: status === 'active' ? planTier : 'free',
      has_payment_method: status === 'active'
    };

    const { error: profileError } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', userId);

    if (profileError) throw profileError;

    // Update subscription record
    if (status === 'active') {
      const validUntil = new Date();
      validUntil.setFullYear(validUntil.getFullYear() + 1);

      const { error: subscriptionError } = await supabase
        .from('subscriptions')
        .upsert({
          user_id: userId,
          plan_id: `${planTier}_yearly`,
          status: 'active',
          valid_until: validUntil.toISOString()
        });

      if (subscriptionError) throw subscriptionError;
    }
  }
};