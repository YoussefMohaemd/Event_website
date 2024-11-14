import React from "react";
import HeroSection from "./HeroSection";
import EventsGrid from "./EventsGrid";
import Contact from "./Contact";
import About from "./ِAbout";

const Home = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="events">
        <EventsGrid />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
