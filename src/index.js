import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";

function App() {
  const cardInfo = {
    name: "Jonas Schmedtmann",
    description:
      "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
    skills: [
      { skillName: "HTML+CSS", skillLevel: "High" },
      { skillName: "JavaScript", skillLevel: "High" },
      { skillName: "Web Design", skillLevel: "High" },
      { skillName: "Git and GitHub", skillLevel: "Normal" },
      { skillName: "React", skillLevel: "High" },
      { skillName: "Svelte", skillLevel: "Low" },
    ],
  };
  return <Card cardInfo={cardInfo} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
