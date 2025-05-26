'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Emergency Help', path: '/emergency' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-[var(--primary)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Blue Moon IT"
                width={234}
                height={78}
                priority
                className="h-16 w-auto max-h-16"
                style={{ height: '4rem', width: 'auto' }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-[var(--white-text)] hover:text-[var(--accent)] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="primary-gradient text-[var(--white-text)] px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              onClick={() => window.dispatchEvent(new CustomEvent('openModal'))}
            >
              Get Support
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--white-text)] hover:text-[var(--accent)]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-[var(--white-text)] hover:text-[var(--accent)] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button 
            className="primary-gradient w-full text-[var(--white-text)] mt-2 px-4 py-2 rounded-md shadow-md"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openModal'));
              setMenuOpen(false);
            }}
          >
            Get Support
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 