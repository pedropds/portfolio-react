import React, { useEffect, useState } from "react";
import "./HomePage.css";
import PhotoMe from "../../images/me.jpg";
import { LoadingPage } from "../loading-screen/LoadingPage";
import useLoading from "../../custom-hooks/UseLoading";

interface HomePageProps {
  isDarkTheme: boolean;
}

export const HomePage = ({ isDarkTheme }: HomePageProps) => {
  const isLoading = useLoading(500);

  if (isLoading) {
    return <LoadingPage isDarkTheme={isDarkTheme}></LoadingPage>;
  }

  return (
    <div className="home-page-container">
      {/* Profile Image */}
      <div className="profile-image-container">
        <img src={PhotoMe} alt="Pedro Sousa" className="profile-image" />
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
        learning and innovation. Currently at Microsoft, I love building
        software and contributing to impactful solutions.
      </span>
    </div>
  );
};
