import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = ({ darkMode }) => {
 
const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('user'));

// Update on localStorage change (e.g., different tabs)
useEffect(() => {
  const handleStorage = () => setIsLoggedIn(!!localStorage.getItem('user'));
  window.addEventListener('storage', handleStorage);
  return () => window.removeEventListener('storage', handleStorage);
}, []);

// Update on component mount (in case login happened in same tab)
useEffect(() => {
  setIsLoggedIn(!!localStorage.getItem('user'));
}, []);


  return (
    <section className={`min-h-[80vh] flex flex-col md:flex-row items-center justify-between pt-24 sm:pt-0 px-4 sm:px-8 py-8 sm:py-20 ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>  
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col md:flex-row md:items-start md:gap-8">
        <div className="flex-1">
          <div className="flex flex-wrap items-center mb-2">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-blue-700 mr-2 sm:mr-3">Welcome to VetCare Hospital</h1>
            <span className="inline-block text-2xl sm:text-4xl md:text-6xl">🐾</span>
          </div>
          <div className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl text-blue-600 font-semibold">Caring for pets, saving lives.</div>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">Your pet's health and happiness is our top priority. We provide compassionate, state-of-the-art veterinary care for your beloved companions.</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
            <button
              onClick={() => isLoggedIn ? navigate('/book-appointment') : navigate('/login', { state: { from: '/book-appointment' } })}
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
            >
              Book Appointment
            </button>
            <button
              onClick={() => isLoggedIn ? navigate('/dashboard') : navigate('/login', { state: { from: '/dashboard' } })}
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition font-semibold text-sm sm:text-base"
            >
              Meet Our Doctors
            </button>
            <button
              onClick={() => navigate('/subscription')}
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition font-semibold text-sm sm:text-base"
            >
              Subscription
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center flex-col items-center mt-24">
        {/* Flipping image card */}
        <div className="relative w-full max-w-xs sm:max-w-md h-56 sm:h-80 mb-6 group" style={{ perspective: '1200px' }}>
          <div className="absolute inset-0 w-full h-full transition-transform duration-700" style={{ transformStyle: 'preserve-3d' }}>
            {/* Front: Doctor with dog */}
            <div className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl bg-white/80 overflow-hidden flex items-center justify-center z-10" style={{ backfaceVisibility: 'hidden' }}>
              <img src="https://th.bing.com/th/id/OIP.MHf_rBshIw2Z1EydFlFphQHaD2?w=316&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Doctor with dog" className="object-cover w-full h-full z-20" style={{ opacity: 1 }} />
            </div>
            {/* Back: Forest animals */}
            <div className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl bg-white/80 overflow-hidden flex items-center justify-center z-10" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=600&q=80" alt="Forest animals" className="object-cover w-full h-full z-20" style={{ opacity: 1 }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-center p-2 text-xs sm:text-sm font-semibold">Caring for all creatures, great and small</div>
            </div>
          </div>
        </div>
        {/* Animal Icons Row */}
        <div className="flex gap-2 sm:gap-4 mb-4 text-2xl sm:text-3xl md:text-4xl" aria-label="Animal icons">
          <span title="Dog">🐶</span>
          <span title="Cat">🐱</span>
          <span title="Bird">🐦</span>
          <span title="Rabbit">🐰</span>
          <span title="Horse">🐴</span>
        </div>
        {/* Animal Quotes */}
        <div className="bg-blue-100 dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow text-center w-full max-w-xs sm:max-w-md">
          <p className="italic font-semibold text-blue-700 dark:text-blue-200 mb-2 text-sm sm:text-base">“Saving one animal won’t change the world, but it will change the world for that one animal.”</p>
          <p className="italic text-gray-700 dark:text-gray-300 text-xs sm:text-base">“The greatness of a nation can be judged by the way its animals are treated.”</p>
        </div>
      </div>
      <style>{`
        .group:hover > div { transform: rotateY(180deg); }
        section { background-image: url('https://www.transparenttextures.com/patterns/paw-print.png'); background-repeat: repeat; }
      `}</style>
    </section>
  );
};

export default Landing;
