import React from "react";
import "./LoadingPage.css";

interface LoadingPageProps {
  isDarkTheme: boolean;
}

export const LoadingPage = ({ isDarkTheme }: LoadingPageProps) => {
  return (
    <div
      className={`loading-screen ${isDarkTheme ? "dark-theme" : "light-theme"}`}
    >
      <div className="loading-spinner"></div>
    </div>
  );
};
