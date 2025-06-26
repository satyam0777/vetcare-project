import React from 'react';

const Profile = ({ darkMode, profile = {}, user = {}, appointments = [] }) => (
  <section className={`py-12 px-4 min-h-[80vh] flex justify-center items-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Profile</h2>
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl animate-fadeIn flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block bg-blue-200 dark:bg-blue-900 rounded-full p-2">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-blue-600 dark:text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z' /></svg>
            </span>
            <span className="text-xl font-semibold text-blue-700 dark:text-blue-200">{profile.name || user.name || 'N/A'}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Email:</span>
            <span>{profile.email || user.email || 'N/A'}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Pet Name:</span>
            <span>{profile.petName || 'N/A'}</span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-200 text-center">Appointment History</h3>
      {appointments.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">No appointments found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appt, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl flex flex-col gap-3 transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="font-bold text-blue-700 dark:text-blue-200 mb-1 text-lg flex items-center gap-2">
                <span className="inline-block bg-blue-200 dark:bg-blue-900 rounded-full p-2">
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-blue-600 dark:text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z' /></svg>
                </span>
                {appt.petName} <span className="text-xs text-gray-500">({appt.ownerName})</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{appt.date} at {appt.time}</div>
              <div className="mb-2 text-gray-700 dark:text-gray-300 text-sm"><span className="font-semibold">Reason:</span> {appt.reason}</div>
              {/* Animal Health Card */}
              {appt.health && (
                <div className="rounded-xl bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 p-3 flex items-center gap-3 shadow-sm animate-fadeInUp">
                  <span className="inline-block bg-green-100 dark:bg-green-900 rounded-full p-2">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-green-600 dark:text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-green-700 dark:text-green-300">Animal Health</div>
                    <div className="text-gray-700 dark:text-gray-200 text-sm">{appt.health}</div>
                  </div>
                </div>
              )}
              {/* Animal Diet Card */}
              {appt.diet && (
                <div className="rounded-xl bg-white dark:bg-gray-800 border border-yellow-100 dark:border-yellow-700 p-3 flex items-center gap-3 shadow-sm animate-fadeInUp">
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 rounded-full p-2">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-yellow-600 dark:text-yellow-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z' /></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-yellow-700 dark:text-yellow-300">Animal Diet</div>
                    <div className="text-gray-700 dark:text-gray-200 text-sm">{appt.diet}</div>
                  </div>
                </div>
              )}
              {/* About Animal Card */}
              {appt.animalDetails && (
                <div className="rounded-xl bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-700 p-3 flex items-center gap-3 shadow-sm animate-fadeInUp">
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 rounded-full p-2">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-purple-600 dark:text-purple-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-purple-700 dark:text-purple-300">About Animal</div>
                    <div className="text-gray-700 dark:text-gray-200 text-sm">{appt.animalDetails}</div>
                  </div>
                </div>
              )}
              {/* Doctor Details Card */}
              {(appt.doctorName || appt.doctorDetails) && (
                <div className="rounded-xl bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 p-3 flex items-center gap-3 shadow-sm animate-fadeInUp">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 rounded-full p-2">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-blue-600 dark:text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7a4 4 0 118 0v1a4 4 0 01-8 0V7zm8 8a4 4 0 01-8 0' /></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-blue-700 dark:text-blue-300">Doctor Details</div>
                    <div className="text-gray-700 dark:text-gray-200 text-sm">
                      {appt.doctorName && <div><span className="font-semibold">Name:</span> {appt.doctorName}</div>}
                      {appt.doctorDetails && <div><span className="font-semibold">Info:</span> {appt.doctorDetails}</div>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: none; }
      }
      .animate-fadeIn {
        animation: fadeIn 0.7s both;
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: none; }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.7s both;
      }
    `}</style>
  </section>
);

export default Profile;
