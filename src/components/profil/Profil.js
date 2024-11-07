import React from 'react';
import Photodeprofil from "../../assets/photoprofil/photodeprofil.png";
import "./profil.css";

function Profil() {
  return (
    <section className="cover">
    <div className="profile-img">
            <img src={Photodeprofil} alt="portfolio-de-morgane" className="photo_morgane"/>
        <div className="description">
        <div className="portfolio-title">Morgane Cobigo</div>
        <div className="portfolio-subtitle">Développeur Intégrateur Web Junior</div>
        <div className="portfolio-text">
            description
        </div>
    </div>
    </div>
    <div className="dots">
        <label className="dot dot1"></label>
        <label className="dot dot2"></label>
        <label className="dot dot3"></label>
        <label className="dot dot4"></label>
        <label className="dot dot5"></label>
    </div>
</section>
  );
};

export default Profil;