'use client';

import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SupportModal from '../../components/SupportModal';
import Link from 'next/link';

// Service data
const services = {
  'pc-repairs': {
    title: 'PC Repairs & Upgrades',
    description: 'Get your computer running like new again with our professional PC repair and upgrade services.',
    longDescription: 'Whether your computer is running slowly, won\'t start, or needs component upgrades for better performance, our expert technicians can help. We diagnose and fix a wide range of hardware and software issues, perform critical data recovery, and upgrade components like RAM, storage, and graphics cards to extend the life of your PC.',
    features: [
      'Hardware diagnostics & repairs',
      'Software troubleshooting',
      'Virus & malware removal',
      'Data backup & recovery',
      'Hardware upgrades (RAM, SSD, etc.)',
      'Performance optimisation'
    ],
    benefits: [
      'Extend the life of your computer',
      'Improve system performance and speed',
      'Safeguard your important data',
      'Save money compared to buying new hardware',
      'Professional diagnosis of complex issues'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  'smart-home': {
    title: 'Smart Home Setup',
    description: 'Transform your home with the latest smart technology for convenience, security, and efficiency.',
    longDescription: 'Our smart home specialists help you select, install, and configure smart devices to create a seamless connected home experience. From smart speakers and lighting to security cameras and thermostats, we ensure all your devices work together perfectly, while providing training on how to get the most from your smart home ecosystem.',
    features: [
      'Smart speaker setup & configuration',
      'Smart lighting systems',
      'Smart appliance integration',
      'Security camera installation',
      'Smart thermostat installation',
      'Voice assistant optimisation'
    ],
    benefits: [
      'Enhanced home comfort and convenience',
      'Improved energy efficiency and cost savings',
      'Strengthened home security',
      'Centralized control of home systems',
      'Seamless integration between devices'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  'wifi': {
    title: 'Home Wi-Fi Solutions',
    description: 'Eliminate dead zones and enjoy reliable, fast Wi-Fi coverage throughout your entire home.',
    longDescription: 'Our home Wi-Fi solutions address common problems like slow connections, dead zones, and interference. We analyse your space, recommend the best equipment for your needs, and configure your network for optimal performance. From mesh systems to extenders and enterprise-grade access points, we ensure strong, reliable coverage in every corner of your home.',
    features: [
      'Wi-Fi signal analysis',
      'Mesh network setup',
      'Router installation & configuration',
      'Wi-Fi extender setup',
      'Network optimisation',
      'Channel interference resolution'
    ],
    benefits: [
      'Consistent Wi-Fi coverage throughout your home',
      'Faster internet speeds for streaming and gaming',
      'Reliable connections for multiple devices',
      'Reduced network congestion',
      'Enhanced security for your home network'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  },
  'cybersecurity': {
    title: 'Home Cybersecurity',
    description: 'Protect your digital life with comprehensive security solutions for your home and devices.',
    longDescription: 'In today\'s connected world, cybersecurity is essential for protecting your personal information. We provide comprehensive security solutions including antivirus software installation, firewall configuration, secure Wi-Fi setup, password management, and safe browsing practices. As a Bitdefender Authorised Reseller, we offer premium security software with professional installation and configuration.',
    features: [
      'Antivirus & security software installation',
      'Firewall setup & configuration',
      'Password management solutions',
      'Secure browsing configuration',
      'Phishing protection',
      'Regular security updates'
    ],
    benefits: [
      'Protection against viruses and malware',
      'Safeguarding of personal information',
      'Defense against identity theft',
      'Secure online shopping and banking',
      'Peace of mind for your digital life'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  'data-services': {
    title: 'Data Services',
    description: 'Protect your valuable data with our comprehensive backup and recovery solutions.',
    longDescription: 'Your data is invaluable—photos, documents, emails, and more. Our data services ensure your important files are safely stored and recoverable in case of hardware failure, theft, or damage. We implement automated backup solutions, cloud storage integration, and disaster recovery plans tailored to your specific needs, protecting your digital memories and important information.',
    features: [
      'Data backup solutions',
      'Cloud storage setup',
      'Automated backup configuration',
      'Data recovery services',
      'Data migration assistance',
      'External drive setup'
    ],
    benefits: [
      'Protection against data loss',
      'Easy recovery from hardware failures',
      'Secure storage of important files',
      'Automated backup processes',
      'Access to your data from anywhere'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  'remote-support': {
    title: 'Remote Support',
    description: 'Get expert assistance without leaving home through our secure remote support services.',
    longDescription: 'Our remote support service allows us to diagnose and fix many issues without the need for an in-person visit. Using secure screen-sharing technology, our technicians can troubleshoot problems, install software, configure settings, and provide guidance in real-time. This service is perfect for quick fixes, software issues, and situations where immediate help is needed.',
    features: [
      'Remote diagnostics',
      'Software troubleshooting',
      'System optimisation',
      'Software installation assistance',
      'Quick response times',
      'Secure screen sharing'
    ],
    benefits: [
      'Quick resolution of technical issues',
      'No need to transport equipment',
      'Cost-effective support option',
      'Immediate assistance available',
      'Secure connection for your privacy'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  'web-hosting': {
    title: 'Web Hosting & Domain Registration',
    description: 'Establish your online presence with reliable web hosting and domain registration services.',
    longDescription: 'Whether you\'re launching a personal blog or a business website, we provide reliable web hosting and domain registration services to establish your online presence. We help you select the right domain name, choose appropriate hosting plans, set up email accounts, and ensure your website is secure with SSL certificates. Our hosting services offer excellent uptime, fast loading speeds, and room to grow.',
    features: [
      'Domain name registration',
      'Web hosting services',
      'Email hosting',
      'Website migration',
      'SSL certificate installation',
      'DNS management'
    ],
    benefits: [
      'Professional online presence',
      'Fast and reliable website loading',
      'Secure website connections (HTTPS)',
      'Custom email addresses (@yourdomain)',
      'Technical support for hosting issues'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  'software-licensing': {
    title: 'Software Licensing',
    description: 'Get legitimate software licences at competitive prices from our authorised resellers.',
    longDescription: 'As authorised resellers of Microsoft Office 365 and Bitdefender security solutions, we provide legitimate software licences at competitive prices. We help you select the right software packages for your needs, install and configure the applications, and ensure you\'re getting the most value from your software investment. Our licensing services include volume options for small businesses and ongoing support.',
    features: [
      'Microsoft Office 365 licensing',
      'Bitdefender security solutions',
      'Software installation assistance',
      'Volume licensing for businesses',
      'Licence management',
      'Software updates & support'
    ],
    benefits: [
      'Genuine software at competitive prices',
      'Professional installation and setup',
      'Regular updates and new features',
      'Technical support from authorised partners',
      'Multiple device coverage options'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    )
  },
  'small-business': {
    title: 'Home/Small Business Support',
    description: 'Comprehensive IT support tailored for home offices and small businesses.',
    longDescription: 'Small businesses need reliable technology without the cost of a full-time IT department. Our home/small business support provides comprehensive IT services including network setup, hardware procurement, software installation, security implementation, data backup, and ongoing maintenance. We become your dedicated IT team, ensuring your technology supports your business goals.',
    features: [
      'Network setup & maintenance',
      'Hardware recommendations & sourcing',
      'Software installation & configuration',
      'Data backup solutions',
      'Security implementation',
      'Regular maintenance & support'
    ],
    benefits: [
      'Professional IT support without a full-time staff',
      'Reduced technology-related downtime',
      'Strategic technology planning',
      'Consistent and reliable performance',
      'Peace of mind for business operations'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
};

export default function ServicePage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = services[serviceId as keyof typeof services];
  
  if (!service) {
    return (
      <>
        <Header />
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-[var(--primary)]">Service Not Found</h1>
            <p className="mt-4 text-gray-600">The requested service could not be found.</p>
            <Link href="/services" className="mt-6 inline-block text-[var(--accent)] hover:text-[var(--secondary)]">
              View All Services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-[var(--primary)] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                    About Our {service.title} Service
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {service.longDescription}
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                    What's Included
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="inline-block p-3 bg-[var(--accent)] bg-opacity-10 rounded-full mb-4">
                      <div className="text-[var(--accent)]">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--primary)]">
                      Ready to get started?
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Contact us now for {service.title.toLowerCase()} services in the Illawarra region.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <button
                      onClick={openModal}
                      className="w-full primary-gradient text-white py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Request This Service
                    </button>
                    
                    <Link
                      href="/services"
                      className="w-full block text-center bg-white border border-[var(--primary)] text-[var(--primary)] py-3 px-4 rounded-md hover:bg-gray-50 transition-all duration-300"
                    >
                      Explore Other Services
                    </Link>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-[var(--primary)] mb-2">
                      Need emergency support?
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      If you're experiencing urgent issues, contact us immediately for priority assistance.
                    </p>
                    <Link
                      href="/emergency"
                      className="text-[var(--accent)] hover:text-[var(--secondary)] font-medium text-sm"
                    >
                      Learn about emergency support →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[var(--primary)]">
                Other Services You Might Be Interested In
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(services)
                .filter(([id]) => id !== serviceId)
                .slice(0, 3)
                .map(([id, relatedService]) => (
                  <Link 
                    key={id} 
                    href={`/services/${id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="text-[var(--accent)] mb-4">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--secondary)] mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedService.description}
                    </p>
                    <span className="text-[var(--accent)] text-sm font-medium">
                      Learn more →
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SupportModal />
    </>
  );
} 