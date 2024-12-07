import React from "react";
import "./Timeline.css";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  isDarkTheme: boolean;
}

export const MyTimeline = ({ items, isDarkTheme }: TimelineProps) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-point ${isDarkTheme ? "dark" : ""}`} />
          <div className={`timeline-content ${isDarkTheme ? "dark" : ""}`}>
            <span className={`timeline-date ${isDarkTheme ? "dark" : ""}`}>
              {item.date}
            </span>
            <h3 className={`timeline-title ${isDarkTheme ? "dark" : ""}`}>
              {item.title}
            </h3>
            {/* Split the description into paragraphs */}
            {item.description.split("\n").map((paragraph, idx) => (
              <p
                key={idx}
                className={`timeline-description ${isDarkTheme ? "dark" : ""}`}
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
