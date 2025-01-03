import React from 'react';
import { BentoCard } from '../../components/ui/cards';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <BentoCard className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-charcoal/70 mb-4">
              We collect information you provide directly to us, including name, contact information,
              and payment details. We also collect data about your usage of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-charcoal/70 mb-4">
              We use the information we collect to provide and improve our services, process payments,
              send notifications, and communicate with you about classes and events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-charcoal/70 mb-4">
              We do not sell or rent your personal information. We may share your information with
              service providers who assist in our operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <p className="text-charcoal/70 mb-4">
              You have the right to access, correct, or delete your personal information. Contact us
              to exercise these rights.
            </p>
          </section>
        </div>
      </BentoCard>
    </div>
  );
};

export default PrivacyPage;