import React from 'react';
import { BentoCard } from '../ui/cards';
import { Input } from '../ui/form';
import { GradientButton } from '../ui/buttons';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <BentoCard className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          placeholder="Your name"
          required
        />
        <Input
          type="email"
          label="Email"
          placeholder="your@email.com"
          required
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-charcoal">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-2xl border border-dove focus:outline-none focus:border-primary min-h-[150px]"
            placeholder="How can we help?"
            required
          />
        </div>
        <GradientButton type="submit" className="w-full">
          Send Message
        </GradientButton>
      </form>
    </BentoCard>
  );
};

export default ContactForm;