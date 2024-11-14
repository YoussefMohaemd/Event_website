import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 min-h-screen flex flex-col items-center justify-center text-gray-100">
      {/* Hero Section */}
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center px-4 lg:px-0">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
            Welcome to EventHub!
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200 animate-fade-in">
            <br />
            <br />
            Discover the best events, conferences, exhibitions, and more
            happening around you. Join us and never miss an opportunity to
            learn, network, and grow.
            <br />
            <br />
          </p>
          <Link to="/events">
            <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition duration-200">
              Explore Events
            </button>
          </Link>
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>

      {/* Featured Events Section */}
      <section className="mt-16 w-full px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-200">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tech Conference 2024", imgSrc: "/images/image1.jpg" },
              { title: "Art Exhibition", imgSrc: "/images/image2.jpg" },
              { title: "Business Summit", imgSrc: "/images/image3.jpg" },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={event.imgSrc}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-200">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Join us for a day full of insights, networking, and
                    knowledge.
                  </p>
                  <Link to="/events">
                    <button className="w-full bg-yellow-500 py-2 rounded-lg text-gray-900 hover:bg-yellow-600 transition duration-200">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <br/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
