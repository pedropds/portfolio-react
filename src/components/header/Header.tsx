import React, { useEffect, useState } from "react";
import "./Header.css";

import LinkedInWhite from "../../images/linkedin-white.svg";
import LinkedInBlack from "../../images/linkedin-black.svg";
import DarkThemeColor from "../../images/color-theme-dark.svg";
import LightThemeColor from "../../images/color-theme-light.svg";

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void; // Function to toggle the theme
}

export const Header = ({ isDarkTheme, toggleTheme }: HeaderProps) => {
  const [isRotated, setIsRotated] = useState<boolean>(false); // Rotation state
  const [isLoaded, setIsLoaded] = useState<boolean>(false); // isLoaded state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10); // Delay for 10ms to ensure the transition occurs

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    toggleTheme(); // Toggle theme in App
    setIsRotated((prevRotated) => !prevRotated); // Toggle rotation of the button
  };

  return (
    <div className="header">
      <div className={`right-header ${isLoaded ? "move-in" : ""}`}>
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
