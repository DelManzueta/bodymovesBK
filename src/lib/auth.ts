import { supabase } from './supabase';

export type AuthProvider = 'google' | 'apple' | 'phone';

export const auth = {
  // Sign in with OAuth providers
  async signInWithProvider(provider: 'google' | 'apple') {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
    
    if (error) throw error;
    return data;
  },

  // Sign in with phone number
  async signInWithPhone(phone: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
      options: {
        channel: 'sms'
      }
    });
    
    if (error) throw error;
    return data;
  },

  // Verify phone OTP
  async verifyOTP(phone: string, token: string) {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms'
    });
    
    if (error) throw error;
    return data;
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }
};