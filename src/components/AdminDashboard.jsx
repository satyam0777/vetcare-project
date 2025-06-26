import React, { useState } from 'react';

const AdminDashboard = ({ user, onRegisterDoctor, darkMode }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    specialization: '',
    phone: '',
    bio: '',
  });
  const [success, setSuccess] = useState(false);

  if (!user || user.role !== 'admin') {
    return (
      <div className={`p-8 text-center ${darkMode ? 'text-white' : 'text-gray-700'}`}>Access denied. Admins only.</div>
    );
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onRegisterDoctor) onRegisterDoctor(form);
    setSuccess(true);
    setForm({ name: '', email: '', specialization: '', phone: '', bio: '' });
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <section className={`pt-24 pb-12 px-4 min-h-[80vh] flex justify-center items-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Admin Dashboard</h2>
        <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-200 text-center">Register New Doctor</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Doctor Name" className="w-full p-2 rounded border focus:outline-none focus:ring" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="w-full p-2 rounded border focus:outline-none focus:ring" />
          <input name="specialization" value={form.specialization} onChange={handleChange} required placeholder="Specialization" className="w-full p-2 rounded border focus:outline-none focus:ring" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 rounded border focus:outline-none focus:ring" />
          <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Short Bio" className="w-full p-2 rounded border focus:outline-none focus:ring" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register Doctor</button>
        </form>
        {success && <div className="mt-4 text-green-600 text-center animate-fadeInUp">Doctor registered successfully!</div>}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeIn { animation: fadeIn 0.7s both; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s both; }
      `}</style>
    </section>
  );
};

export default AdminDashboard;
