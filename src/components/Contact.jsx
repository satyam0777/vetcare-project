import React from 'react';

const Contact = ({ darkMode }) => (
  <section className={`min-h-[80vh] flex items-center justify-center mt-16 pt-24 sm:pt-0 px-4 py-20 ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
    <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-10 max-w-2xl w-full animate-fadeIn backdrop-blur-md border border-blue-200 dark:border-gray-700">
      <h2 className="text-3xl font-extrabold mb-2 text-blue-700 dark:text-blue-300 text-center">Contact & About the Developer</h2>
      <div className="flex flex-col items-center mt-6 mb-8">
        <img src="/photos/satyam-vet-photo.jpg" alt="Satyam Prajapati" className="w-32 h-32 rounded-full shadow-lg mb-4 border-4 border-blue-200 dark:border-blue-800" />
        <div className="text-xl font-bold text-blue-700 dark:text-blue-200">Satyam Prajapati</div>
        <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">Full Stack Developer</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">React | Node.js | Express | MongoDB | Tailwind CSS</div>
        <a href="mailto:officialsatyam0777@gmail.com" className="text-blue-600 dark:text-blue-300 underline mb-2">officialsatyam0777@gmail.com</a>
       <span>
        <a href="https://www.linkedin.com/in/satyam-prajapati-13a690256/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline">LinkedIn</a>
        <a href="https://x.com/Satyam9352" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline">Twitter </a>
        
        <a href="https://github.com/Satyam0777" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline">GitHub </a>
      </span>
      </div>
      <div className="mb-6 text-center text-lg">
        <p className="mb-2">Hi, I'm Satyam Prajapati, a passionate Full Stack Developer dedicated to building impactful web applications.</p>
        <p className="mb-2">I created VetCare as a modern, professional veterinary hospital platform to help pet owners easily connect with trusted doctors, book appointments, and manage pet health records. This project demonstrates my skills in React, responsive UI, authentication, and user experience design.</p>
        <p className="mb-2">My goal is to use technology to make a positive difference in people's (and animals') lives. Thank you for visiting!</p>
      </div>
      <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">&copy; {new Date().getFullYear()} Satyam Prajapati. All rights reserved.</div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeIn { animation: fadeIn 0.7s both; }
      `}</style>
    </div>
  </section>
);

export default Contact;
