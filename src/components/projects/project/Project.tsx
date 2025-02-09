import React from "react";
import "./Project.css";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image?: string;
    link?: string;
  };
  isDarkTheme: boolean;
  openDialog?: (images: string[]) => void;
}

const Project = ({ project, isDarkTheme, openDialog }: ProjectProps) => {
  const openLink = (link?: string) => {
    if (!link) return;

    // Open link in a new tab
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project">
      <span className="project-title">{project.title}</span>
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          className={`project-thumbnail ${isDarkTheme ? "dark" : ""}`}
          onClick={() => openLink(project.link)}
        />
      )}
      <span className="project-description">{project.description}</span>
    </div>
  );
};

export default Project;
