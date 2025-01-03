import React from 'react';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-charcoal/70 mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <ContactInfo />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;