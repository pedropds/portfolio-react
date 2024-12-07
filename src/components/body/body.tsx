import React from "react";
import "./body.css";
import { MyTimeline } from "./timeline/timeline";

interface BodyProps {
  isDarkTheme: boolean;
}

const timelineData = [
  {
    date: "September 2018 - July 2021",
    title: "Bachelor of Science @ Instituto Superior de Engenharia do Porto",
    description: `
    • BSc in Computer Science and Engineering.\n
    • Gained foundational knowledge in software development, machine learning, and system design.
    `,
  },
  {
    date: "March 2021 - July 2021",
    title: "Software Engineer - Intern @ B2F",
    description: `
    • Built a machine learning model with Python and TensorFlow to predict client purchases.\n
    • Implemented Association Rules for analyzing customer behavior and improving marketing strategies.\n
    • Used PowerBI for data visualization and actionable insights.
    `,
  },
  {
    date: "September 2021 - June 2023",
    title: "Junior Software Engineer @ Critical Software",
    description: `
    • Designed and deployed ALSTOM's railway fleet management system, benefiting millions of users.\n
    • Built APIs using Java, Quarkus, Hibernate ORM, and Kafka to ensure scalability and reliability.\n
    • Developed Angular modules with real-time updates, improving operational productivity and safety.
    `,
  },
  {
    date: "June 2023 - October 2023",
    title: "Software Engineer @ Siemens",
    description: `
    • Contributed to the next-generation Mobility as a Service product using Java, Kotlin, Spring Boot, Kafka, and AWS.\n
    • Enhanced payment processing and user experience by integrating payment gateways and optimizing transaction flows.\n
    • Utilized CI/CD pipelines for automated testing, deployment, and delivery.
    `,
  },
  {
    date: "December 2023 - Present",
    title: "Software Engineer II @ IBM",
    description: `
    • Designed and implemented the new version of QRadar Suite, leveraging Java, Quarkus, Kafka, and PostgreSQL.\n
    • Developed highly scalable APIs and event-driven microservices capable of handling thousands of messages per second.\n
    • Achieved over a 95% reduction in execution time through SQL and Cypher query optimization.
    `,
  },
];

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
