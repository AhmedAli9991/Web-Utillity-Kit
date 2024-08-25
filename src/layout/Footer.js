// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="hover:underline text-sm">About</a>
          <a href="/contact" className="hover:underline text-sm">Contact</a>
          <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
