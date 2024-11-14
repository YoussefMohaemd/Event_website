import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", issue: "", suggestion: "" });
  window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة بعد التنقل

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! Thank you for contacting us.");
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg max-w-lg w-full shadow-lg text-white"
      >
        <h2 className="text-3xl font-bold text-center text-amber-500 mb-6">Contact Us</h2>
        {["name", "email", "issue", "suggestion"].map((field, idx) => (
          <div key={idx} className="mb-4">
            <label htmlFor={field} className="block text-gray-400 mb-1 capitalize">
              {field}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
              placeholder={`Enter your ${field}`}
              value={formData[field]}
              onChange={handleChange}
              required={field !== "suggestion"}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-amber-500 text-gray-900 font-semibold rounded-lg hover:bg-amber-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;