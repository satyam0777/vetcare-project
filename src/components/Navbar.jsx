import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onToggleDarkMode, darkMode, user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
    setMenuOpen(false);
  };
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap p-4 shadow-md ${darkMode ? 'bg-gray-950/90 text-white' : 'bg-white/90 text-gray-900'} backdrop-blur-md transition-all`}>
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/" className="font-bold text-2xl tracking-tight text-blue-600 flex items-center gap-2" onClick={handleNavClick}>
          <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l1.41-1.41a2 2 0 012.83 0L12 14.17l3.76-3.76a2 2 0 012.83 0L20 12" /></svg>
          VetCare
        </Link>
      </div>
      {/* Hamburger menu for mobile */}
      <div className="block lg:hidden">
        <button
          onClick={handleMenuToggle}
          className="flex items-center px-3 py-2 border rounded text-blue-600 border-blue-400 hover:text-blue-800 hover:border-blue-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      {/* Menu links */}
      <div className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} lg:block bg-white/95 dark:bg-gray-900/95 lg:bg-transparent lg:dark:bg-transparent rounded-xl lg:rounded-none mt-4 lg:mt-0 shadow-lg lg:shadow-none p-4 lg:p-0`}>
        <div className="text-sm lg:flex-grow flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
          <Link to="/" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block mr-6 hover:text-blue-500 font-medium transition">Home</Link>
          <Link to="/vetcare-about" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block mr-6 hover:text-blue-500 font-medium transition">About</Link>
          {!user && <a href="#login" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block hover:text-blue-500 font-medium transition">Login</a>}
          {user && (
            <>
              <Link to="/dashboard" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block mr-6 hover:text-blue-500 font-medium transition">Dashboard</Link>
              <Link to="/book-appointment" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block mr-6 hover:text-blue-500 font-medium transition">Book Appointment</Link>
              <Link to="/appointments" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block mr-6 hover:text-blue-500 font-medium transition">View Appointments</Link>
              <Link to="/profile" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block mr-6 hover:text-blue-500 font-medium transition">Profile</Link>
              {user.role === 'admin' && (
                <Link to="/admin" onClick={handleNavClick} className="block mt-2 lg:mt-0 lg:inline-block mr-6 hover:text-blue-500 font-semibold text-blue-700 transition">Admin</Link>
              )}
              <button onClick={handleLogoutClick} className="ml-0 lg:ml-2 mt-2 lg:mt-0 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700 transition font-medium">Logout</button>
            </>
          )}
        </div>
        <button
          onClick={() => { onToggleDarkMode(); setMenuOpen(false); }}
          className="ml-0 lg:ml-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition mt-4 lg:mt-0 font-medium"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
