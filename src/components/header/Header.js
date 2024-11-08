import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png"

function Header() {
  return (
  <header className="portfolio_header">
      <img src={logo} alt="portfolio-de-morgane" className="logo_morgane" />
      <nav className="nav-links"> 
      <a href="#presentation">Ma présentation</a>
        <a href="#projets">Mes projets</a>
        <a href="skills">Mes Compétences</a>
        <a href="#contact">Contact</a>
        <Link to="/cv">Mon CV</Link> {/* Ce lien redirige vers une page séparée */}
      </nav>
        </header>
   
  );
}

export default Header;
