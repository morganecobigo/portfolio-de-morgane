import React from "react";
import heroImg from "../../assets/imghero/designworkspace.webp";
import "./hero.css";

function Hero() {
  return (
    <div className="cover">
      <img src={heroImg} alt="img-hero" className="image_morgane" />
      <div className="description">
        <div className="portfolio-title">Morgane Cobigo</div>
        <div className="portfolio-subtitle">Développeuse Intégrateur Web</div>
        <div className="portfolio-text">
          Création moderne et responsive pour web
        </div>
      </div>
    </div>
  );
}

export default Hero;
