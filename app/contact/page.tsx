'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SupportModal from '../components/SupportModal';

// Metadata needs to be in a separate file for client components
// This is just for reference - in a real app would be in app/contact/layout.tsx
// export const metadata = {
//   title: 'Contact Us | Blue Moon IT',
//   description: 'Get in touch with Blue Moon IT for professional IT support services in Illawarra, Shoalhaven, Eurododalla and Southern Highlands.',
// };

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // In a real implementation, this would call an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to submit your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    if (typeof window !== 'undefined') {
      // Dispatch the event and check if any listeners received it
      const hasListeners = window.dispatchEvent(new CustomEvent('openModal'));
      
      console.log('🔔 Support modal trigger attempted, successful:', hasListeners);
      
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
        <section className="bg-[var(--primary)] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Get in touch with our team for professional IT support.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-[var(--secondary)] mb-6">
                  Get in Touch
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl font-medium text-gray-900 text-center mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-center">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-3 bg-red-50 text-red-800 rounded-md text-sm">
                        {error}
                      </div>
                    )}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="primary-gradient text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-[var(--secondary)] mb-6">
                  Contact Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-[var(--primary)]">Phone</h3>
                        <p className="mt-1 text-gray-600"><a href="tel:0283130444" className="hover:text-[var(--accent)]">02 8313 0444</a></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-[var(--primary)]">Email</h3>
                        <p className="mt-1 text-gray-600"><a href="mailto:support@bluemoonit.com.au" className="hover:text-[var(--accent)]">support@bluemoonit.com.au</a></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-[var(--primary)]">Operating Hours</h3>
                        <p className="mt-1 text-gray-600">8:30am to 5:00pm Monday to Friday</p>
                        <p className="mt-1 text-gray-600">Emergency Support is available outside these hours</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-[var(--primary)] mb-3">Service Areas</h3>
                      <p className="text-gray-600">Proudly servicing Illawarra, Shoalhaven, Eurobodalla and Southern Highlands regions.</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      onClick={openModal}
                      className="accent-gradient text-white py-3 px-4 w-full border border-transparent rounded-md shadow-sm text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Request IT Support
                    </button>
                    <div className="mt-4 bg-blue-50 border border-blue-100 rounded-md p-4">
                      <p className="text-sm text-blue-800">
                        <strong>Need urgent help?</strong> For emergency IT support outside business hours, please use our emergency support option.
                      </p>
                      <a
                        href="/emergency"
                        className="inline-block mt-2 text-sm font-medium text-blue-700 hover:text-blue-900"
                      >
                        Learn more about emergency support →
                      </a>
                    </div>
                  </div>
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
};

export default ContactPage; 