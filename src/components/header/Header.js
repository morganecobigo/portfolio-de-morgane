import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import cvPDF from "../../assets/cv/cvmorgane.pdf";
import logo from "../../assets/logo/logo.webp";
import "./header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 400) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 400) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  });

  const scrollToTop = () => {
    scroller.scrollTo("header", {
      smooth: true,
      duration: 500,
      offset: -70,
    });
  };

  const openCvInNewTab = () => {
    window.open(cvPDF, "CV");
  };

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
