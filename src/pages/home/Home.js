import React from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projets/Projetcs";
import Skills from "../../components/skills/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <About id="about" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
