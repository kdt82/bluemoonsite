import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Blue Moon IT',
  description: 'Blue Moon IT Privacy Policy - How we collect, use, and protect your personal information',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">PRIVACY POLICY</h1>
      <div className="mb-6">
        <p>Blue Moon IT</p>
        <p>ABN: 12 159 169 631</p>
        <p>Phone: 02 8313 0444</p>
        <p>Email: privacy@bluemoonit.com.au</p>
        <p>Last Updated: 1st January 2025</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Blue Moon IT ("we", "our", "us") is committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the 
          Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
        </p>
        <p className="mb-4">
          By accessing our services, website, or providing us with your personal information, you consent to the practices described in this Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Personal Information We Collect</h2>
        <h3 className="text-xl font-medium mb-2">2.1 Types of information</h3>
        <p className="mb-4">We may collect the following types of personal information:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Name, address, and contact details (including phone number and email address)</li>
          <li>Business details, including Australian Business Number (ABN)</li>
          <li>Payment and transaction details</li>
          <li>Technical information and usage data when you access our services or website</li>
          <li>Communications between you and our team</li>
          <li>Any other information relevant to the services we provide</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">2.2 Collection methods</h3>
        <p className="mb-4">We collect personal information directly from you when you:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Register for our services</li>
          <li>Contact us via phone, email, or our website</li>
          <li>Complete forms or surveys</li>
          <li>Use our services or visit our website</li>
          <li>Interact with us on social media platforms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Purpose of Collection</h2>
        <p className="mb-4">We collect personal information for purposes including:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Providing and improving our IT services</li>
          <li>Processing payments and maintaining accounts</li>
          <li>Communicating with you about our services</li>
          <li>Technical support and customer service</li>
          <li>Marketing and promotional activities (with consent)</li>
          <li>Compliance with legal and regulatory obligations</li>
          <li>Internal business operations and planning</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
        <h3 className="text-xl font-medium mb-2">4.1 Storage location</h3>
        <p className="mb-4">
          All customer information is stored in secure, Australian-based servers. We do not transfer your personal information overseas 
          unless we have your explicit consent or are required by law to do so.
        </p>

        <h3 className="text-xl font-medium mb-2">4.2 Security measures</h3>
        <p className="mb-4">
          We implement appropriate technical and organisational measures to protect your personal information, including:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Encryption of sensitive data</li>
          <li>Secure access controls and authentication procedures</li>
          <li>Regular security assessments and updates</li>
          <li>Staff training on privacy and data protection</li>
          <li>Physical security measures for our premises and systems</li>
        </ul>
        <p className="mb-4">
          However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your 
          personal information using commercially acceptable means, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Disclosure of Personal Information</h2>
        <p className="mb-4">We may disclose your personal information to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Our employees and contractors who need access to provide our services</li>
          <li>Service providers who assist us in operating our business (subject to appropriate confidentiality obligations)</li>
          <li>Professional advisers (such as lawyers, accountants, and auditors)</li>
          <li>Regulatory authorities, law enforcement bodies, and courts as required by law</li>
          <li>Any other party with your consent</li>
        </ul>
        <p className="mb-4">
          We do not sell, rent, or trade your personal information to third parties for marketing purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Access and Correction</h2>
        <p className="mb-4">
          You have the right to access and request correction of the personal information we hold about you. To request access or 
          corrections, please contact our Privacy Officer using the contact details provided at the end of this policy.
        </p>
        <p className="mb-4">
          We will respond to your request within a reasonable timeframe (usually within 30 days). We may charge a reasonable fee for 
          providing access to your information, but we will inform you of any cost before fulfilling your request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Complaints</h2>
        <p className="mb-4">
          If you believe that we have breached your privacy or you have concerns about how we have handled your personal information, 
          please lodge a complaint with our Privacy Officer using the contact details provided below.
        </p>
        <p className="mb-4">We will:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Acknowledge receipt of your complaint within 7 days</li>
          <li>Investigate your complaint and provide a response within 30 days</li>
          <li>Take appropriate measures to resolve the issue</li>
        </ul>
        <p className="mb-4">
          If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) 
          at www.oaic.gov.au or by phone on 1300 363 992.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Direct Marketing</h2>
        <p className="mb-4">
          We may use your personal information to send you promotional materials about our services. You may opt out of receiving 
          marketing communications at any time by:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Using the unsubscribe function in our electronic communications</li>
          <li>Contacting us using the details provided below</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Cookies and Analytics</h2>
        <p className="mb-4">
          Our website may use cookies and similar technologies to improve your browsing experience and collect analytics data. 
          You can configure your browser to refuse cookies, but this may limit your ability to use some features of our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Changes to this Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
          The updated policy will be posted on our website with the revised date. We encourage you to periodically 
          review this page to stay informed about how we protect your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact our Privacy Officer:
        </p>
        <div className="mb-4">
          <p>Privacy Officer</p>
          <p>Blue Moon IT</p>
          <p>Phone: 02 8313 0444</p>
          <p>Email: privacy@bluemoonit.com.au</p>
        </div>
      </section>

      <hr className="my-8" />
      <p className="text-sm text-gray-600">
        This Privacy Policy was last updated on 1st January 2025.
      </p>
    </div>
  );
} 