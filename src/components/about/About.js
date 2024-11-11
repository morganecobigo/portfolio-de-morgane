import React from "react";
import photo from "../../assets/photo/me.png";
import "./about.css";

const About = ({ id }) => {
  return (
    <div id={id} className="about-container">
      <h2>À PROPOS DE MOI</h2>
      <div className="about-me">
        <img src={photo} alt="me" className="photo_morgane" />
        <div className="about-text">
          <p>
            Bonjour, je suis Morgane Cobigo, Développeuse Intégrateur Web
            Junior.
          </p>
          <p>
            Reconverti dans le numérique depuis janvier 2024, J'ai suivi une
            formation intensive de 9 mois chez OpenClassrooms en tant
            qu'intégrateur web, ce qui m'a permis d'acquérir des compétences
            équivalentes à un diplôme de niveau Bac+2.
          </p>
          <p>
            J’ai aussi commencé à m’auto-former sur la création de site
            Wordpress.
          </p>
          <p>
            Je me suis trouvé une passion pour l'informatique depuis quelques
            années, et je souhaite transformer cette passion en une carrière.
          </p>
          <p>
            Mon objectif est de continuer à développer mes compétences et mes
            connaissances dans ce vaste univers qui est l'informatique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
