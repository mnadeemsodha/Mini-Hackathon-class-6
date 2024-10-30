import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="hover:text-gray-400 cursor-pointer">About Us</span>
            </Link>
            <Link href="/cars" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Cars</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Contact</span>
            </Link>
          </div>

        

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} PakWheels.com. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
