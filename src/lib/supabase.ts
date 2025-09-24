import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
}

// Create a separate client for super admin operations
export const createSuperAdminClient = (url: string, key: string) => {
  return createClient(url, key);
};

// Main client for regular user operations - only create if we have valid credentials
export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (() => {
      throw new Error('Supabase environment variables are not configured. Please check your .env file.');
    })();

export type User = {
  id: string;
  email: string;
  role: 'user' | 'admin';
  created_at: string;
};

export type UserProfile = {
  id: string;
  user_id: string;
  full_name: string;
  avatar_url?: string;
  subscription_tier?: 'free' | 'basic' | 'premium';
  subscription_status?: 'active' | 'cancelled' | 'past_due';
  has_payment_method?: boolean;
  can_manage_templates?: boolean; // New field for template management
};

// This is a mock implementation for demo purposes
// In a real project, you would implement proper user role checking
// Note: The profiles table doesn't have a role column, so this always returns false
export const isAdmin = async (userId: string): Promise<boolean> => {
  // Since there's no role column in the profiles table, we'll check if the user exists
  // and return false for now. You can implement proper admin checking later.
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_id', userId)
      .single();
      
    if (error || !data) return false;
    // For now, always return false since there's no role system in the database
    return false;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

// Auth helper functions
export const signUp = async (email: string, password: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Please connect to Supabase using the "Connect to Supabase" button in the top right corner.');
  }
  return await supabase.auth.signUp({
    email,
    password,
  });
};

export const signIn = async (email: string, password: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Please connect to Supabase using the "Connect to Supabase" button in the top right corner.');
  }
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signOut = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Please connect to Supabase using the "Connect to Supabase" button in the top right corner.');
  }
  return await supabase.auth.signOut();
};

export const resetPassword = async (email: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Please connect to Supabase using the "Connect to Supabase" button in the top right corner.');
  }
  return await supabase.auth.resetPasswordForEmail(email);
};

export const updatePassword = async (newPassword: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Please connect to Supabase using the "Connect to Supabase" button in the top right corner.');
  }
  return await supabase.auth.updateUser({
    password: newPassword,
  });
};

export const getCurrentUser = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Please connect to Supabase using the "Connect to Supabase" button in the top right corner.');
  }
  const { data } = await supabase.auth.getSession();
  return data.session?.user;
};