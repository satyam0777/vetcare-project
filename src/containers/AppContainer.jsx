import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppRoutes from '../routers/AppRoutes';
import useAuth from '../hooks/useAuth';

const AppContainer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const {
    user,
    users,
    appointments,
    doctors,
    handleLogin,
    handleBookAppointment,
    handleLogout,
  } = useAuth();

  // TEMP: Force admin user for demo/testing
  // Remove/comment this in production!
  // const adminUser = {
  //   name: 'Admin',
  //   email: 'admin@vetcare.com',
  //   role: 'admin',
  // };
  // const useAdmin = false; // set to true to test admin
  // const effectiveUser = useAdmin ? adminUser : user;
  const effectiveUser = user;

  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar
        onToggleDarkMode={handleToggleDarkMode}
        darkMode={darkMode}
        user={effectiveUser}
        onLogout={() => {
          handleLogout();
          window.location.href = '/';
        }}
      />
      <AppRoutes
        darkMode={darkMode}
        user={effectiveUser}
        handleLogin={handleLogin}
        handleBookAppointment={handleBookAppointment}
        appointments={appointments[effectiveUser?.email] || []}
        profile={users[effectiveUser?.email] || null}
        doctors={doctors}
      />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default AppContainer;
