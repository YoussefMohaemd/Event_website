import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
      <div className="text-center p-8 rounded-lg bg-slate-800 shadow-xl">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
        <a
          href="#/home"
          className="px-6 py-2 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
