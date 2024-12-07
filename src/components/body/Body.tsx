import React from "react";
import "./Body.css";
import { MyTimeline } from "./timeline/Timeline";
import { timelineData } from "./BodyConsts";

interface BodyProps {
  isDarkTheme: boolean;
}

export const Body = ({ isDarkTheme }: BodyProps) => {
  return (
    <div className={`body ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <header
        className={`text-element ${isDarkTheme ? "dark-theme" : "light-theme"}`}
      >
        Pedro Sousa
      </header>
      <span
        className={`text-element ${isDarkTheme ? "dark-theme" : "light-theme"}`}
      >
        Description about me
      </span>
      <MyTimeline items={timelineData} isDarkTheme={isDarkTheme} />;
    </div>
  );
};
