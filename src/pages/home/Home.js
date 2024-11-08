import React from "react";
import Profil from "../../components/profil/Profil"
import About from "../../components/about/About";
import Projects from "../../components/projets/Projetcs";
import Contact from "../../components/contact/Contact";
import Skills from "../../components/skills/Skills"



const Home = () => {
  return (
    <div>
       <Profil />  
      <About id="about"/>
        <Projects id="projects"/>
        <Skills id="skills"/>
        <Contact id="contact"/>
    </div>
  );
};

export default Home;