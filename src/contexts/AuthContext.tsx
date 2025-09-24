import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Session, User } from '@supabase/supabase-js';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, phone: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  verifyPhone: (phone: string) => Promise<string>;
  confirmPhoneVerification: (phone: string, code: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setupAuth = async () => {
      try {
        // Check if Supabase is properly configured
        if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
          console.warn('Supabase environment variables not configured');
          setLoading(false);
          return;
        }

        const { data: { session: initialSession } } = await supabase.auth.getSession();
        setSession(initialSession);
        setUser(initialSession?.user ?? null);
        
        setLoading(false);
        
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        });
        
        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error setting up auth:', error);
        setLoading(false);
      }
    };
    
    setupAuth();
  }, []);

  const verifyPhone = async (phone: string): Promise<string> => {
    try {
      // This would integrate with Meta API for phone verification
      // For now, we'll simulate the process
      const verificationId = `verify_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // In a real implementation, you would call Meta API here
      // const response = await fetch('META_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phone })
      // });
      
      toast.success(t('auth.phoneVerification.codeSent'));
      return verificationId;
    } catch (error: any) {
      toast.error(error.message || 'فشل في إرسال رمز التأكيد');
      throw error;
    }
  };

  const confirmPhoneVerification = async (phone: string, code: string): Promise<boolean> => {
    try {
      // This would verify the code with Meta API
      // For now, we'll simulate successful verification
      if (code === '123456') { // Demo code
        toast.success(t('auth.phoneVerification.phoneVerified'));
        return true;
      } else {
        toast.error(t('auth.phoneVerification.invalidCode'));
        return false;
      }
    } catch (error: any) {
      toast.error(error.message || 'فشل في تأكيد الرمز');
      return false;
    }
  };
  
  const signUp = async (email: string, password: string, fullName: string, phone: string) => {
    try {
      const { error, data } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            full_name: fullName,
            phone: phone
          }
        }
      });
      if (error) throw error;
      
      toast.success('تم إنشاء الحساب بنجاح');
    } catch (error: any) {
      toast.error(error.message || 'فشل في إنشاء الحساب');
      throw error;
    }
  };
  
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success('تم تسجيل الدخول بنجاح');
    } catch (error: any) {
      toast.error(error.message || 'فشل في تسجيل الدخول');
      throw error;
    }
  };
  
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('تم تسجيل الخروج بنجاح');
    } catch (error: any) {
      toast.error(error.message || 'فشل في تسجيل الخروج');
    }
  };
  
  return (
    <AuthContext.Provider value={{
      session,
      user,
      loading,
      signUp,
      signIn,
      signOut,
      verifyPhone,
      confirmPhoneVerification
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};