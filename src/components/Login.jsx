import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = ({ darkMode, onLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set user in localStorage for authentication check
    localStorage.setItem('user', JSON.stringify({ name: 'User', role: 'user' }));
    if (onLogin) onLogin({ name: 'User', role: 'user' });
    navigate(from);
  };

  return (
    <section id="login" className={`pt-32 sm:pt-0 py-30 px-4 min-h-[95vh] flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white' : 'bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900'}`}>
      <form className="relative bg-white/90 dark:bg-gray-900/90 p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-blue-200 dark:border-gray-700 animate-fadeIn backdrop-blur-md" onSubmit={handleSubmit}>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-800 rounded-full p-4 shadow-lg flex items-center justify-center">
          <span className="text-4xl">🐾</span>
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-center text-blue-700 dark:text-blue-300">Login to VetCare</h2>
        <p className="mb-6 text-center text-blue-500 dark:text-blue-200 text-sm">Caring for pets, saving lives.</p>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700" type="email" id="email" required placeholder="you@email.com" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="password">Password</label>
          <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700" type="password" id="password" required placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-blue-600 dark:bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition font-semibold text-lg shadow">Login</button>
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">By logging in, you agree to our <span className="underline cursor-pointer">Terms</span> & <span className="underline cursor-pointer">Privacy Policy</span>.</div>
      </form>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeIn { animation: fadeIn 0.7s both; }
      `}</style>
    </section>
  );
};

export default Login;
