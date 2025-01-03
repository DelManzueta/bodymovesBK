import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { auth } from '../../lib/auth';
import { Input } from '../ui/form';
import { GradientButton } from '../ui/buttons';

interface PhoneAuthModalProps {
  onClose: () => void;
}

export const PhoneAuthModal: React.FC<PhoneAuthModalProps> = ({ onClose }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [error, setError] = useState('');

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.signInWithPhone(phone);
      setStep('otp');
      setError('');
    } catch (err) {
      setError('Failed to send verification code');
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.verifyOTP(phone, otp);
      onClose();
    } catch (err) {
      setError('Invalid verification code');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Phone className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold">
            {step === 'phone' ? 'Enter Your Phone Number' : 'Verify Code'}
          </h2>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        {step === 'phone' ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <Input
              type="tel"
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 555-5555"
              required
            />
            <GradientButton type="submit" className="w-full">
              Send Code
            </GradientButton>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <Input
              type="text"
              label="Verification Code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit code"
              required
            />
            <GradientButton type="submit" className="w-full">
              Verify Code
            </GradientButton>
          </form>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-charcoal/70 hover:text-charcoal"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};