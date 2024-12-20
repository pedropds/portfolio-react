import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { AboutMe } from "./components/about-me/AboutMe";
import { HomePage } from "./components/home-page/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  // Get query parameter to set initial theme
  const queryParams = new URLSearchParams(window.location.search);
  const isDarkThemeUrl = queryParams.get("is-dark-theme");

  // Set initial state based on the URL query parameter
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    isDarkThemeUrl === "true"
  );

  // Toggle theme and update URL query parameter
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;

      // Update the URL query parameter to reflect the new theme state
      const url = new URL(window.location.href);
      url.searchParams.set("is-dark-theme", newTheme ? "true" : "false");
      window.history.pushState({}, "", url.toString()); // Update the URL without reloading the page

      return newTheme;
    });
  };

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      {/* Pass only theme state to Header and Body */}
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="body">
        <Routes>
          <Route
            path="/"
            element={<HomePage isDarkTheme={isDarkTheme}></HomePage>}
          />
          <Route
            path="/aboutme"
            element={<AboutMe isDarkTheme={isDarkTheme} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
