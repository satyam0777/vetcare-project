import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment = ({ darkMode, onBook }) => {
  const [form, setForm] = useState({
    petName: '',
    ownerName: '',
    date: '',
    time: '',
    reason: '',
    health: '',
    diet: '',
    doctorName: '',
    doctorDetails: '',
    animalDetails: '',
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(form); // Save appointment in app state
    setSuccess(true);
    setForm({ petName: '', ownerName: '', date: '', time: '', reason: '', health: '', diet: '', doctorName: '', doctorDetails: '', animalDetails: '' });
    setTimeout(() => {
      setSuccess(false);
      navigate('/appointments');
    }, 500); // Shorter delay for better UX
  };

  return (
    <section className={`py-12 px-4 min-h-[80vh] flex justify-center items-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Book Appointment</h2>
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded text-center font-semibold">Appointment booked successfully!</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="petName">Pet Name</label>
            <input type="text" id="petName" name="petName" value={form.petName} onChange={handleChange} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="ownerName">Owner Name</label>
            <input type="text" id="ownerName" name="ownerName" value={form.ownerName} onChange={handleChange} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold" htmlFor="date">Date</label>
              <input type="date" id="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold" htmlFor="time">Time</label>
              <input type="time" id="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="health">Animal Health Details</label>
            <input type="text" id="health" name="health" value={form.health} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" placeholder="e.g. Vaccinated, Allergies, etc." />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="diet">Animal Diet</label>
            <input type="text" id="diet" name="diet" value={form.diet} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" placeholder="e.g. Vegetarian, Non-veg, etc." />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="doctorName">Doctor Name</label>
            <input type="text" id="doctorName" name="doctorName" value={form.doctorName} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" placeholder="e.g. Dr. Sharma" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="doctorDetails">Doctor Details</label>
            <input type="text" id="doctorDetails" name="doctorDetails" value={form.doctorDetails} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" placeholder="e.g. Specialist in Canine Health" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="animalDetails">About Animal</label>
            <textarea id="animalDetails" name="animalDetails" value={form.animalDetails} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" placeholder="e.g. Age, breed, habits, etc." rows={2} />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold" htmlFor="reason">Reason for Visit</label>
            <textarea id="reason" name="reason" value={form.reason} onChange={handleChange} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" rows={3} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">Book Appointment</button>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
