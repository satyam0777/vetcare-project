import React from 'react';

const About = ({ darkMode }) => (
  <section id="about" className={`relative pt-24 sm:pt-0 py-16 px-4 sm:px-8 overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
    {/* Background doctor/dog image, transparent and blurred for effect */}
    <img
      src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80"
      alt="Doctor with dog"
      className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none select-none"
      style={{ zIndex: 0 }}
    />
    <div className="relative max-w-3xl mx-auto" style={{ zIndex: 1 }}>
      <h2 className="text-3xl font-bold mb-4 text-blue-600">About VetCare Hospital</h2>
      <p className="mb-2 text-lg">At VetCare Hospital, we are dedicated to providing the best medical care for your pets. Our experienced veterinarians and caring staff ensure your furry friends receive the attention and treatment they deserve.</p>
      <ul className="list-disc ml-6 mt-4">
        <li>24/7 Emergency Services</li>
        <li>Modern Diagnostic Facilities</li>
        <li>Experienced Veterinary Team</li>
        <li>Pet Wellness & Preventive Care</li>
      </ul>
      {/* Contact the Developer Button */}
      <div className="flex justify-center mt-10">
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition font-semibold text-lg animate-fadeIn"
        >
          Contact the Developer
        </a>
      </div>
    </div>
  </section>
);

export default About;
