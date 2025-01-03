import React from 'react';
import { BentoCard } from '../../components/ui/cards';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <BentoCard className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Membership Terms</h2>
            <p className="text-charcoal/70 mb-4">
              By purchasing a membership or class package at BodyMovesBK, you agree to these terms and conditions.
              Memberships are non-transferable and cannot be shared unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Class Bookings & Cancellations</h2>
            <p className="text-charcoal/70 mb-4">
              Members can book classes up to 7 days in advance. Cancellations must be made at least 12 hours before
              class start time to avoid losing the class credit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Health & Safety</h2>
            <p className="text-charcoal/70 mb-4">
              Members must follow all studio safety guidelines and protocols. We reserve the right to refuse service
              to anyone who violates these guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p className="text-charcoal/70 mb-4">
              Monthly memberships are auto-renewed unless cancelled. Refunds are provided according to our refund policy.
            </p>
          </section>
        </div>
      </BentoCard>
    </div>
  );
};

export default TermsPage;