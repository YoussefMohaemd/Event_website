import React, { useState } from "react";

const About = () => {
  const speakers = [
    {
      name: "John Doe",
      title: "Technology Expert",
      image: "/images/people1.jpg",
      bio: "John is a technology consultant with over 15 years of experience in AI and machine learning.",
    },
    {
      name: "Jane Smith",
      title: "Entrepreneur",
      image: "/images/people2.jpg",
      bio: "Jane founded multiple startups and is a known advocate for sustainable business practices.",
    },
    {
      name: "Ahmed Khalil",
      title: "Software Engineer",
      image: "/images/people3.jpg",
      bio: "Ahmed specializes in cloud computing and has worked with some of the biggest tech companies.",
    },
  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState(speakers[0]);

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-gray-800 to-gray-700 min-h-screen text-white py-20 px-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-100">
        About Our Speakers
      </h2>
      {/* المتحدث البارز */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg mb-10 flex flex-col md:flex-row items-center">
        <img
          src={selectedSpeaker.image}
          alt={selectedSpeaker.name}
          className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-6 border-4 border-yellow-500"
        />
        <div>
          <h3 className="text-3xl font-semibold text-gray-100">
            {selectedSpeaker.name}
          </h3>
          <p className="text-yellow-500">{selectedSpeaker.title}</p>
          <p className="text-gray-300 mt-4 font-light">{selectedSpeaker.bio}</p>
        </div>
      </div>
      {/* قائمة المتحدثين */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            onClick={() => setSelectedSpeaker(speaker)}
            className={`cursor-pointer bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 ${
              selectedSpeaker.name === speaker.name
                ? "border border-yellow-500"
                : ""
            }`}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-500"
            />
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">
              {speaker.name}
            </h3>
            <p className="text-yellow-500 text-center">{speaker.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
