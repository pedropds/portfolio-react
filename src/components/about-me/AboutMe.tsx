import React from "react";
import "./AboutMe.css";
import { MyTimeline } from "./timeline/Timeline";
import { skills, timelineData } from "./BodyConsts";
import { Skills } from "./skills/Skills";

interface AboutMeProps {
  isDarkTheme: boolean;
}

export const AboutMe = ({ isDarkTheme }: AboutMeProps) => {
  return (
    <div className={`body ${isDarkTheme ? "dark-theme" : ""}`}>
      <header
        className={`text-element header-text ${
          isDarkTheme ? "dark-theme" : ""
        }`}
      >
        About me
      </header>
      <span
        className={`text-element description-text ${
          isDarkTheme ? "dark-theme" : ""
        }`}
      >
        I am Pedro Sousa, a Software Engineer with a passion for continuous
        learning and innovation. Currently working at Microsoft, I contribute as
        part of the Feedback team for Office 365, specializing in developing and
        enhancing full-stack solutions using technologies like C++, TypeScript,
        JavaScript, and React.
      </span>
      <Skills isDarkTheme={isDarkTheme} skills={skills}></Skills>
      <MyTimeline items={timelineData} isDarkTheme={isDarkTheme} />;
    </div>
  );
};
