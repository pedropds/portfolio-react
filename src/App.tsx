import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";

function App() {
  // Get query parameter to set initial theme
  const queryParams = new URLSearchParams(window.location.search);
  const isDarkThemeUrl = queryParams.get("isDarkTheme");

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
      url.searchParams.set("isDarkTheme", newTheme ? "true" : "false");
      window.history.pushState({}, "", url.toString()); // Update the URL without reloading the page

      return newTheme;
    });
  };

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      {/* Pass only theme state to Header and Body */}
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Body isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
