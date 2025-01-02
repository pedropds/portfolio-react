import React, { useState } from "react";
import "./Projects.css";
import useLoading from "../../custom-hooks/UseLoading";
import { LoadingPage } from "../loading-screen/LoadingPage";

import project1Image1 from "../../images/me.jpg";
import project1Image2 from "../../images/me.jpg";
import project2Image1 from "../../images/me.jpg";
import { Dialog } from "./dialog/Dialog";
import Project from "./project/Project";
// Add more imports as needed

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
    images: [project1Image1, project1Image2],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
    images: [project2Image1],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for Project 3",
    images: [],
  },
  // Add more projects as needed
];

interface ProjectsProps {
  isDarkTheme: boolean;
}

export const Projects = ({ isDarkTheme }: ProjectsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isLoading = useLoading(500);

  if (isLoading) {
    return <LoadingPage isDarkTheme={isDarkTheme}></LoadingPage>;
  }

  const totalPages = Math.ceil(projectsData.length / 2);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));

  const openDialog = (images: string[]) => {
    if (images.length === 0) return; // No images to display
    setSelectedImages(images);
    setCurrentImageIndex(0);
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);

  const handleDialogPrev = () =>
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));

  const handleDialogNext = () =>
    setCurrentImageIndex((prev) =>
      Math.min(prev + 1, selectedImages.length - 1)
    );

  return (
    <div className={`projects-container ${isDarkTheme ? "dark" : ""}`}>
      <button
        className={`arrow ${isDarkTheme ? "dark" : ""} left-arrow`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <div className={`projects-wrapper ${isDarkTheme ? "dark" : ""}`}>
        <div
          className="projects-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projectsData.map((project) => (
            <Project
              key={project.id}
              project={project}
              isDarkTheme={isDarkTheme}
              openDialog={openDialog}
            />
          ))}
        </div>
      </div>
      <button
        className={`arrow ${isDarkTheme ? "dark" : ""} right-arrow`}
        onClick={handleNext}
        disabled={currentIndex === totalPages - 1}
      >
        &gt;
      </button>

      <Dialog
        images={selectedImages}
        currentImageIndex={currentImageIndex}
        isOpen={dialogOpen}
        onClose={closeDialog}
        onPrev={handleDialogPrev}
        onNext={handleDialogNext}
      />
    </div>
  );
};
