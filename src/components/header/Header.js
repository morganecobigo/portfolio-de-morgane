import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import cvPDF from "../../assets/cv/cvmorgane.pdf"; // Importez le PDF
import logo from "../../assets/logo/logo.webp";
import "./header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false); // État pour la visibilité de la flèche
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger
  // Fonction pour afficher/masquer la flèche selon la position de défilement
  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 400) {
      setIsVisible(true); // Affiche la flèche si l'utilisateur a défilé plus de 400px
    } else if (isVisible && window.pageYOffset <= 400) {
      setIsVisible(false); // Masque la flèche si l'utilisateur est en haut
    }
  };

  // Ajouter un écouteur d'événements pour surveiller le défilement de la page
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  });

  // Fonction pour faire défiler jusqu'en haut
  const scrollToTop = () => {
    scroller.scrollTo("header", {
      smooth: true, // Active le défilement fluide
      duration: 500, // Durée du défilement
      offset: -70, // Décalage (ajustez si nécessaire)
    });
  };
  // Fonction pour ouvrir le PDF dans un nouvel onglet
  const openCvInNewTab = () => {
    window.open(cvPDF, "CV"); // Ouvre le PDF dans un onglet nommé "CV"
  };
  // Fonction pour ouvrir le menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="portfolio_header" id="header">
      <h1>Portfolio Morgane</h1>
      <img
        src={logo}
        alt="portfolio-de-morgane"
        className="logo_morgane"
        height={68}
        width={201}
      />
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="about" smooth={true} duration={500}>
          Ma présentation
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Mes projets
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Mes Compétences
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        <span onClick={openCvInNewTab} style={{ cursor: "pointer" }}>
          Mon CV
        </span>{" "}
        {/* Utilise un span cliquable pour ouvrir le PDF */}
      </nav>
      <li className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </li>
      <div className={`back-to-top ${isVisible ? "visible" : ""}`}>
        <div className="arrow" onClick={scrollToTop}>
          &#8593;
        </div>
      </div>
    </header>
  );
}

export default Header;
