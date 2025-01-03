import React from 'react';
import { Apple, Mail, Phone } from 'lucide-react';
import { auth, AuthProvider } from '../../lib/auth';

const providers = [
  { id: 'apple' as AuthProvider, icon: Apple, label: 'Continue with Apple' },
  { id: 'google' as AuthProvider, icon: Mail, label: 'Continue with Google' },
  { id: 'phone' as AuthProvider, icon: Phone, label: 'Continue with Phone' }
];

export const AuthButtons = () => {
  const handleAuth = async (provider: AuthProvider) => {
    try {
      if (provider === 'phone') {
        // Show phone input modal
        return;
      }
      await auth.signInWithProvider(provider);
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  return (
    <div className="space-y-4">
      {providers.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => handleAuth(id)}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 
                   border-2 border-dove rounded-full hover:bg-dove/5 transition-colors"
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};