import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Body } from "./components/body/body";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false); // Theme state

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); // Toggle the theme state
  };

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      {/* Pass only theme state to Header */}
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Body isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
