import { useState } from 'react';

export default function useAuth() {
  const [user, setUser] = useState(null); // null = not logged in
  const [users, setUsers] = useState({}); // { email: { name, email, petName } }
  const [appointments, setAppointments] = useState({}); // { email: [appointments] }
  const [doctors, setDoctors] = useState([
    // Example doctor for demo
    {
      name: 'Dr. Anupam Chaturvedi',
      email: 'anupam@vetcare.com',
      specialization: 'Veterinary Surgeon',
      education: 'BVSc & AH, MVSc (Surgery)',
      phone: '98765432XX',
      bio: '3+ years experience in small animal surgery and medicine.',
    },
    {
      name: 'Dr. OP Prajapati',
      email: 'op@vetcare.com',
      specialization: 'Veterinary Surgeon',
      education: 'BVSc & AH, MVSc (Surgery)',
      phone: '97765432XX',
      bio: '2+ years experience in small animal surgery and medicine.',
    },
    {
      name: 'Dr. Chandan ',
      email: 'chandan@vetcare.com',
      specialization: 'Veterinary Surgeon',
      education: 'BVSc & AH, MVSc (Surgery)',
      phone: '99965432XX',
      bio: '5+ years experience in small animal surgery and medicine.',
    },
  ]);

  // When user logs in, set user and ensure user profile exists
  const handleLogin = (userData) => {
    setUser(userData);
    setUsers((prev) => ({
      ...prev,
      [userData.email]: {
        name: userData.name,
        email: userData.email,
        petName: prev[userData.email]?.petName || '',
      },
    }));
    // Ensure appointments entry exists
    setAppointments((prev) => ({
      ...prev,
      [userData.email]: prev[userData.email] || [],
    }));
  };

  // When booking appointment, add to user's appointments and update profile
  const handleBookAppointment = (appointment) => {
    if (!user?.email) return;
    setAppointments((prev) => {
      const updated = {
        ...prev,
        [user.email]: [...(prev[user.email] || []), appointment],
      };
      return updated;
    });
    setUsers((prev) => ({
      ...prev,
      [user.email]: {
        ...prev[user.email],
        name: appointment.ownerName,
        petName: appointment.petName,
      },
    }));
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
  };

  // Admin can register a new doctor
  const handleRegisterDoctor = (doctor) => {
    setDoctors((prev) => [...prev, doctor]);
  };

  return {
    user,
    users,
    appointments,
    handleLogin,
    handleBookAppointment,
    handleLogout,
    doctors,
    handleRegisterDoctor,
  };
}
