'use client';

const areas = [
  {
    region: 'Illawarra',
    localities: ['Wollongong', 'Shellharbour', 'Kiama', 'Dapto', 'Corrimal', 'Thirroul', 'Port Kembla', 'Unanderra', 'Fairy Meadow', 'Figtree']
  },
  {
    region: 'Shoalhaven',
    localities: ['Nowra', 'Berry', 'Bomaderry', 'Culburra Beach', 'Huskisson', 'Sussex Inlet', 'Vincentia', 'Sanctuary Point', 'Gerringong']
  },
  {
    region: 'Eurobodalla',
    localities: ['Batemans Bay', 'Moruya', 'Narooma', 'Tuross Head', 'Broulee', 'Malua Bay', 'Nelligen', 'Tomakin']
  },
  {
    region: 'Southern Highlands',
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
            <div key={area.region} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4 pb-2 border-b border-gray-200">
                {area.region}
              </h3>
              <ul className="text-gray-600 space-y-2">
                {area.localities.map((locality) => (
                  <li key={locality} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--accent)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {locality}
                  </li>
                ))}
              </ul>
            </div>
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