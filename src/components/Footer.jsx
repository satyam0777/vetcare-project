import React from 'react';

const Footer = ({ darkMode }) => (
  <footer className={`w-full py-6 mt-12 border-t ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-white border-blue-100 text-gray-700'}`}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="mb-2 md:mb-0">
        <span className="font-bold text-blue-600">VetCare</span> &copy; {new Date().getFullYear()} All rights reserved.
      </div>
      <div className="flex space-x-4 text-sm">
        <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
        <a href="/contact" className="hover:text-blue-500 transition" target="_blank" rel="noopener noreferrer">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
