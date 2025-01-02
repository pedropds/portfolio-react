import React, { useEffect, useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

import LinkedInWhite from "../../images/linkedin-white.svg";
import LinkedInBlack from "../../images/linkedin-black.svg";
import GithubWhite from "../../images/github-light.svg";
import GithubDark from "../../images/github-dark.svg";
import DarkThemeColor from "../../images/color-theme-dark.svg";
import LightThemeColor from "../../images/color-theme-light.svg";

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDarkTheme, toggleTheme }: HeaderProps) => {
  const [isRotated, setIsRotated] = useState<boolean>(isDarkTheme); // Rotation state
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();

  const handleToggle = () => {
    toggleTheme();
    setIsRotated((prevRotated) => !prevRotated);
  };

  const handleNavigation = (path: string) => {
    const themeQuery = `is-dark-theme=${isDarkTheme}`;
    navigate(`${path}?${themeQuery}`);
  };

  return (
    <div className={`header ${isDarkTheme ? "dark" : ""}`}>
      <div className="middle-header">
        <div
          className={`header-element nav ${isDarkTheme ? "dark" : ""} ${
            location.pathname === "/" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/")}
        >
          Home
        </div>
        <div
          className={`header-element nav ${isDarkTheme ? "dark" : ""} ${
            location.pathname === "/aboutme" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/aboutme")}
        >
          About me
        </div>
        <div
          className={`header-element nav ${isDarkTheme ? "dark" : ""} ${
            location.pathname === "/projects" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/projects")}
        >
          Projects
        </div>
      </div>
      <div className="right-header">
        <a
          href="https://www.linkedin.com/in/pedropds/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-element"
        >
          <div className="image-container">
            <img
              src={LinkedInBlack}
              alt="LinkedIn"
              className={`image ${!isDarkTheme ? "fade-out" : "fade-in"}`}
            />
            <img
              src={LinkedInWhite}
              alt="LinkedIn"
              className={`image ${isDarkTheme ? "fade-out" : "fade-in"}`}
            />
          </div>
        </a>
        <a
          href="https://github.com/pedropds"
          target="_blank"
          rel="noopener noreferrer"
          className="header-element"
        >
          <div className="image-container">
            <img
              src={GithubDark}
              alt="LinkedIn"
              className={`image ${!isDarkTheme ? "fade-out" : "fade-in"}`}
            />
            <img
              src={GithubWhite}
              alt="LinkedIn"
              className={`image ${isDarkTheme ? "fade-out" : "fade-in"}`}
            />
          </div>
        </a>
        <img
          className={`header-element theme-toggle ${
            isRotated ? "rotated" : ""
          }`}
          src={isDarkTheme ? LightThemeColor : DarkThemeColor}
          alt="ColorMode"
          onClick={handleToggle} // Add click handler
        />
      </div>
    </div>
  );
};
