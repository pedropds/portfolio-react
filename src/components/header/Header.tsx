import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import LinkedInWhite from "../../images/linkedin-white.svg";
import LinkedInBlack from "../../images/linkedin-black.svg";
import DarkThemeColor from "../../images/color-theme-dark.svg";
import LightThemeColor from "../../images/color-theme-light.svg";

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDarkTheme, toggleTheme }: HeaderProps) => {
  const [isRotated, setIsRotated] = useState<boolean>(isDarkTheme); // Rotation state
  const [isLoaded, setIsLoaded] = useState<boolean>(false); // isLoaded state
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

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
          className={`header-element nav ${isDarkTheme ? "dark" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          Home
        </div>
        <div
          className={`header-element nav ${isDarkTheme ? "dark" : ""}`}
          onClick={() => handleNavigation("/aboutme")}
        >
          About me
        </div>
      </div>
      <div className="right-header">
        <a
          href="https://www.linkedin.com/in/pedropds/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-element"
        >
          {/* LinkedIn Images Overlay */}
          <div className="linkedin-image-container">
            <img
              src={LinkedInBlack}
              alt="LinkedIn"
              className={`linkedin-image ${
                !isDarkTheme ? "fade-out" : "fade-in"
              }`}
            />
            <img
              src={LinkedInWhite}
              alt="LinkedIn"
              className={`linkedin-image ${
                isDarkTheme ? "fade-out" : "fade-in"
              }`}
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
