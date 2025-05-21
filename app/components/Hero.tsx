'use client';

import Image from 'next/image';

const Hero = () => {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <section className="relative h-[600px] md:h-[650px] lg:h-[700px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="IT Support Services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--primary)] opacity-60 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in">
              Professional IT Support in the Illawarra
            </h1>
            <p className="text-xl text-white mb-8 opacity-0 animate-fade-in animation-delay-200">
              Servicing home users and small businesses with reliable tech solutions.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex opacity-0 animate-fade-in animation-delay-400">
              <button 
                onClick={openModal}
                className="primary-gradient px-8 py-3 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                Get Support Now
              </button>
              <button 
                onClick={() => window.location.href = '/services'}
                className="bg-white px-8 py-3 text-[var(--primary)] rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 text-lg font-medium"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Highlight */}
      <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] bg-opacity-90 py-4 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            <p className="text-[var(--white-text)] font-medium text-center md:text-left mb-2 md:mb-0">
              Proudly serving:
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--white-text)]">
              <span>Illawarra</span>
              <span>•</span>
              <span>Shoalhaven</span>
              <span>•</span>
              <span>Eurododalla</span>
              <span>•</span>
              <span>Southern Highlands</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Hero; 