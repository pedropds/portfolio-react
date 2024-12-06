import React from "react";
import "./body.css";

interface BodyProps {
  isDarkTheme: boolean;
}

export const Body = ({ isDarkTheme }: BodyProps) => {
  return (
    <div className={`body ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <header className="my-name">Pedro Sousa</header>
    </div>
  );
};
