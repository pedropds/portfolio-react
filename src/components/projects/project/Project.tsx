import React from "react";
import "./Project.css";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    images: string[];
  };
  isDarkTheme: boolean;
  openDialog: (images: string[]) => void;
}

const Project = ({ project, isDarkTheme, openDialog }: ProjectProps) => {
  return (
    <div className="project">
      <span className="project-title">{project.title}</span>
      {project.images.length > 0 && (
        <img
          src={project.images[0]}
          alt={`${project.title} thumbnail`}
          className={`project-thumbnail ${isDarkTheme ? "dark" : ""}`}
          onClick={() => openDialog(project.images)}
        />
      )}
      <span className="project-description">{project.description}</span>
    </div>
  );
};

export default Project;
