import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthButtons } from '../../components/auth/AuthButtons';
import { PhoneAuthModal } from '../../components/auth/PhoneAuthModal';
import { BentoCard } from '../../components/ui/cards';

const LoginPage = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <BentoCard className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-charcoal/70">
            Sign in to book classes and manage your account
          </p>
        </div>

        <AuthButtons />

        <div className="mt-6 text-center">
          <p className="text-charcoal/70">
            New to BodyMovesBK?{' '}
            <Link to="/signup" className="text-primary hover:text-primary/80">
              Create an account
            </Link>
          </p>
        </div>

        {showPhoneModal && (
          <PhoneAuthModal onClose={() => setShowPhoneModal(false)} />
        )}
      </BentoCard>
    </div>
  );
};

export default LoginPage;