import React from 'react';

const VetCareAbout = ({ darkMode }) => (
  <section
    className={`min-h-[80vh] flex flex-col items-center justify-center pt-30 px-4 py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    style={{
      backgroundImage: "url('/vetcare-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 1
    }}
  >
    <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 animate-fadeIn backdrop-blur-md border border-blue-200 dark:border-gray-700">
      <h2 className="text-3xl font-extrabold mb-4 text-blue-700 dark:text-blue-300 text-center">Our Story & Mission</h2>
      <p className="mb-4 text-lg text-center italic text-blue-700 dark:text-blue-200">“Every animal deserves a chance at a happy, healthy life.”</p>
      <p className="mb-4 text-base md:text-lg">VetCare was born from a moment of compassion—a stray animal in need, a desire to help, and a vision to make veterinary care accessible and loving for all. Our founder was moved by the struggles of animals who had no voice and no one to care for them. This project is a tribute to every pet and animal who has ever needed a helping hand.</p>
      <p className="mb-4 text-base md:text-lg">Our mission is simple: to provide the best possible care for every animal, to support pet owners with modern tools, and to build a community where compassion and expertise go hand in hand. We believe technology can bridge the gap between pets and the care they deserve.</p>
      <h3 className="text-2xl font-bold mt-8 mb-2 text-blue-600">The Future of VetCare</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Expanding our network of trusted veterinarians and clinics</li>
        <li>Launching telemedicine and remote pet care features</li>
        <li>Building a support community for pet owners</li>
        <li>Integrating advanced health tracking and reminders</li>
        <li>Continuing to innovate for animal welfare and happiness</li>
      </ul>
      <p className="text-base md:text-lg text-center mt-6">Thank you for being part of our journey. Together, we can make a difference—one paw at a time.</p>
    </div>
    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: none; }
      }
      .animate-fadeIn { animation: fadeIn 0.7s both; }
    `}</style>
  </section>
);

export default VetCareAbout;
