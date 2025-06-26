import React from 'react';

const PetRecords = ({ darkMode }) => (
  <section className={`py-12 px-4 min-h-[80vh] flex justify-center items-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Pet Records</h2>
      <div className="text-center text-gray-500 dark:text-gray-400">No pet records found. Add your pet’s details!</div>
    </div>
  </section>
);

export default PetRecords;
