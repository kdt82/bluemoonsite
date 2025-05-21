import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-[var(--white-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Image 
              src="/assets/logo.png" 
              alt="Blue Moon IT" 
              width={160} 
              height={50} 
              className="mb-4"
            />
            <p className="text-sm">
              Professional IT support for home users and small businesses in the Illawarra and surrounding regions.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/pc-repairs" className="hover:text-[var(--accent)]">PC Repairs & Upgrades</Link></li>
              <li><Link href="/services/smart-home" className="hover:text-[var(--accent)]">Smart Home Setup</Link></li>
              <li><Link href="/services/wifi" className="hover:text-[var(--accent)]">Home Wi-Fi Solutions</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-[var(--accent)]">Home Cybersecurity</Link></li>
              <li><Link href="/services" className="hover:text-[var(--accent)]">View All Services</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/emergency" className="hover:text-[var(--accent)]">Emergency Help</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--accent)]">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[var(--accent)]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[var(--accent)]">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">Contact Us</h3>
            <p className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              02 8313 0444
            </p>
            <p className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@bluemoonit.com.au
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              8:30am to 5:00pm Monday to Friday
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--secondary)]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Blue Moon IT. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm">
                Servicing Illawarra, Shoalhaven, Eurododalla and Southern Highlands
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 