'use client';

import SupportModal from '../../components/SupportModal';
import Link from 'next/link';

export default function IiNetCyberAttackArticle() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <>
      <main className="bg-white">
        {/* Article Header */}
        <section className="bg-[var(--primary)] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-block bg-[var(--accent)] text-white text-sm px-3 py-1 rounded-full mr-4">
                  Cybersecurity
                </span>
                <span className="text-white text-sm">
                  12 min read • 20 August 2025
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                iiNet Cyber-Attack: What Happened and How to Protect Yourself
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                On 16 August 2025, Australia&apos;s second-largest internet provider iiNet identified a cyber-attack affecting around 280,000 customers. Learn what information was stolen and how to protect yourself.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                On 16 August 2025 Australia&apos;s second-largest internet provider, <strong>iiNet</strong>, identified a cyber-attack against one of its order-management systems. The hack was confirmed on Saturday, 16 August, but parent company <strong>TPG Telecom</strong> did not inform customers and shareholders until the following Tuesday. iiNet&apos;s order-management system is used to create and track services like NBN connections and contains only limited personal information. According to TPG and iiNet&apos;s forensic investigation, an unknown third party gained access after stealing account credentials from an employee, enabling unauthorised entry into the system.
              </p>

              {/* iiNet Data Breach Image */}
              <div className="my-12 text-center">
                <img 
                  src="/assets/iinetdatabreach.png" 
                  alt="iiNet cyber-attack visualization showing data breach affecting Australian internet customers" 
                  className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">What information was stolen?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The compromised system stored contact information used to set up or monitor orders. It did <strong>not</strong> contain copies of passports, driver&apos;s licences or banking details. Investigators believe the attackers extracted a list of <strong>about 280,000 active iiNet email addresses and roughly 20,000 active landline phone numbers</strong>. Approximately <strong>10,000 usernames, street addresses and phone numbers</strong> were also taken and <strong>around 1,700 modem set-up passwords</strong> were accessed. Inactive email addresses and phone numbers were included in the stolen dataset.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Although sensitive financial or identity-verification data was not held in the system, the stolen contact details could still be used for targeted phishing or scam campaigns. For customers who used the same password for multiple services, the exposure of modem set-up passwords also increases the risk of unauthorised access to home networks if those passwords were reused elsewhere.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">How did the breach occur?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Early investigations suggest that the attackers obtained <strong>stolen credentials from an iiNet employee</strong>. Using those credentials, they accessed the order-management system and extracted customer lists. TPG said that once the breach was confirmed on 16 August, it removed the unauthorised access and engaged external IT and cyber-security experts to determine the full scope of the incident. The company has apologised and is working with the <strong>Australian Cyber Security Centre (ACSC)</strong>, the <strong>National Office of Cyber Security (NOCS)</strong> and the <strong>Office of the Australian Information Commissioner (OAIC)</strong>.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Timeline of events</h2>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>16 Aug 2025</strong></td>
                      <td className="px-6 py-4 text-sm text-gray-700">iiNet detects unusual activity and confirms a cyber-incident. The company removes the unauthorised access and engages external cyber-security experts.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">iiNet / Reuters</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>19 Aug 2025</strong></td>
                      <td className="px-6 py-4 text-sm text-gray-700">TPG files a notice with the Australian Securities Exchange and publicly confirms that the hack involved about 280,000 email addresses, 20,000 phone numbers, 10,000 usernames/street addresses/phone numbers and 1,700 modem passwords. The information was extracted using stolen employee credentials.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">ABC News / Reuters</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>20 Aug 2025</strong></td>
                      <td className="px-6 py-4 text-sm text-gray-700">iiNet publishes an FAQ for customers detailing the nature of the breach, emphasising that identity documents and financial details were not accessed, and providing advice on how to protect themselves.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">iiNet</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">What is iiNet doing?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TPG and iiNet say that they removed the unauthorised access soon after discovering the incident and engaged external cyber-security professionals. They have also secured an interim court injunction prohibiting anyone from using or publishing the stolen data. iiNet has established a <strong>dedicated hotline (1300 861 036)</strong> for customers and is contacting affected and non-affected customers directly. The company is working closely with government cyber-security agencies and regulatory bodies to assess the breach and prevent similar incidents.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Steps you can take</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Although only contact information was stolen, criminals may use it to <strong>send convincing phishing emails, texts or scam calls</strong>. Customers should:
              </p>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-3">
                <li><strong>Be vigilant to suspicious communications</strong> – treat unexpected emails, texts or calls with caution and verify their authenticity before responding.</li>
                <li><strong>Reset passwords</strong> – change the passwords for your iiNet account and any other service that uses the same password. Consider updating modem set-up passwords if you have not already done so.</li>
                <li><strong>Use strong, unique passwords and enable multi-factor authentication</strong> wherever possible.</li>
                <li><strong>Install up-to-date security software</strong> on devices and keep software patches current.</li>
                <li><strong>Report suspicious activity</strong> to iiNet&apos;s dedicated hotline or the Australian Cyber Security Centre.</li>
              </ol>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Consumer advocates such as the Australian Communications Consumer Action Network (ACCAN) stress that this incident highlights the need for businesses to strengthen data-protection practices and for customers to be alert to scams.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">How Blue Moon IT can help</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Large-scale data breaches underscore how vulnerable personal and business networks can be. Even though the iiNet incident did not include banking or identity documents, the exposure of contact details and modem passwords can be enough for criminals to launch phishing attacks or attempt to break into home networks. If you are concerned about your personal or business security, <strong>Blue Moon IT</strong> offers comprehensive network security services:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Network assessment and hardening</strong>: We audit your home or office network to identify weak points and implement industry-best security controls.</li>
                <li><strong>Password and authentication management</strong>: Our team can help you implement strong password policies, set up multi-factor authentication and securely manage credentials.</li>
                <li><strong>Ongoing monitoring and support</strong>: We provide proactive monitoring and support to detect and respond to threats before they cause harm.</li>
                <li><strong>Cyber-security training</strong>: Education is one of the best defences. We offer training to help you and your staff recognise phishing attempts and adopt safer online practices.</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <blockquote className="text-gray-700 italic text-lg">
                  <strong>If you are concerned about your personal security, Blue Moon IT can help secure your home or business network.</strong> Contact us today to find out how our expert team can tailor a security solution to your needs.
                </blockquote>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                By staying vigilant and partnering with trusted cyber-security professionals, you can reduce the risks posed by data breaches and keep your personal information safe.
              </p>

              <hr className="my-12 border-gray-300" />

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Key Takeaways:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>iiNet cyber-attack affected approximately 280,000 email addresses and 20,000 phone numbers.</li>
                  <li>Attack occurred through stolen employee credentials, not a direct system hack.</li>
                  <li>No financial or identity documents were accessed, but contact details can be used for phishing.</li>
                  <li>Customers should change passwords, enable MFA, and remain vigilant for suspicious communications.</li>
                  <li>iiNet has established a dedicated hotline (1300 861 036) for affected customers.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Protect Your Network from Cyber Attacks
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Don&apos;t wait for the next breach to affect you. Secure your home or business network with professional cybersecurity solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Network Security Assessment</h3>
                <p className="text-sm text-gray-200">Comprehensive audit of your network infrastructure to identify vulnerabilities and security gaps.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Password Management</h3>
                <p className="text-sm text-gray-200">Implement secure password policies and multi-factor authentication across all systems.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">24/7 Monitoring</h3>
                <p className="text-sm text-gray-200">Continuous network monitoring and rapid incident response to protect against threats.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/services/cybersecurity"
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Learn About Our Security Services
              </Link>
              <button 
                onClick={openModal}
                className="accent-gradient text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Get Security Consultation
              </button>
            </div>
            
            <p className="text-white text-sm mt-6 opacity-90">
              Emergency cybersecurity support available 24/7 • Call <a href="tel:0283130444" className="underline hover:no-underline">02 8313 0444</a>
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[var(--primary)]">
                More Cybersecurity Articles
              </h2>
              <p className="text-gray-600 mt-2">
                Stay informed about the latest cybersecurity threats and protection strategies.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                href="/articles"
                className="inline-flex items-center text-[var(--accent)] hover:text-[var(--primary)] font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SupportModal />
    </>
  );
}
