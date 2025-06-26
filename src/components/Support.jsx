import React from 'react';

// const Support = ({ darkMode }) => (
//   <section className={`py-12 px-4 min-h-[80vh] flex justify-center items-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-blue-50 text-gray-900'}`}>
//     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg">
//       <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Support</h2>
//       <form className="space-y-4">
//         <div>
//           <label className="block mb-1 font-semibold" htmlFor="message">Your Message</label>
//           <textarea id="message" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600" rows={4} placeholder="How can we help you?" required />
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">Send</button>
//       </form>
//     </div>
//   </section>
// );

// export default Support;
import { MailIcon } from 'lucide-react';

const Support = ({ darkMode }) => (
  <section
    className={`py-20 px-4 min-h-[90vh] flex justify-center items-center transition-colors duration-500 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white'
        : 'bg-gradient-to-br from-blue-200 via-white to-blue-100 text-gray-900'
    }`}
  >
    <div className="relative w-full max-w-2xl p-10 bg-white/10 dark:bg-gray-800/20 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700 overflow-hidden transition">
      
      {/* ✨ Glow effect background shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* 🔷 Header */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">
          <MailIcon className="inline-block w-8 h-8 mr-2 text-blue-500 dark:text-blue-400" />
          Need Help?
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">We’re here to assist you with anything.</p>
      </div>

      {/* 📝 Form */}
      <form className="space-y-6 relative z-10">
        {/* Message Field */}
       <div className="relative font-[Inter]"> {/* Use a clean font */}
  <textarea
    id="message"
    rows={5}
    required
    placeholder="How can we help you?"
    className="peer w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/60 text-sm dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md placeholder-transparent focus:placeholder-gray-400 transition"
  />
  <label
    htmlFor="message"
    className="absolute left-4 top-3 text-sm text-gray-500 dark:text-gray-400 pointer-events-none transition-all duration-200 ease-in-out
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
      peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-300
      peer-not-placeholder-shown:opacity-0 peer-focus:opacity-100"
  >
    Type your message...
  </label>
</div>



        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
        >
          ✨ Send Message
        </button>
      </form>
    </div>
  </section>
);
export default Support;