import React from 'react';
import Photodeprofil from "../../assets/photoprofil/photodeprofil.png";
import HanCoding from "../../assets/gif /handcoding.gif"
import "./profil.css";

function Profil() {
  return (
    <div className="cover">
      <div className="gif">
      <img src={HanCoding} alt="gif-dev" className="gif_morgane"/>
      </div>
    <div className="profile-img">
            <img src={Photodeprofil} alt="portfolio-de-morgane" className="photo_morgane"/>
            </div>
        <div className="description">
        <div className="portfolio-title">Morgane Cobigo</div>
        <div className="portfolio-subtitle">Développeur Intégrateur Web</div>
        <div className="portfolio-text">
            Création moderne et responsive pour web
        
    </div>
    </div>
    <div className="dots">
        <label className="dot dot1"></label>
        <label className="dot dot2"></label>
        <label className="dot dot3"></label>
        <label className="dot dot4"></label>
        <label className="dot dot5"></label>
    </div>
</div>
  );
};

export default Profil;