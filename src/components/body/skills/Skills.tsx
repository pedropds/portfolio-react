import React, { useState } from "react";
import "./Skills.css";

interface Skill {
  name: string;
  description?: string;
}

interface SkillProps {
  skills: Skill[];
  isDarkTheme: boolean;
}

export const Skills = ({ skills, isDarkTheme }: SkillProps) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const toggleTooltip = (skillName: string) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <div
      className={`skill-component ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`skill-element ${
            isDarkTheme ? "dark-theme" : "light-theme"
          }`}
          onClick={() => toggleTooltip(skill.name)}
        >
          <span>{skill.name}</span>
          {activeSkill == skill.name && skill.description && (
            <div
              className={`tooltip ${
                isDarkTheme ? "dark-theme" : "light-theme"
              }`}
            >
              {skill.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
