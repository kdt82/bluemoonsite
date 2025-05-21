'use client';

const EmergencyHelp = () => {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <section className="py-12 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 flex-shrink-0 bg-red-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-[var(--primary)]">Emergency IT Support</h3>
                </div>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Experiencing critical IT issues outside business hours? Our emergency support is available when you need it most. Submit your request with high urgency, and we'll respond as quickly as possible.
                </p>
                
                <div className="mt-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-2 font-medium text-[var(--primary)]">02 8313 0444</span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <button
                  onClick={openModal}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Emergency Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHelp; 