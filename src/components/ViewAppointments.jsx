import React from 'react';

const ViewAppointments = ({ darkMode, appointments = [] }) => (
  <section className={`py-12 px-4 min-h-[80vh] flex justify-center items-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Your Appointments</h2>
      {appointments.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">No appointments found.</div>
      ) : (
        <>
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded text-center font-semibold">
            Your appointment was booked successfully!
          </div>
          <div className="space-y-4">
            {appointments.map((appt, idx) => (
              <div key={idx} className="border border-blue-200 dark:border-gray-700 rounded-xl p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-semibold text-blue-700 dark:text-blue-200">{appt.petName} ({appt.ownerName})</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{appt.reason}</div>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <div className="font-bold">{appt.date} at {appt.time}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  </section>
);

export default ViewAppointments;
