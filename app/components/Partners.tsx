'use client';

import Image from 'next/image';

const Partners = () => {
  const partners = [
    {
      name: 'Bitdefender',
      image: '/assets/bitdefender.png',
      alt: 'Bitdefender logo'
    },
    {
      name: 'Ubiquiti',
      image: '/assets/ubiquiti.png',
      alt: 'Ubiquiti logo'
    },
    {
      name: 'Fortinet',
      image: '/assets/fortinet.png',
      alt: 'Fortinet logo'
    },
    {
      name: 'Microsoft',
      image: '/assets/microsoft.png',
      alt: 'Microsoft logo'
    },
    {
      name: 'AWS',
      image: '/assets/aws.png',
      alt: 'AWS logo'
    },
    {
      name: 'Office 365',
      image: '/assets/office365.png',
      alt: 'Office 365 logo'
    }
  ];

  return (
    <section className="py-12 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We work with industry-leading technology partners to deliver reliable and secure IT solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="bg-white rounded-lg p-6 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-24">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 