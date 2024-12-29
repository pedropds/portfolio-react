import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import { MyTimeline } from "./timeline/Timeline";
import { skills, timelineData } from "./BodyConsts";
import { Skills } from "./skills/Skills";
import { LoadingPage } from "../loading-screen/LoadingPage";
import useLoading from "../../custom-hooks/UseLoading";

interface AboutMeProps {
  isDarkTheme: boolean;
}

export const AboutMe = ({ isDarkTheme }: AboutMeProps) => {
  const isLoading = useLoading(500);

  if (isLoading) {
    return <LoadingPage isDarkTheme={isDarkTheme}></LoadingPage>;
  }

  return (
    <div className="about-me-container">
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
        JavaScript, and React. Most of my professional experience has been as a
        web developer, where I honed my skills in crafting scalable,
        user-friendly applications that deliver real-world value. However, I am
        always eager to step out of my comfort zone and embrace new challenges,
        whether it’s exploring emerging technologies, diving deeper into backend
        systems, or venturing into entirely new domains of software development.
      </span>
      <Skills isDarkTheme={isDarkTheme} skills={skills}></Skills>
      <MyTimeline items={timelineData} isDarkTheme={isDarkTheme} />
    </div>
  );
};
