import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo and Description */}
        <h1 className="text-3xl font-bold mb-4 text-amber-500">EventHub</h1>
        <p className="text-center mb-6 max-w-md text-gray-300">
          Stay updated with the latest events, conferences, and exhibitions. Connect, learn, and grow with us!
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6">
          {["facebook", "instagram", "whatsapp", "twitter", "linkedin"].map((social, index) => (
            <a
              key={index}
              href={`https://${social}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition duration-200"
            >
              {React.createElement(
                {
                  facebook: FaFacebookF,
                  instagram: FaInstagram,
                  whatsapp: FaWhatsapp,
                  twitter: FaTwitter,
                  linkedin: FaLinkedin,
                }[social],
                { size: 20 }
              )}
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex space-x-10 text-center mb-6">
          {["About", "Contact", "Events", "Privacy Policy"].map((link, index) => (
            <Link
              key={index}
              to={`/${link.replace(" ", "").toLowerCase()}`}
              className="hover:text-amber-500 transition duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;