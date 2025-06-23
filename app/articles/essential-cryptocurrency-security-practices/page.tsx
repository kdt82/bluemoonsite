'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SupportModal from '../../components/SupportModal';
import Link from 'next/link';

export default function CryptocurrencySecurityArticle() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Article Header */}
        <section className="relative bg-[var(--primary)] py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/assets/crypto-security.png')" }}
          ></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-block bg-[var(--accent)] text-white text-sm px-3 py-1 rounded-full mr-4">
                  Cybersecurity
                </span>
                <span className="text-white text-sm">
                  12 min read • 23 June 2025
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Essential Cryptocurrency Security Practices
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Cryptocurrency offers exciting opportunities, but it also attracts sophisticated cybercriminals. To keep your digital assets safe, it's crucial to follow best practices that protect your investments from theft and fraud.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                This article outlines essential security measures and explains common threats, so you can navigate the crypto world with confidence.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Key Security Practices</h2>
              
              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">1. Use Hardware Wallets for Long-Term Storage</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hardware wallets, such as Ledger or Trezor, store your private keys offline, making them nearly impossible for hackers to access remotely. These devices are considered the gold standard for securing significant amounts of cryptocurrency. Always verify the authenticity of your hardware wallet when purchasing, and only connect it to your computer when making transactions.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">2. Enable Two-Factor Authentication Everywhere</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Two-factor authentication (2FA) adds an extra layer of security to your accounts. Use authenticator apps like Google Authenticator or Authy, as SMS-based 2FA can be compromised through SIM swapping attacks. Where possible, use multiple authentication methods.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">3. Keep Software Updated</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Regularly update your wallet software, exchange apps, and operating system. Updates often include security patches that protect against known vulnerabilities. Enable automatic updates when possible, but always verify that updates come from official sources.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">4. Practice Proper Private Key Management</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Never store your private keys or seed phrases on internet-connected devices. Instead, write them down on paper or use a metal backup plate, and store them in secure, separate physical locations. Consider using a safe deposit box or fireproof safe. Never take photos or screenshots of your seed phrases.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">5. Verify Addresses Carefully</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Always double-check recipient addresses before sending cryptocurrency. Malware can replace copied addresses with those controlled by attackers. While some users check just the first and last few characters, it's safer to verify the entire address. Use address whitelisting features if available.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">6. Use Reputable Exchanges and Services</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Research any exchange or service before using it. Look for regulatory compliance, insurance coverage, and a strong security track record. Avoid keeping large amounts of cryptocurrency on exchanges for long periods—treat exchanges like your physical wallet, not your bank.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">7. Beware of Phishing Attempts</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hackers create fake websites that look identical to legitimate exchanges or wallets. Always type URLs directly or use bookmarks instead of clicking links in emails. Check for HTTPS and verify the exact spelling of domain names. Be suspicious of urgent emails requesting immediate action.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">8. Secure Your Recovery Information</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your seed phrase is the master key to your cryptocurrency. Store multiple copies in different secure locations, but never keep them together with instructions about what they unlock. Consider adding a passphrase (25th word) for extra security, but ensure you can remember or safely store it.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">9. Regular Security Audits</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Periodically review your security setup. Check which devices have access to your accounts, remove old or unused applications, and ensure your backup methods are still working. Update passwords regularly and make sure each service has a unique password.
              </p>

              <h3 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">10. Understand Common Attack Vectors</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn about threats such as SIM swapping, clipboard malware, fake apps, social engineering, and more. Recognising these tactics helps you avoid falling victim to them. Stay informed about new threats through reputable cryptocurrency security resources.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Common Cryptocurrency Attack Vectors</h2>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-red-800 mb-2">SIM Swapping</h4>
                  <p className="text-red-700">
                    Attackers convince your mobile carrier to transfer your phone number to a SIM card they control, allowing them to bypass SMS-based 2FA. Use authenticator apps for 2FA, add a PIN to your mobile account, and consider a separate phone number for crypto accounts.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Clipboard Malware</h4>
                  <p className="text-orange-700">
                    This malware replaces copied cryptocurrency addresses with those controlled by hackers. Always check the full address before sending funds and consider using QR codes.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">Fake Mobile Apps</h4>
                  <p className="text-yellow-700">
                    Attackers create counterfeit versions of popular crypto apps. Only download apps from official stores, verify the developer's name, and check reviews.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Social Engineering</h4>
                  <p className="text-blue-700">
                    Hackers manipulate victims through fake support, investment offers, or romance scams. Always verify identities through official channels and never share private keys or passwords.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Phishing Websites and Emails</h4>
                  <p className="text-purple-700">
                    Fake sites mimic legitimate exchanges or wallets. Type URLs manually, use bookmarks, and check for subtle spelling differences.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-green-800 mb-2">Other Common Attacks</h4>
                  <ul className="text-green-700 list-disc list-inside space-y-1">
                    <li><strong>Dusting Attacks:</strong> Attackers send small amounts of crypto to track user behaviour. Avoid interacting with unexpected tokens.</li>
                    <li><strong>Man-in-the-Middle Attacks:</strong> Attackers intercept communications on public Wi-Fi. Use a VPN and avoid accessing crypto accounts on public networks.</li>
                    <li><strong>Malicious Browser Extensions:</strong> Fake extensions can steal passwords or modify transactions. Only install from official sources.</li>
                    <li><strong>Physical Attacks:</strong> Attackers may use threats or violence to force transfers. Keep your crypto holdings private.</li>
                    <li><strong>Smart Contract Exploits:</strong> Malicious smart contracts can drain wallets. Research projects thoroughly and never approve unlimited spending allowances.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Conclusion</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cryptocurrency security requires vigilance and a proactive approach. By adopting these best practices and understanding common threats, you can significantly reduce your risk of falling victim to cybercrime. Stay informed, maintain healthy scepticism, and always verify details independently before making transactions or sharing sensitive information. This will help you protect your digital assets and enjoy the benefits of cryptocurrency with confidence.
              </p>

              <hr className="my-12 border-gray-300" />

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Key Takeaways:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use hardware wallets for long-term storage and enable 2FA on all accounts</li>
                  <li>Never store private keys or seed phrases on internet-connected devices</li>
                  <li>Always verify cryptocurrency addresses before sending transactions</li>
                  <li>Be aware of common attack vectors like SIM swapping and phishing</li>
                  <li>Regularly audit your security setup and keep software updated</li>
                  <li>Treat exchanges like your wallet, not your bank</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Digital Assets Today
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Don't let cybercriminals steal your cryptocurrency investments. Get professional cybersecurity protection for your digital assets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Crypto Security</h3>
                <p className="text-sm text-gray-200">Protect your cryptocurrency investments with advanced security measures and monitoring.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Security Assessment</h3>
                <p className="text-sm text-gray-200">Get a comprehensive security audit of your digital asset storage and trading practices.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Emergency Recovery</h3>
                <p className="text-sm text-gray-200">Get immediate help if your cryptocurrency accounts have been compromised.</p>
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
      <Footer />
      <SupportModal />
    </>
  );
} 