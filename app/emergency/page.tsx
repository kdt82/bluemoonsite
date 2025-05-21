'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SupportModal from '../components/SupportModal';
import Link from 'next/link';
import Image from 'next/image';

export default function EmergencyPage() {
  const openModal = () => {
    if (typeof window !== 'undefined') {
      // Dispatch the event and check if any listeners received it
      const hasListeners = window.dispatchEvent(new CustomEvent('openModal'));
      
      console.log('🔔 Emergency support modal trigger attempted, successful:', hasListeners);
      
      // Fallback in case the event listener isn't working
      if (!hasListeners) {
        console.warn('No listeners found for openModal event. Try alternative method.');
        // Here you might add alternative ways to open the modal
      }
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-red-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Emergency IT Support
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Critical IT issues can't wait. We're here to help when you need it most.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">
                  Fast Response When It Matters Most
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  When technical disasters strike, quick action can save crucial data, minimize downtime, and get you back up and running. Our emergency support team is equipped to handle critical issues for both home users and small businesses.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-red-600">
                  <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">
                    For Immediate Assistance:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call: 02 8313 0444
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email: support@bluemoonit.com.au
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openModal}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Request Emergency Support
                  </button>
                  <Link 
                    href="/services"
                    className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-8">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-5">
                  Emergency Services Include:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Critical system failure recovery',
                    'Data recovery & backup assistance',
                    'Virus/malware incident response',
                    'Network outage resolution',
                    'Hardware breakdown support',
                    'Remote desktop assistance',
                    'Business continuity assistance'
                  ].map((service, index) => (
                    <li key={index} className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-md border border-gray-200">
                  <p className="text-sm text-gray-600">
                    Emergency support is available outside of our regular business hours (8:30am to 5:00pm Monday to Friday). Emergency callout fees may apply.
                  </p>
                </div>
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