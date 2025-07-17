"use client";

import React, { useState, useEffect } from 'react';
import { FaTimes, FaShip, FaGlassCheers } from 'react-icons/fa';

const TemporaryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const startDate = new Date('2025-07-18T00:00:00+10:00'); // AEST is UTC+10
    const endDate = new Date('2025-07-21T23:59:59+10:00'); // AEST is UTC+10

    const params = new URLSearchParams(window.location.search);
    const isPreview = params.get('preview-popup') === 'true';

    if (isPreview || (now >= startDate && now <= endDate)) {
      setIsOpen(true);
    }
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-yellow-300 p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-800 hover:text-black"
        >
          <FaTimes size={24} />
        </button>
        <div className="flex justify-center items-center mb-4">
          <FaShip className="text-5xl text-blue-500 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Ahoy, Mateys! We&apos;re Off on an Adventure!</h2>
        </div>
        <p className="text-gray-700 mb-4">
          Our crew is taking a much-needed break to recharge on an 80s-themed team-building cruise! We&apos;ll be trading our keyboards for keytars and enjoying some retro fun on the high seas.
        </p>
        <p className="text-gray-700 mb-4">
          We&apos;ll be back on deck, bright-eyed and bushy-tailed, on <strong>Tuesday, 22nd July 2025</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          While we&apos;re away, you can follow our shenanigans on the <a href="https://www.facebook.com/bluemoonit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Blue Moon IT Facebook page</a> to see our epic costumes and questionable dance moves!
        </p>
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Need a hand while we&apos;re gone? No worries!</p>
          <p className="text-gray-700">Leave us a message at <a href="tel:0283130444" className="text-blue-600 hover:underline">02 8313 0444</a> or flick us an email at <a href="mailto:support@bluemoonit.com.au" className="text-blue-600 hover:underline">support@bluemoonit.com.au</a>, and we&apos;ll get back to you as soon as we&apos;re back on dry land.</p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <FaGlassCheers className="text-5xl text-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default TemporaryPopup; 