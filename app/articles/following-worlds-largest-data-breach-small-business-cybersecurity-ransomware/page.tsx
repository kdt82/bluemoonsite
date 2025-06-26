'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SupportModal from '../../components/SupportModal';
import Link from 'next/link';
import Head from 'next/head';
import { getArticleData } from '../articleData';

export default function SmallBusinessCyberSecurityArticle() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  // Get article data from centralized source
  const articleData = getArticleData('following-worlds-largest-data-breach-small-business-cybersecurity-ransomware');
  
  if (!articleData) {
    return <div>Article not found</div>;
  }

  // Format date for display
  const displayDate = new Date(articleData.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Format date for ISO string
  const isoDate = new Date(articleData.date).toISOString();

  return (
    <>
      <Head>
        {/* Additional Open Graph meta tags for social media sharing */}
        <meta property="og:image" content="https://bluemoonit.com.au/assets/ransom.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ransomware attack visualization showing cybersecurity threats to small businesses" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:image" content="https://bluemoonit.com.au/assets/ransom.png" />
        <meta name="twitter:image:alt" content="Ransomware attack visualization showing cybersecurity threats to small businesses" />
        
        {/* Additional article meta tags */}
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:author" content="Blue Moon IT" />
        <meta property="article:section" content="Cybersecurity" />
        <meta property="article:tag" content="data breach" />
        <meta property="article:tag" content="small business cybersecurity" />
        <meta property="article:tag" content="ransomware protection" />
        <meta property="article:tag" content="cyber security Australia" />
      </Head>
      <Header />
      <main className="bg-white">
        {/* Article Header */}
        <section className="relative bg-[var(--primary)] py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/assets/ransom.png')" }}
          ></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-block bg-[var(--accent)] text-white text-sm px-3 py-1 rounded-full mr-4">
                  Cybersecurity
                </span>
                <span className="text-white text-sm">
                  {articleData.readTime} • {displayDate}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Following the World's Largest Data Breach: What Small Businesses Must Know About Cyber Security and Ransomware Vulnerability
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                The recent announcement of the world's largest data breach has sent shockwaves through the global business community—and Australian small businesses are no exception.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                This unprecedented cyber attack, exposing billions of records and costing victims millions, is a stark reminder that no organisation is immune to cyber threats. If a major corporation with extensive resources can fall victim, what does this mean for small businesses?
              </p>

              {/* Ransomware Image */}
              <div className="my-12 text-center">
                <img 
                  src="/assets/ransom.png" 
                  alt="Ransomware attack visualization showing cybersecurity threats to small businesses" 
                  className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">The Wake-Up Call: Why Small Businesses Should Pay Attention</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While the headlines focus on multinational giants, the reality is that small businesses are increasingly targeted by cybercriminals. The scale of the recent breach highlights how attackers are becoming more sophisticated, relentless, and opportunistic. Small businesses, often with fewer resources and less mature cyber defences, are prime targets for ransomware and malware attacks.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">The Alarming Reality: Small Business Cyber Security in 2025</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li><strong>1 in 5 small businesses</strong> in Australia will face a cyber attack this year.</li>
                  <li><strong>75% of small businesses</strong> have already experienced at least one attack in the past 12 months.</li>
                  <li>The average recovery cost now exceeds <strong>$40,000</strong>, a financial blow that can threaten business survival.</li>
                  <li><strong>60% of small businesses</strong> hit by cyber attacks close within six months.</li>
                  <li>Despite these risks, <strong>80% of small businesses</strong> still lack formal cyber security policies.</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The recent global breach underscores that attackers are not just after data—they want disruption, ransom payments, and access to critical systems. Small businesses must recognise that they are on the front lines of this escalating cyber war.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">The Human Factor: The Gateway to Disaster</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The largest data breach was not just about technology—it exposed how human error remains a critical vulnerability. For small businesses, this rings especially true. Common entry points include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Phishing emails:</strong> Employees opening malicious attachments or clicking on dangerous links.</li>
                <li><strong>Unsafe browsing:</strong> Accessing compromised or malicious websites on company devices.</li>
                <li><strong>Weak passwords and stolen credentials:</strong> Poor password management continues to fuel breaches.</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The fix? Ongoing cyber security education. Staff need regular, practical training to identify threats and respond appropriately. This is not a one-time exercise but a continuous effort to build a security-aware culture.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Where Small Businesses Often Go Wrong</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The global breach reveals common mistakes that small businesses must avoid:
              </p>

              <div className="space-y-6">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Over-reliance on cyber insurance</h4>
                  <p className="text-orange-700">
                    Many assume insurance will cover all damages. However, policies often have strict conditions—such as requiring specific security measures or hardware onsite—and claims can be denied if these aren't met.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">Neglecting regular IT reviews</h4>
                  <p className="text-yellow-700">
                    Simply outsourcing IT support without proactive security assessments leaves gaps open for attackers.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-red-800 mb-2">Underestimating downtime costs</h4>
                  <p className="text-red-700">
                    Beyond direct financial losses, business interruption and reputational damage can be devastating and are often not fully covered by insurance.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">No System Is 100% Safe—But Preparation Is Everything</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The recent breach proves that even the largest organisations can be compromised. Small businesses must accept that no defence is infallible. However, you can dramatically reduce risk by:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Implementing regular, tested backups to ensure rapid recovery.</li>
                <li>Developing and practising an incident response plan.</li>
                <li>Using layered security measures including firewalls, endpoint protection, multi-factor authentication, and timely software updates.</li>
              </ul>

              <h2 className="text-3xl font-bold text-[var(--primary)] mt-12 mb-6">Take Action Now: Don't Wait for Your Own Wake-Up Call</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The world's largest data breach is a warning for all businesses—especially small ones. If you're relying on outdated systems, minimal staff training, or just cyber insurance, your business could be dangerously exposed.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                It's time to act decisively. A professional cyber security assessment can uncover vulnerabilities, strengthen your defences, and prepare you for the unexpected. Protect your business before it's too late—contact Blue Moon IT today for expert guidance and peace of mind.
              </p>

              <hr className="my-12 border-gray-300" />

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Key Takeaways:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Small businesses are prime targets for cybercriminals, with 1 in 5 facing attacks in 2025</li>
                  <li>Human error remains the biggest vulnerability—ongoing staff training is essential</li>
                  <li>Cyber insurance alone isn't enough—proactive security measures are crucial</li>
                  <li>No system is 100% safe, but preparation dramatically reduces risk</li>
                  <li>Regular backups, incident response plans, and layered security are non-negotiable</li>
                  <li>Professional security assessments can identify and address vulnerabilities before it's too late</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Protect Your Business from Cyber Threats
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Don't become another statistic. Get professional cybersecurity protection tailored for Australian small businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Security Assessment</h3>
                <p className="text-sm text-gray-200">Comprehensive evaluation of your current security posture and vulnerability identification.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Ransomware Protection</h3>
                <p className="text-sm text-gray-200">Advanced endpoint protection and backup solutions to prevent and recover from attacks.</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-80 rounded-lg p-6 border border-slate-600">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Staff Training</h3>
                <p className="text-sm text-gray-200">Regular cybersecurity education to build a security-aware culture in your business.</p>
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
                Get Free Security Assessment
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
                View All Articles
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