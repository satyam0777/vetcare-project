import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaUserMd, FaGraduationCap } from 'react-icons/fa';

const dashboardOptions = [
  {
    title: 'Book Appointment',
    description: 'Schedule a new appointment for your pet with our vets.',
    icon: '📅',
    action: (navigate) => navigate('/book-appointment'),
  },
  {
    title: 'View Appointments',
    description: 'See your upcoming and past appointments.',
    icon: '🗂️',
    action: (navigate) => navigate('/appointments'),
  },
  {
    title: 'Profile',
    description: 'Manage your personal information and settings.',
    icon: '👤',
    action: (navigate) => navigate('/profile'),
  },
  {
    title: 'Pet Records',
    description: 'Access your pet’s medical and vaccination records.',
    icon: '🐾',
    action: (navigate) => navigate('/pet-records'),
  },
  {
    title: 'Support',
    description: 'Contact our support team for help.',
    icon: '💬',
    action: (navigate) => navigate('/support'),
  },
  {
    title: 'Work in Progress',
    description: 'Exciting new features are coming soon! Stay tuned for updates and improvements to your VetCare experience.',
    icon: '🚧',
    action: () => {}, // No navigation, just a placeholder
    disabled: true,
  },
];

const UserDashboard = ({ darkMode, doctors = [] }) => {
  const navigate = useNavigate();
  return (
    <section className={`pt-24 pb-12 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-300">User Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {dashboardOptions.map((option, idx) => (
          <div
            key={idx}
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer border border-blue-100 dark:border-gray-700 ${option.disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            onClick={() => !option.disabled && option.action(navigate)}
          >
            <div className="text-5xl mb-4">{option.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-200">{option.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">{option.description}</p>
            {option.disabled && <span className="mt-2 text-xs text-yellow-600 dark:text-yellow-400 font-semibold">Coming Soon</span>}
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Our Doctors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {doctors.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 dark:text-gray-400">No doctors available.</div>
        ) : (
          doctors.map((doc, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col gap-2 animate-fadeInUp hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <FaUserMd className="text-blue-600 dark:text-blue-300 text-2xl" />
                <span className="font-bold text-lg text-blue-700 dark:text-blue-200">{doc.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <FaEnvelope className="text-blue-400" />
                <span>{doc.email}</span>
              </div>
              {doc.phone && (
                <div className="flex items-center gap-2 text-sm mb-1">
                  <FaPhone className="text-green-500" />
                  <span>{doc.phone}</span>
                </div>
              )}
              {doc.specialization && (
                <div className="flex items-center gap-2 text-sm mb-1">
                  <span className="font-semibold">Specialist:</span>
                  <span>{doc.specialization}</span>
                </div>
              )}
              {doc.education && (
                <div className="flex items-center gap-2 text-sm mb-1">
                  <FaGraduationCap className="text-purple-500" />
                  <span>{doc.education}</span>
                </div>
              )}
              {doc.bio && (
                <div className="text-gray-700 dark:text-gray-200 text-sm mb-1">{doc.bio}</div>
              )}
              <a href={`mailto:${doc.email}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center">Contact</a>
            </div>
          ))
        )}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s both; }
      `}</style>
    </section>
  );
};

export default UserDashboard;
