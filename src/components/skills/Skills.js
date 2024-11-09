import React from "react";
import "./skills.css";
import { skillsList } from "./skillsList";

function Skills() {
  return (
    <div className="skills-section">
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
              <div className="skill-thermometer">
                <div
                  className="thermo-fill"
                  style={{ height: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
