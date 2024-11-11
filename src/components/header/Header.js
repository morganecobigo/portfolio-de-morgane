import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, scroller } from "react-scroll";
import logo from "../../assets/logo/logo.png";
import "./header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false); // État pour la visibilité de la flèche

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

  return (
    <header className="portfolio_header" id="header">
      <img src={logo} alt="portfolio-de-morgane" className="logo_morgane" />
      <nav className="nav-links">
        {/* Liens de scroll vers les sections de la même page */}
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
        <RouterLink to="/cv">Mon CV</RouterLink>
      </nav>
      <div className={`back-to-top ${isVisible ? "visible" : ""}`}>
        <div className="arrow" onClick={scrollToTop}>
          &#8593;
        </div>
      </div>
    </header>
  );
}

export default Header;
