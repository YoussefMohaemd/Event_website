// src/components/EventsGrid.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // استيراد مكتبة Framer Motion

const EventsGrid = () => {
  window.scrollTo(0, 0);
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: '2024-12-15',
      location: 'Cairo',
      attendees: 250,
      price: '500 EGP',
      description: 'Join us for the biggest tech conference in Egypt!',
      category: 'Technology',
      schedule: [
        { time: '10:00 AM', title: 'Registration & Welcome Coffee' },
        { time: '11:00 AM', title: 'Keynote Speech: Future of Technology' },
        { time: '12:30 PM', title: 'Lunch Break & Networking' },
      ],
    },
    {
      id: 2,
      title: 'Art Exhibition',
      date: '2024-12-20',
      location: 'Alexandria',
      attendees: 150,
      price: 'Free',
      description: 'An inspiring exhibition showcasing modern art.',
      category: 'Art',
      schedule: [
        { time: '10:00 AM', title: 'Opening Ceremony' },
        { time: '11:00 AM', title: 'Artist Panel Discussion' },
      ],
    },
    {
      id: 3,
      title: 'Business Summit',
      date: '2024-12-15',
      location: 'Cairo',
      attendees: 250,
      price: '500 EGP',
      description: 'Join us for the biggest tech conference in Egypt!',
      category: 'Technology',
      schedule: [
        { time: '10:00 AM', title: 'Registration & Welcome Coffee' },
        { time: '11:00 AM', title: 'Keynote Speech: Future of Technology' },
        { time: '12:30 PM', title: 'Lunch Break & Networking' },
      ],
    },
    {
      id: 4,
      title: 'Art Exhibition',
      date: '2024-12-20',
      location: 'Alexandria',
      attendees: 150,
      price: 'Free',
      description: 'An inspiring exhibition showcasing modern art.',
      category: 'Art',
      schedule: [
        { time: '10:00 AM', title: 'Opening Ceremony' },
        { time: '11:00 AM', title: 'Artist Panel Discussion' },
      ],
    },
    {
      id: 5,
      title: 'Tech Conference 2024',
      date: '2024-12-15',
      location: 'Cairo',
      attendees: 250,
      price: '500 EGP',
      description: 'Join us for the biggest tech conference in Egypt!',
      category: 'Technology',
      schedule: [
        { time: '10:00 AM', title: 'Registration & Welcome Coffee' },
        { time: '11:00 AM', title: 'Keynote Speech: Future of Technology' },
        { time: '12:30 PM', title: 'Lunch Break & Networking' },
      ],
    },
    {
      id: 6,
      title: 'Business Summit',
      date: '2024-12-20',
      location: 'Alexandria',
      attendees: 150,
      price: 'Free',
      description: 'An inspiring exhibition showcasing modern art.',
      category: 'Art',
      schedule: [
        { time: '10:00 AM', title: 'Opening Ceremony' },
        { time: '11:00 AM', title: 'Artist Panel Discussion' },
      ],
    },
    {
      id: 7,
      title: 'Tech Conference 2024',
      date: '2024-12-15',
      location: 'Cairo',
      attendees: 250,
      price: '500 EGP',
      description: 'Join us for the biggest tech conference in Egypt!',
      category: 'Technology',
      schedule: [
        { time: '10:00 AM', title: 'Registration & Welcome Coffee' },
        { time: '11:00 AM', title: 'Keynote Speech: Future of Technology' },
        { time: '12:30 PM', title: 'Lunch Break & Networking' },
      ],
    },
    {
      id: 9,
      title: 'Business Summit',
      date: '2024-12-20',
      location: 'Alexandria',
      attendees: 150,
      price: 'Free',
      description: 'An inspiring exhibition showcasing modern art.',
      category: 'Art',
      schedule: [
        { time: '10:00 AM', title: 'Opening Ceremony' },
        { time: '11:00 AM', title: 'Artist Panel Discussion' },
      ],
    },
    {
      id: 8,
      title: 'Art Exhibition',
      date: '2024-12-20',
      location: 'Alexandria',
      attendees: 150,
      price: 'Free',
      description: 'An inspiring exhibition showcasing modern art.',
      category: 'Art',
      schedule: [
        { time: '10:00 AM', title: 'Opening Ceremony' },
        { time: '11:00 AM', title: 'Artist Panel Discussion' },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          Upcoming Events
        </motion.h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Stay ahead of the curve and check out the latest events happening around you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // الأنيميشن عند الوصول إلى الشاشة
            viewport={{ once: true }} // الأنيميشن يحدث مرة واحدة فقط عند الوصول إلى الـ div
            transition={{ duration: 1.0 }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">{event.title}</h3>
              <div className="text-gray-300 space-y-2 mb-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-2" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
              <Link to={`/events/${event.id}`}>
                <button className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-800 font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition duration-200">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsGrid;

