import React, { Fragment, useState } from "react";
import "./Projects.css";
import useLoading from "../../custom-hooks/UseLoading";
import { LoadingPage } from "../loading-screen/LoadingPage";

import chatRoomRoom from "../../images/projects/go-chat-room.png";
import daftWebScraper from "../../images/projects/daft-web-scraper.png";
import dockerDevServices from "../../images/projects/docker-dev-services.png";
import LeftArrow from "../../images/left-arrow-svgrepo-com.svg";
import RightArrow from "../../images/right-arrow-svgrepo-com.svg";
import LeftArrowDark from "../../images/left-arrow-svgrepo-com-dark.svg";
import RightArrowDark from "../../images/right-arrow-svgrepo-com-dark.svg";
import Project from "./project/Project";
// Add more imports as needed

const projectsData = [
  {
    id: 1,
    title: "Go Chat Room",
    description: "Messaging application inspired by WhatsApp",
    image: chatRoomRoom,
    link: "https://github.com/pedropds/go-chat-room",
  },
  {
    id: 2,
    title: "Daft Web Scraper",
    description: "A property web scraper based on Daft.ie",
    image: daftWebScraper,
    link: "https://github.com/pedropds/daft-web-scraper",
  },
  {
    id: 3,
    title: "Docker Dev Services",
    description: "Docker Services for every day-to-day use",
    image: dockerDevServices,
    link: "https://github.com/pedropds/docker-dev-services",
  },
];

interface ProjectsProps {
  isDarkTheme: boolean;
}

export const Projects = ({ isDarkTheme }: ProjectsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLoading = useLoading(500);

  if (isLoading) {
    return <LoadingPage isDarkTheme={isDarkTheme}></LoadingPage>;
  }

  const totalPages = projectsData.length;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));

  return (
    <div className="projects-wrapper">
      <div className="project-description-wrapper">
        <header
          className={`text-element header-text ${
            isDarkTheme ? "dark-theme" : ""
          }`}
        >
          Projects
        </header>
        <span className={`text-element ${isDarkTheme ? "dark-theme" : ""}`}>
          I enjoy learning during my free time, as it allows me to explore
          concepts beyond those encountered at work. Below are some personal
          projects I’ve undertaken as a hobby and as an opportunity to expand my
          knowledge.
        </span>
      </div>
      <div className="projects-wrapper">
        <div className={`projects-container ${isDarkTheme ? "dark" : ""}`}>
          <button
            className={`arrow ${isDarkTheme ? "dark" : ""} left-arrow`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <img
              src={LeftArrow}
              className={`arrow-image ${isDarkTheme ? "fade-out" : "fade-in"}`}
              alt="Previous"
            />
            <img
              src={LeftArrowDark}
              className={`arrow-image ${!isDarkTheme ? "fade-out" : "fade-in"}`}
              alt="Previous"
            />
          </button>
          <div
            className="projects-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectsData.map((project, index) => (
              <div key={project.id} className={"project"}>
                <Project project={project} isDarkTheme={isDarkTheme} />
              </div>
            ))}
          </div>
          <button
            className={`arrow ${isDarkTheme ? "dark" : ""} right-arrow`}
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
          >
            <img
              src={RightArrow}
              className={`arrow-image ${isDarkTheme ? "fade-out" : "fade-in"}`}
              alt="Previous"
            />
            <img
              src={RightArrowDark}
              className={`arrow-image ${!isDarkTheme ? "fade-out" : "fade-in"}`}
              alt="Previous"
            />
          </button>
          {/*
        <Dialog
          images={selectedImages}
          currentImageIndex={currentImageIndex}
          isOpen={dialogOpen}
          onClose={closeDialog}
          onPrev={handleDialogPrev}
          onNext={handleDialogNext}
          isDarkTheme={isDarkTheme}
        />
        */}
        </div>
      </div>
    </div>
  );
};
