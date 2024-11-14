import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // للحصول على المسار الحالي

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
  };

  const handleGoToProfile = () => {
    navigate("/profile-management");  // التنقل إلى صفحة إدارة الملف الشخصي
    setIsProfileMenuOpen(false); // إغلاق القائمة عند الانتقال
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleNavigation = (item) => {
    if (location.pathname === "/") {
      // إذا كنت في الصفحة الرئيسية ولا تريد التنقل بين الصفحات
      const element = document.getElementById(item);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // التمرير انسيابيًا
      }
    } else {
      // إذا كنت في صفحة أخرى، ننتقل إلى الصفحة المطلوبة
      if (item === "register" || item === "profile-management") {
        navigate(`/${item}`);
      } else {
        navigate("/"); // للعودة إلى الصفحة الرئيسية إذا كنت في صفحة أخرى
      }
    }
  };
  

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-700 bg-opacity-90 fixed w-full top-0 z-50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-white cursor-pointer">EventHub</h1>
        <div className="hidden md:flex space-x-10">
          {["home", "events", "about", "contact"].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <button
                onClick={() => handleNavigation(item)}
                className="text-white hover:text-purple-200 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn && (
            <Link to="/auth" className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 cursor-pointer">
              Register
            </Link>
          )}
          <div className="relative">
            <img
              src="images/profile.png"
              alt="User Icon"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={handleProfileClick}
            />
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-lg shadow-lg w-48">
                <p className="font-semibold">User Name</p>
                <button
                  onClick={handleGoToProfile}
                  className="w-full text-left text-gray-200 hover:bg-gray-700 py-2 px-4 rounded"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-500 hover:bg-gray-700 py-2 px-4 rounded"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
