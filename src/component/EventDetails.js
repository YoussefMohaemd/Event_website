// src/components/EventDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faMapMarkerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const EventDetails = () => {
  const { id } = useParams();
  window.scrollTo(0, 0);
  const event = {
    1: {
      title: "Tech Conference 2024",
      image: "/images/image1.jpg", // تعديل المسار
      date: "2024-12-15",
      time: "10:00 AM - 5:00 PM",
      location: "Cairo International Convention Center",
      category: "Technology",
      attendees: 250,
      price: "500 EGP",
      description: "Join us for the biggest tech conference in Egypt!",
      schedule: [
        { time: "10:00 AM", title: "Registration & Welcome Coffee" },
        { time: "11:00 AM", title: "Keynote Speech: Future of Technology" },
        { time: "12:30 PM", title: "Lunch Break & Networking" },
      ],
    },
    2: {
      title: "Art Exhibition",
      image: "/images/image2.jpg", // تعديل المسار
      date: "2024-12-20",
      time: "10:00 AM - 6:00 PM",
      location: "Alexandria Art Gallery",
      category: "Art",
      attendees: 150,
      price: "Free",
      description: "An inspiring exhibition showcasing modern art.",
      schedule: [
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "11:00 AM", title: "Artist Panel Discussion" },
      ],
    },
    3: {
      title: "Art Exhibition",
      image: "/images/image3.jpg", // تعديل المسار
      date: "2024-12-20",
      time: "10:00 AM - 6:00 PM",
      location: "Alexandria Art Gallery",
      category: "Art",
      attendees: 150,
      price: "Free",
      description: "An inspiring exhibition showcasing modern art.",
      schedule: [
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "11:00 AM", title: "Artist Panel Discussion" },
      ],
    },
    4: {
      title: "Tech Conference 2024",
      image: "/images/image1.jpg", // تعديل المسار
      date: "2024-12-15",
      time: "10:00 AM - 5:00 PM",
      location: "Cairo International Convention Center",
      category: "Technology",
      attendees: 250,
      price: "500 EGP",
      description: "Join us for the biggest tech conference in Egypt!",
      schedule: [
        { time: "10:00 AM", title: "Registration & Welcome Coffee" },
        { time: "11:00 AM", title: "Keynote Speech: Future of Technology" },
        { time: "12:30 PM", title: "Lunch Break & Networking" },
      ],
    },
    5: {
      title: "Art Exhibition",
      image: "/images/image2.jpg", // تعديل المسار
      date: "2024-12-20",
      time: "10:00 AM - 6:00 PM",
      location: "Alexandria Art Gallery",
      category: "Art",
      attendees: 150,
      price: "Free",
      description: "An inspiring exhibition showcasing modern art.",
      schedule: [
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "11:00 AM", title: "Artist Panel Discussion" },
      ],
    },
    6: {
      title: "Art Exhibition",
      image: "/images/image3.jpg", // تعديل المسار
      date: "2024-12-20",
      time: "10:00 AM - 6:00 PM",
      location: "Alexandria Art Gallery",
      category: "Art",
      attendees: 150,
      price: "Free",
      description: "An inspiring exhibition showcasing modern art.",
      schedule: [
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "11:00 AM", title: "Artist Panel Discussion" },
      ],
    },
    7: {
      title: "Tech Conference 2024",
      image: "/images/image1.jpg", // تعديل المسار
      date: "2024-12-15",
      time: "10:00 AM - 5:00 PM",
      location: "Cairo International Convention Center",
      category: "Technology",
      attendees: 250,
      price: "500 EGP",
      description: "Join us for the biggest tech conference in Egypt!",
      schedule: [
        { time: "10:00 AM", title: "Registration & Welcome Coffee" },
        { time: "11:00 AM", title: "Keynote Speech: Future of Technology" },
        { time: "12:30 PM", title: "Lunch Break & Networking" },
      ],
    },
    8: {
      title: "Art Exhibition",
      image: "/images/image2.jpg", // تعديل المسار
      date: "2024-12-20",
      time: "10:00 AM - 6:00 PM",
      location: "Alexandria Art Gallery",
      category: "Art",
      attendees: 150,
      price: "Free",
      description: "An inspiring exhibition showcasing modern art.",
      schedule: [
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "11:00 AM", title: "Artist Panel Discussion" },
      ],
    },
    9: {
      title: "Art Exhibition",
      image: "/images/image3.jpg", // تعديل المسار
      date: "2024-12-20",
      time: "10:00 AM - 6:00 PM",
      location: "Alexandria Art Gallery",
      category: "Art",
      attendees: 150,
      price: "Free",
      description: "An inspiring exhibition showcasing modern art.",
      schedule: [
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "11:00 AM", title: "Artist Panel Discussion" },
      ],
    },
    
  };

  const currentEvent = event[id];

  return (
    <div className="bg-slate-900 min-h-screen pt-16 ">
      <div className="relative h-96">
        <img
          src={`${process.env.PUBLIC_URL}${currentEvent.image}`} // تعديل المسار هنا
          alt={currentEvent.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1 bg-amber-500 text-white text-sm rounded-full mb-4">
            {currentEvent.category}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">
            {currentEvent.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-blue-200">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendar} className="h-5 w-5 mr-2" />
              <span>{currentEvent.date}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
              <span>{currentEvent.time}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2" />
              <span>{currentEvent.location}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="h-5 w-5 mr-2" />
              <span>{currentEvent.attendees} attendees</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">About Event</h2>
          <p className="text-blue-200 whitespace-pre-line">
            {currentEvent.description}
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Event Schedule</h2>
          <div className="space-y-6">
            {currentEvent.schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-slate-700 rounded-lg"
              >
                <div className="flex-shrink-0 w-24 text-amber-400 font-medium">
                  {item.time}
                </div>
                <div className="ml-4 text-white">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
