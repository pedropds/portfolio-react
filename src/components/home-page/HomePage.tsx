import React, { useEffect, useState } from "react";
import "./HomePage.css";

interface HomePageProps {
  isDarkTheme: boolean;
}

export const HomePage = ({ isDarkTheme }: HomePageProps) => {
  return (
    <div className="home-page-container">
      {/* Profile Image */}
      <div className="profile-image-container">
        <img
          src="/path-to-your-image.jpg" // Replace with the correct image path
          alt="Pedro Sousa"
          className="profile-image"
        />
      </div>

      {/* Headers */}
      <header
        className={`text-element header-text ${
          isDarkTheme ? "dark-theme" : ""
        }`}
      >
        Pedro Sousa
      </header>
      <header
        className={`text-element header-text smaller ${
          isDarkTheme ? "dark-theme" : ""
        }`}
      >
        Software Craftsman and Enthusiast
      </header>

      {/* Description */}
      <span
        className={`text-element description-text ${
          isDarkTheme ? "dark-theme" : ""
        }`}
      >
        I am Pedro Sousa, a Software Engineer with a passion for continuous
        learning and innovation. Currently working at Microsoft, I contribute as
        part of the Feedback team for Office 365, specializing in developing and
        enhancing full-stack solutions using technologies like C++, TypeScript,
        JavaScript, and React.
      </span>
    </div>
  );
};
