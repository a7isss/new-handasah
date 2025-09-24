import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { stripeService } from '../services/stripeService';
import { useQuery } from '@tanstack/react-query';

export function useSubscription() {
  const { user, userProfile, refreshProfile } = useAuth();

  const { data: isSubscriptionValid, refetch } = useQuery({
    queryKey: ['subscription', user?.id],
    queryFn: () => user ? stripeService.verifySubscriptionStatus(user.id) : false,
    enabled: !!user,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 10 * 60 * 1000 // Keep in cache for 10 minutes
  });

  useEffect(() => {
    if (user && userProfile?.subscription_status === 'active') {
      // Verify subscription status periodically
      const interval = setInterval(async () => {
        await refetch();
        await refreshProfile();
      }, 30 * 60 * 1000); // Check every 30 minutes

      return () => clearInterval(interval);
    }
  }, [user, userProfile, refetch, refreshProfile]);

  return {
    isSubscriptionValid,
    refetch,
    isLoading: !user || !userProfile,
    subscriptionTier: userProfile?.subscription_tier || 'free',
    subscriptionStatus: userProfile?.subscription_status || 'inactive'
  };
}