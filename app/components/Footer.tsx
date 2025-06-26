import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-[var(--white-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61576388196114" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-[var(--accent)] hover:text-white transition-colors">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/blue-moon-it-au" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-[var(--accent)] hover:text-white transition-colors">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/>
                </svg>
              </a>
            </div>
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
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday: 8:30am - 5:00pm</li>
              <li>Tuesday: 8:30am - 5:00pm</li>
              <li>Wednesday: 8:30am - 5:00pm</li>
              <li>Thursday: 8:30am - 5:00pm</li>
              <li>Friday: 8:30am - 5:00pm</li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">Contact Us</h3>
            <p className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0283130444" className="hover:text-[var(--accent)]">02 8313 0444</a>
            </p>
            <p className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:support@bluemoonit.com.au" className="hover:text-[var(--accent)]">support@bluemoonit.com.au</a>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--secondary)]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Blue Moon IT. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm">
                Servicing Illawarra, Shoalhaven, Eurobodalla and Southern Highlands
              </p>
            </div>
          </div>
          <div className="w-full text-center mt-4">
            <a
              href="https://abr.business.gov.au/ABN/View?abn=12159169631"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(31, 163, 227, 0.2)' }}
              className="text-xs select-none"
            >
              Australian Business Number (ABN) - 12 159 169 631
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 