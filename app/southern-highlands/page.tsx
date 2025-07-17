'use client';

import SupportModal from '../components/SupportModal';
import Link from 'next/link';
import Image from 'next/image';

const southern_highlands_areas = [
  'Bowral', 'Mittagong', 'Moss Vale', 'Bundanoon', 'Robertson', 
  'Berrima', 'Exeter', 'Burrawang'
];

const services_highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'PC Repairs & Upgrades',
    description: 'Expert computer repair and upgrade services'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Smart Home Setup',
    description: 'Professional smart home installation and configuration'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'Wi-Fi Solutions',
    description: 'Eliminate dead zones with our Wi-Fi optimisation'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Cybersecurity',
    description: 'Protect your devices and data from threats'
  }
];

export default function SouthernHighlandsPage() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero.jpg"
              alt="IT Support in Southern Highlands"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[var(--primary)] opacity-70 z-10"></div>
          </div>

          <div className="relative h-full z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Professional IT Support in Southern Highlands
                </h1>
                <p className="text-xl text-white mb-8">
                  Trusted IT services across the picturesque Southern Highlands. From Bowral to Bundanoon, 
                  we provide expert computer repair, smart home setup, and cybersecurity solutions.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <button 
                    onClick={openModal}
                    className="primary-gradient px-8 py-3 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-medium"
                  >
                    Get Support Now
                  </button>
                  <Link 
                    href="/services"
                    className="bg-white px-8 py-3 text-[var(--primary)] rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 text-lg font-medium inline-block text-center"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
                Servicing the Southern Highlands
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We proudly provide IT support services to homes and businesses across 
                the beautiful Southern Highlands region, including:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {southern_highlands_areas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <span className="font-medium text-[var(--primary)]">{area}</span>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156789.12345678901!2d150.4123!3d-34.4756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a8b9c8d7e6f5%3A0x402a35af3deaf50!2sSouthern%20Highlands%2C%20NSW!5e0!3m2!1sen!2sau!4v1703168000000!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blue Moon IT Service Areas - Southern Highlands"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
                Our Popular Services in Southern Highlands
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From charming Bowral to historic Berrima, we deliver comprehensive IT solutions 
                for country living and business excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {services_highlights.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="text-[var(--accent)] mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/services"
                className="primary-gradient px-8 py-3 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-medium inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Local Commitment */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Local IT Experts
              </h2>
              <p className="text-lg text-white max-w-4xl mx-auto mb-8">
                We understand the unique needs of Southern Highlands residents and businesses. 
                Whether you&apos;re running a boutique business in Bowral or working remotely from the rolling hills of Robertson, 
                we provide reliable IT support that matches your refined lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={openModal}
                  className="bg-white px-8 py-3 text-[var(--primary)] rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 text-lg font-medium"
                >
                  Get Free Consultation
                </button>
                <Link 
                  href="/contact"
                  className="border-2 border-white px-8 py-3 text-white rounded-md hover:bg-white hover:text-[var(--primary)] transition-all duration-300 text-lg font-medium inline-block text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-100 border border-red-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
                Need Emergency IT Support?
              </h2>
              <p className="text-red-700 mb-6">
                Computer crashed? Internet down? We provide emergency IT support 
                across the Southern Highlands region.
              </p>
              <Link 
                href="/emergency"
                className="bg-red-600 px-8 py-3 text-white rounded-md shadow-lg hover:bg-red-700 transition-all duration-300 text-lg font-medium inline-block"
              >
                Get Emergency Help
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SupportModal />
    </>
  );
} 