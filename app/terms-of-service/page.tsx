import React from 'react';

export const metadata = {
  title: 'Terms of Service | Blue Moon IT',
  description: 'Blue Moon IT Terms of Service - Rules and conditions governing the use of our services',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">TERMS OF SERVICE</h1>
      <div className="mb-6">
        <p>Blue Moon IT</p>
        <p>ABN: 12 159 169 631</p>
        <p>Phone: <a href="tel:0283130444" className="text-blue-600 hover:text-blue-800">02 8313 0444</a></p>
        <p>Email: admin@bluemoonit.com.au</p>
        <p>Last Updated: 1st January 2025</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          These Terms of Service ("Terms") govern your use of services provided by Blue Moon IT ("we", "our", "us"). 
          Blue Moon IT is an IT Support Business located in the Illawarra that services the NSW South Coast, 
          Illawarra and Southern Tablelands regions.
        </p>
        <p className="mb-4">
          By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
          If you do not agree to these Terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Service Area</h2>
        <p className="mb-4">We provide IT support services to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Home users</li>
          <li>Small businesses</li>
        </ul>
        <p className="mb-4">Our geographical service area includes:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>NSW South Coast</li>
          <li>Illawarra</li>
          <li>Southern Tablelands</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
        <p className="mb-4">
          Blue Moon IT provides a range of IT support services, including but not limited to:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Computer repairs and maintenance</li>
          <li>Software installation and troubleshooting</li>
          <li>Network setup and maintenance</li>
          <li>Data backup and recovery</li>
          <li>Virus and malware removal</li>
          <li>Hardware upgrades and installation</li>
          <li>Remote technical support</li>
          <li>On-site technical support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Service Fees</h2>
        
        <h3 className="text-xl font-medium mb-2">4.1 Standard Rates</h3>
        <p className="mb-4">Our standard service rates (exclusive of GST) are:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Remote Support: $80 per hour</li>
          <li>On-site Support: $110 per hour</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">4.2 Billing Practices</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Services are billed in 30-minute blocks</li>
          <li>A minimum charge of 30 minutes applies to all service calls</li>
          <li>Travel time may be charged for on-site visits depending on location</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">4.3 Concessions</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Pension discount applies to holders of a valid Pensioner Concession Card or Senior Card</li>
          <li>The pension discount applies to support hours only and not to parts or software</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">4.4 Additional Charges</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Parts, hardware, and software costs are additional to service fees</li>
          <li>After-hours or emergency callout services may attract additional fees</li>
          <li>Complex or high-risk services may require a custom quote</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">4.5 Payment Terms</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Payment is due at the time of service completion unless otherwise agreed</li>
          <li>For ongoing services, payment terms will be specified in your service agreement</li>
          <li>We accept credit card, direct deposit, and cash payments</li>
          <li>Overdue accounts may incur additional charges</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Service Appointments</h2>
        
        <h3 className="text-xl font-medium mb-2">5.1 Scheduling</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Appointments are subject to availability</li>
          <li>We endeavour to accommodate urgent requests where possible</li>
          <li>Standard business hours are Monday to Friday, 8:00 AM to 6:00 PM</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">5.2 Cancellations</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Please provide at least 24 hours' notice for appointment cancellations</li>
          <li>Late cancellations (less than 24 hours' notice) may incur a cancellation fee equal to 50% of the scheduled service fee</li>
          <li>No-shows may be charged the full service fee</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Remote Support</h2>
        
        <h3 className="text-xl font-medium mb-2">6.1 Access Requirements</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>You must have an active internet connection for remote support services</li>
          <li>You may need to install remote access software as directed by our technicians</li>
          <li>You are responsible for ensuring you have appropriate security measures in place</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">6.2 Limitations</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Not all issues can be resolved remotely</li>
          <li>If remote support is unsuccessful, an on-site visit may be recommended</li>
          <li>Remote support is subject to technical limitations and connectivity issues</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. On-site Support</h2>
        
        <h3 className="text-xl font-medium mb-2">7.1 Access Requirements</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>You must provide safe and reasonable access to your premises and equipment</li>
          <li>An adult must be present for the duration of the on-site service</li>
          <li>You are responsible for backing up your data before our arrival</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">7.2 Workplace Health and Safety</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Our technicians may refuse to work in unsafe conditions</li>
          <li>You must inform us of any potential hazards at your premises</li>
          <li>Technicians will follow COVID-safe practices as applicable</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Service Guarantees and Limitations</h2>
        
        <h3 className="text-xl font-medium mb-2">8.1 Service Guarantee</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>We strive to provide high-quality services and aim for your complete satisfaction</li>
          <li>If you are not satisfied with our service, please contact us within 7 days of service completion</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">8.2 Limitations</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>We cannot guarantee results in all circumstances, particularly with outdated hardware or software</li>
          <li>We are not responsible for issues caused by hardware failure, software corruption, or third-party services</li>
          <li>We do not guarantee compatibility between hardware and software not supplied by us</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Data and Privacy</h2>
        
        <h3 className="text-xl font-medium mb-2">9.1 Data Handling</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>You are responsible for backing up your data before we perform any services</li>
          <li>While we take reasonable precautions, we cannot guarantee against data loss</li>
          <li>We are not responsible for any data loss that may occur during service provision</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">9.2 Privacy</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>We handle your personal information in accordance with our Privacy Policy and Australian Privacy Principles</li>
          <li>We may need to access your files and systems to provide technical support</li>
          <li>We do not disclose your personal information to third parties except as required to provide our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Warranties</h2>
        
        <h3 className="text-xl font-medium mb-2">10.1 Service Warranty</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Our services are covered by a 30-day warranty for the specific issue addressed</li>
          <li>The warranty does not cover new or unrelated issues</li>
          <li>The warranty is void if changes are made by you or third parties after our service</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">10.2 Parts and Products</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Hardware and software products are covered by manufacturers' warranties</li>
          <li>We will assist with warranty claims for products we have supplied</li>
          <li>Used or refurbished parts may have limited or no warranty</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Liability</h2>
        
        <h3 className="text-xl font-medium mb-2">11.1 Limitation of Liability</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>To the maximum extent permitted by law, our liability is limited to re-performing the services or refunding the service fee</li>
          <li>We are not liable for any indirect, special, incidental, or consequential damages</li>
          <li>Our total liability shall not exceed the amount paid for the services</li>
        </ul>
        
        <h3 className="text-xl font-medium mb-2">11.2 Consumer Guarantees</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Our services come with guarantees that cannot be excluded under the Australian Consumer Law</li>
          <li>Nothing in these Terms limits or excludes your rights under the Australian Consumer Law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Intellectual Property</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>We retain all intellectual property rights in our methods, processes, and documentation</li>
          <li>Any software or scripts we create remain our property unless otherwise agreed in writing</li>
          <li>You are granted a non-exclusive license to use our solutions for your personal or business needs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>Either party may terminate services with reasonable notice</li>
          <li>We reserve the right to refuse service at our discretion</li>
          <li>Termination does not relieve you of the obligation to pay for services already rendered</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Disputes</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>We aim to resolve disputes promptly and amicably</li>
          <li>If you have a complaint, please contact us directly to discuss the issue</li>
          <li>If we cannot resolve a dispute, it may be referred to mediation or the appropriate consumer tribunal</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>We may modify these Terms from time to time</li>
          <li>Changes will be effective upon posting to our website</li>
          <li>Your continued use of our services after changes constitutes acceptance of the updated Terms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">16. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by the laws of New South Wales, Australia. Any disputes shall be subject to the 
          exclusive jurisdiction of the courts of New South Wales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">17. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms, please contact us:
        </p>
        <div className="mb-4">
          <p>Blue Moon IT</p>
          <p>Phone: <a href="tel:0283130444" className="text-blue-600 hover:text-blue-800">02 8313 0444</a></p>
          <p>Email: admin@bluemoonit.com.au</p>
        </div>
      </section>

      <hr className="my-8" />
      <p className="text-sm text-gray-600">
        These Terms of Service were last updated on 1st January 2025.
      </p>
    </div>
  );
} 