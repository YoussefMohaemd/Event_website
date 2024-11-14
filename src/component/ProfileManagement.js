import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileManagement = () => {
  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("user@example.com");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [image, setImage] = useState("https://via.placeholder.com/150"); // الصورة الافتراضية
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة بعد التنقل
  }, []); // هذه الدالة ستنفذ مرة واحدة عندما يتم تحميل الصفحة

  const handleSubmit = (e) => {
    e.preventDefault();
    // عند إرسال البيانات، يمكن إضافة الكود الخاص بحفظ التعديلات هنا
    alert("Changes saved successfully!");
  };

  const handleGoHome = () => {
    navigate("/"); // العودة إلى الصفحة الرئيسية
  };

  // دالة لتحميل الصورة وتحديث الحالة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // تحديث الصورة
      };
      reader.readAsDataURL(file); // قراءة الصورة كـ base64
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-md w-full m-9 bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-white">Edit Profile</h2>

        {/* عرض الصورة القديمة */}
        <div className="flex justify-center mb-4">
          <img
            src={image} // عرض الصورة القديمة أو الجديدة بعد التغيير
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-400"
          />
        </div>

        {/* مربع تغيير الصورة بنفس الشكل */}
        <div className="relative mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none transition duration-200"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            />
          </div>

          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            />
          </div>

          <div className="relative">
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="pl-10 w-full px-3 py-3 bg-white/5 border border-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 focus:outline-none transition duration-200"
          >
            Save Changes
          </button>
        </form>

        {/* زر العودة إلى الصفحة الرئيسية */}
        <button
          onClick={handleGoHome}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none transition duration-200 mt-4"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ProfileManagement;
