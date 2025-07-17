'use client';

import SupportModal from '../../components/SupportModal';
import Link from 'next/link';

export default function DataBreachArticle() {
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
                  8 min read • 20 June 2025
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                The World&apos;s Largest Data Breach: 16 Billion Credentials Exposed
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                A record-shattering data breach has rocked the digital world, highlighting the growing threat posed by infostealer malware and the vast underground economy of stolen data.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A record-shattering data breach has rocked the digital world, with researchers revealing that more than 16 billion login credentials have been leaked in what is believed to be the largest collection of exposed passwords and usernames ever discovered. This unprecedented incident, uncovered by cybersecurity researchers at Cybernews, highlights the growing threat posed by infostealer malware and the vast, often invisible, underground economy of stolen data.
              </p>

              {/* Data Breach Image */}
              <div className="my-12 text-center">
                <img 
                  src="/assets/databreach.jpg" 
                  alt="Massive data breach visualization showing cybersecurity threats and stolen credentials" 
                  className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">What Happened?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The breach is not the result of a single hack but rather the aggregation of 30 massive datasets, each containing anywhere from tens of millions to over 3.5 billion records. These databases were briefly accessible online through unsecured storage and Elasticsearch instances, long enough for researchers to find them but not enough to identify those responsible.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The exposed credentials span almost every major online service imaginable, including Apple, Google, Facebook, Instagram, Gmail, GitHub, Telegram, VPNs, and even government portals. Each record typically contains a website URL, a username, and a password—mirroring the data structure collected by infostealer malware.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Where Did the Data Come From?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Researchers believe the majority of the leaked information comes from infostealer malware—malicious software that infects devices and harvests sensitive data such as login details, cookies, and tokens. Some of the data also appears to be a mix of credential stuffing sets (where hackers use previously leaked credentials to try to break into new accounts) and repackaged leaks from older breaches.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Crucially, experts note that this is not just a recycling of old breaches: the datasets contain fresh, weaponisable data, with recent logs and metadata that make them especially dangerous for both individuals and organisations.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">How Bad Is the Impact?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The sheer scale of the breach is staggering. With approximately 5.5 billion people online globally, the leak could potentially affect multiple accounts per person. The exposed credentials provide cybercriminals with a &quot;blueprint for mass exploitation,&quot; enabling account takeovers, identity theft, and highly targeted phishing attacks.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                However, it is impossible to determine exactly how many unique individuals or accounts have been exposed, as there is likely significant overlap between datasets. Some reports suggesting that accounts at companies like Facebook, Google, and Apple were directly breached are misleading; instead, the credentials are for accounts on these platforms, harvested from various sources rather than from a central hack of those companies.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">What Should Individuals and Organisations Do?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Security experts are urging immediate action:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Change your passwords on all online accounts, especially if you reuse passwords across services.</li>
                <li>Enable multi-factor authentication (MFA) wherever possible to add an extra layer of protection.</li>
                <li>Use a password manager to generate and store unique, strong passwords for every account.</li>
                <li>Check if your credentials have been compromised using services like &quot;Have I Been Pwned&quot;.</li>
                <li>Stay vigilant for phishing attempts and suspicious account activity.</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For organisations, the breach underscores the need for robust credential monitoring, endpoint security, regular credential audits, and ongoing employee training to recognise phishing and malware threats.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">The Bigger Picture</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While the 16 billion credentials leak is not a single catastrophic hack, its scale and recency make it a wake-up call for the digital age. The prevalence of infostealer malware and the frequency with which new, massive datasets emerge highlight the urgent need for stronger cybersecurity practices and greater awareness among both individuals and organisations.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As one expert put it, &quot;This is not just a leak—it&apos;s a blueprint for mass exploitation&quot;. The digital world has never been more interconnected—or more vulnerable.
              </p>

              <hr className="my-12 border-gray-300" />

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Key Takeaways:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Over 16 billion credentials leaked from 30 datasets, affecting nearly every major online service.</li>
                  <li>Data primarily harvested by infostealer malware, not from a single company breach.</li>
                  <li>Immediate password changes, MFA, and vigilance are critical for protection.</li>
                  <li>The breach is a stark reminder of the ongoing, evolving threat landscape in cybersecurity.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Protect Yourself from Data Breaches
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Don&apos;t wait for the next breach to affect you. Take action now to secure your digital life with professional cybersecurity solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Password Security</h3>
                <p className="text-sm text-gray-200">Implement strong, unique passwords and secure password management solutions.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Multi-Factor Authentication</h3>
                <p className="text-sm text-gray-200">Add extra layers of security to protect your accounts from unauthorised access.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Rapid Response</h3>
                <p className="text-sm text-gray-200">Get immediate help when security incidents occur with our emergency support.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/services/cybersecurity"
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Learn About Our Cybersecurity Services
              </Link>
              <button 
                onClick={openModal}
                className="accent-gradient text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Get Security Assessment
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
                More IT Security Articles
              </h2>
              <p className="text-gray-600 mt-2">
                Stay informed about the latest cybersecurity threats and best practices.
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