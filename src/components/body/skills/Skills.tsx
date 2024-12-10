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
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);

  const toggleTooltip = (skillName: string) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };

  const handleSkillClick = (skillName: string) => {
    setClickedSkill(skillName);
    setTimeout(() => setClickedSkill(null), 200); // Reset animation state after 200ms
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
          className="skill-element-container"
          style={{
            position: "relative", // Ensure relative positioning for the tooltip
          }}
        >
          <div
            className={`skill-element ${
              isDarkTheme ? "dark-theme" : "light-theme"
            }`}
            onClick={() => {
              toggleTooltip(skill.name);
              handleSkillClick(skill.name);
            }}
            style={{
              transform:
                clickedSkill === skill.name ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s ease", // Smooth scale transition
            }}
          >
            <span>{skill.name}</span>
          </div>
          {activeSkill === skill.name && skill.description && (
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
