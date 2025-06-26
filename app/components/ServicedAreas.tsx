'use client';

import Link from 'next/link';

const areas = [
  {
    region: 'Illawarra',
    slug: 'illawarra-wollongong',
    localities: ['Wollongong', 'Shellharbour', 'Kiama', 'Dapto', 'Corrimal', 'Thirroul', 'Port Kembla', 'Unanderra', 'Fairy Meadow', 'Figtree']
  },
  {
    region: 'Shoalhaven',
    slug: 'shoalhaven',
    localities: ['Nowra', 'Berry', 'Bomaderry', 'Culburra Beach', 'Huskisson', 'Sussex Inlet', 'Vincentia', 'Sanctuary Point', 'Gerringong']
  },
  {
    region: 'Eurobodalla',
    slug: 'eurobodalla',
    localities: ['Batemans Bay', 'Moruya', 'Narooma', 'Tuross Head', 'Broulee', 'Malua Bay', 'Nelligen', 'Tomakin']
  },
  {
    region: 'Southern Highlands',
    slug: 'southern-highlands',
    localities: ['Bowral', 'Mittagong', 'Moss Vale', 'Bundanoon', 'Robertson', 'Berrima', 'Exeter', 'Burrawang']
  }
];

const ServicedAreas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Areas We Service</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Blue Moon IT provides professional IT support throughout the following regions in New South Wales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <Link
              key={area.region}
              href={`/${area.slug}`}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <h3 className="text-xl font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] mb-4 pb-2 border-b border-gray-200 transition-colors duration-200">
                {area.region}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </h3>
              <ul className="text-gray-600 space-y-2">
                {area.localities.slice(0, 6).map((locality) => (
                  <li key={locality} className="flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[var(--accent)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {locality}
                  </li>
                ))}
                {area.localities.length > 6 && (
                  <li className="text-xs text-[var(--accent)] font-medium mt-2">
                    +{area.localities.length - 6} more areas
                  </li>
                )}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-[var(--accent)] font-medium group-hover:text-[var(--primary)] transition-colors duration-200">
                  View {area.region} IT Services →
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10 text-gray-600">
          <p>Don't see your location? Contact us anyway - we may still be able to help!</p>
        </div>
      </div>
    </section>
  );
};

export default ServicedAreas; 