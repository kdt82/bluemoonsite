'use client';

import { useState, useEffect } from 'react';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  summary: string;
  urgency: 'Low' | 'Medium' | 'High';
};

const initialFormData: FormData = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  summary: '',
  urgency: 'Medium',
};

const services = [
  'PC Repairs and Upgrades',
  'Smart Home Setup',
  'Home Wi-fi Solutions',
  'Home Cybersecurity',
  'Data Services',
  'Remote Support',
  'Web Hosting and Domain Registration',
  'Software Licensing',
  'Home/Small Business Support',
  'Other',
];

const SupportModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Safely add event listener with type checking
    const handleOpenModal = () => {
      console.log('📣 openModal event received, opening modal...');
      setIsOpen(true);
    };
    
    // Make sure window exists (for SSR)
    if (typeof window !== 'undefined') {
      console.log('🔄 Setting up event listener for openModal event');
      window.addEventListener('openModal', handleOpenModal);
      
      return () => {
        console.log('🔄 Removing event listener for openModal event');
        window.removeEventListener('openModal', handleOpenModal);
      };
    }
    
    return undefined;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!e || !e.target) return;
    
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUrgencyChange = (level: 'Low' | 'Medium' | 'High') => {
    setFormData((prev) => ({
      ...prev,
      urgency: level,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Full name is required';
    if (!formData.phone.trim()) return 'Phone number is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.email.includes('@')) return 'Please enter a valid email';
    if (!formData.service) return 'Please select a service';
    if (!formData.summary.trim()) return 'Please provide a summary of your issue';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      console.log('❌ Form validation failed:', validationError);
      return;
    }

    console.log('✅ Form validation passed, submitting form...');
    setIsSubmitting(true);
    setError('');

    try {
      console.log('📤 Sending form data to API:', formData);
      
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      try {
        // Send the form data to our API endpoint
        const response = await fetch('/api/support', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        console.log('📡 Response status:', response.status);
        console.log('📡 Response headers:', response.headers);

        let result;
        try {
          result = await response.json();
          console.log('📥 API response:', result);
        } catch (jsonError) {
          console.error('❌ Error parsing response JSON:', jsonError);
          const responseText = await response.text();
          console.log('📄 Raw response:', responseText);
          throw new Error('Failed to parse server response');
        }
        
        if (!response.ok) {
          console.error('❌ API returned error status:', response.status, result);
          throw new Error(result?.message || `Server error: ${response.status}`);
        }
        
        if (!result.success) {
          console.error('❌ API returned success: false', result);
          throw new Error(result?.message || 'Server indicated failure');
        }
        
        console.log('🎉 Form submitted successfully!');
        setIsSubmitted(true);
        // Reset form after successful submission
        setFormData(initialFormData);
        
        // Close modal after 3 seconds
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
          console.log('🔒 Closing modal after successful submission');
        }, 3000);
      } catch (fetchError) {
        clearTimeout(timeoutId);
        if (fetchError instanceof Error && fetchError.name === 'AbortError') {
          throw new Error('Request timed out. Please check your connection and try again.');
        }
        throw fetchError;
      }
    } catch (err) {
      console.error('❌ Form submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit your request. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto modal-overlay flex items-center justify-center">
      <div className="relative bg-white rounded-lg max-w-md w-full mx-4 md:mx-auto shadow-xl">
        <button
          type="button"
          onClick={() => {
            if (!isSubmitting) setIsOpen(false);
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          disabled={isSubmitting}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="py-6 px-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[var(--primary)]">Request Support</h3>
            <p className="text-sm text-gray-600 mt-1">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900">Request Submitted!</h3>
              <p className="mt-2 text-sm text-gray-600">
                A ticket has been created and you will be contacted by our support team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-md text-sm">
                  {error}
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Brief Summary</label>
                <textarea
                  id="summary"
                  name="summary"
                  rows={3}
                  value={formData.summary}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                <div className="flex space-x-4">
                  {['Low', 'Medium', 'High'].map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        checked={formData.urgency === level}
                        onChange={() => handleUrgencyChange(level as 'Low' | 'Medium' | 'High')}
                        className="focus:ring-[var(--accent)] h-4 w-4 text-[var(--accent)] border-gray-300"
                        disabled={isSubmitting}
                      />
                      <span className="ml-2 text-sm text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white primary-gradient hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportModal; 