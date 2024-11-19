import React from "react";
import "./skills.css";
import { skillsList } from "./skillsList";

function Skills({ id }) {
  return (
    <div id={id} className="skills-section">
      <h2>MES COMPÉTENCES</h2>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="skill-icon"
            />
            <div className="skill-details">
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
