import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(true);
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة بعد التنقل


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-white">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>

        <form className="space-y-6">
          {!isLogin && (
            <>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
                />
              </div>
            </>
          )}

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <input
              type="email"
              placeholder="Email address"
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 focus:outline-none transition duration-200"
          >
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-200 hover:text-amber-400 transition-colors"
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;
