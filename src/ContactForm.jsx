import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-20 bg-gray-50 min-h-screen">
      
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="border-l-4 border-purple-500 pl-4 mb-4">
          <p className="text-sm font-semibold uppercase text-gray-600">Ready to talk?</p>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Find your Perfect Fit</h2>
        <p className="text-gray-700 mb-6">
          Why not speak to one of our qualified Account Managers? Please chat, call, email or make a quick enquiry using this short form.
        </p>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">Contact Us</button>
      </div>

      {/* Right Form Section */}
      <form className="md:w-1/2 space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-3 border rounded-full shadow-sm outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-3 border rounded-full shadow-sm outline-none"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full px-4 py-3 border rounded-full shadow-sm outline-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border rounded-full shadow-sm outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border rounded-full shadow-sm outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-3 border rounded-2xl shadow-sm outline-none resize-none"
          rows="3"
        ></textarea>
        <p className="text-sm text-gray-600">
          We use your data to tailor updates that include discounts, offers, and appropriate news.
          We promise to only use your info in accordance with our privacy policy. To opt out of updates tick the box below.
        </p>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span className="text-sm text-gray-700">I agree</span>
        </label>

        {/* Replace below with a real reCAPTCHA component if needed */}
        <div className="w-full h-20 border rounded flex items-center justify-center">
          <p className="text-sm text-gray-400">[reCAPTCHA placeholder]</p>
        </div>

        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
