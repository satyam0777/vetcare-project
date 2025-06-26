import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import About from '../components/About';
import Login from '../components/Login';
import UserDashboard from '../components/UserDashboard';
import BookAppointment from '../components/BookAppointment';
import ViewAppointments from '../components/ViewAppointments';
import Profile from '../components/Profile';
import PetRecords from '../components/PetRecords';
import Support from '../components/Support';
import AdminDashboard from '../components/AdminDashboard';
import Contact from '../components/Contact';
import Subscription from '../components/Subscription';
import VetCareAbout from '../components/VetCareAbout';

const AppRoutes = ({
  darkMode,
  user,
  handleLogin,
  handleBookAppointment,
  appointments,
  profile,
  doctors
}) => (
  <Routes>
    <Route path="/" element={
      <>
        <Landing darkMode={darkMode} />
        <About darkMode={darkMode} />
        {!user && <Login darkMode={darkMode} onLogin={handleLogin} />}
      </>
    } />
    <Route path="/dashboard" element={
      user ? <UserDashboard darkMode={darkMode} doctors={doctors} /> : <Login darkMode={darkMode} onLogin={handleLogin} />
    } />
    <Route path="/book-appointment" element={
      user ? <BookAppointment darkMode={darkMode} onBook={handleBookAppointment} /> : <Login darkMode={darkMode} onLogin={handleLogin} />
    } />
    <Route path="/appointments" element={
      user ? <ViewAppointments darkMode={darkMode} appointments={appointments} /> : <Login darkMode={darkMode} onLogin={handleLogin} />
    } />
    <Route path="/profile" element={
      user ? <Profile darkMode={darkMode} profile={profile} user={user} appointments={appointments} /> : <Login darkMode={darkMode} onLogin={handleLogin} />
    } />
    <Route path="/pet-records" element={
      user ? <PetRecords darkMode={darkMode} /> : <Login darkMode={darkMode} onLogin={handleLogin} />
    } />
    <Route path="/support" element={
      user ? <Support darkMode={darkMode} /> : <Login darkMode={darkMode} onLogin={handleLogin} />
    } />
    <Route path="/admin" element={
      user ? <AdminDashboard user={user} darkMode={darkMode} /> : <Login darkMode={darkMode} onLogin={handleLogin} />
    } />
    <Route path="/contact" element={<Contact darkMode={darkMode} />} />
    <Route path="/subscription" element={<Subscription darkMode={darkMode} />} />
    <Route path="/vetcare-about" element={<VetCareAbout darkMode={darkMode} />} />
  </Routes>
);

export default AppRoutes;
