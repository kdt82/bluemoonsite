'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SupportModal from '../components/SupportModal';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 'pc-repairs',
    title: 'PC Repairs & Upgrades',
    description: 'Get your computer running like new again. We diagnose and repair hardware issues, speed up slow computers, and upgrade components for better performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Hardware diagnostics & repairs',
      'Software troubleshooting',
      'Virus & malware removal',
      'Data backup & recovery',
      'Hardware upgrades (RAM, SSD, etc.)',
      'Performance optimisation'
    ]
  },
  {
    id: 'smart-home',
    title: 'Smart Home Setup',
    description: 'Transform your home with the latest smart technology. We help you select, install, and configure smart devices for a seamless connected home experience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: [
      'Smart speaker setup & configuration',
      'Smart lighting systems',
      'Smart appliance integration',
      'Security camera installation',
      'Smart thermostat installation',
      'Voice assistant optimisation'
    ]
  },
  {
    id: 'wifi',
    title: 'Home Wi-Fi Solutions',
    description: 'Eliminate dead zones and achieve reliable, fast Wi-Fi coverage throughout your entire home with our custom Wi-Fi solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    features: [
      'Wi-Fi signal analysis',
      'Mesh network setup',
      'Router installation & configuration',
      'Wi-Fi extender setup',
      'Network optimisation',
      'Channel interference resolution'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Home Cybersecurity',
    description: 'Protect your digital life with comprehensive security solutions. We help you safeguard your personal data, devices, and online privacy.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      'Antivirus & security software installation',
      'Firewall setup & configuration',
      'Password management solutions',
      'Secure browsing configuration',
      'Phishing protection',
      'Regular security updates'
    ]
  },
  {
    id: 'data-services',
    title: 'Data Services',
    description: 'Protect your valuable data with our backup and recovery solutions. We ensure your important files are safely stored and recoverable in case of emergency.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    features: [
      'Data backup solutions',
      'Cloud storage setup',
      'Automated backup configuration',
      'Data recovery services',
      'Data migration assistance',
      'External drive setup'
    ]
  },
  {
    id: 'remote-support',
    title: 'Remote Support',
    description: 'Get expert assistance without leaving home through our secure remote support services. We can diagnose and fix many issues remotely.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Remote diagnostics',
      'Software troubleshooting',
      'System optimisation',
      'Software installation assistance',
      'Quick response times',
      'Secure screen sharing'
    ]
  },
  {
    id: 'web-hosting',
    title: 'Web Hosting & Domain Registration',
    description: 'Establish your online presence with our reliable web hosting and domain registration services. We help you choose the right hosting plan and domain name.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: [
      'Domain name registration',
      'Web hosting services',
      'Email hosting',
      'Website migration',
      'SSL certificate installation',
      'DNS management'
    ]
  },
  {
    id: 'software-licensing',
    title: 'Software Licensing',
    description: 'Get legitimate software licences at competitive prices. We are an authorised reseller of Microsoft Office 365 and Bitdefender security solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    features: [
      'Microsoft Office 365 licensing',
      'Bitdefender security solutions',
      'Software installation assistance',
      'Volume licensing for businesses',
      'Licence management',
      'Software updates & support'
    ]
  },
  {
    id: 'small-business',
    title: 'Home/Small Business Support',
    description: 'Comprehensive IT support tailored for home offices and small businesses. We provide the technical expertise you need to keep your business running smoothly.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      'Network setup & maintenance',
      'Hardware recommendations & sourcing',
      'Software installation & configuration',
      'Data backup solutions',
      'Security implementation',
      'Regular maintenance & support'
    ]
  }
];

export default function ServicesPage() {
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
                Our IT Services
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Comprehensive IT solutions for home users and small businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 text-[var(--accent)]">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[var(--secondary)] mb-3">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <div className="mt-2 mb-6">
                          <h3 className="text-lg font-semibold text-[var(--primary)] mb-3">
                            What's Included:
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button 
                          onClick={openModal}
                          className="primary-gradient text-white py-2 px-4 rounded shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Request Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--primary)]">
                  Need Emergency Support?
                </h2>
                <p className="text-lg text-gray-600 mt-2">
                  We're available for urgent IT issues that can't wait.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/emergency"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  Emergency Support
                </Link>
                <button 
                  onClick={openModal}
                  className="primary-gradient text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Us Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SupportModal />
    </>
  );
} 