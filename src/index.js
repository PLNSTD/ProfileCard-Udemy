import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import "./styles.css";

function App() {
  const cardInfo = {
    name: "Jonas Schmedtmann",
    description:
      "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
    skills: [
      { name: "HTML+CSS", level: "high", color: "#1362bd" },
      { name: "JavaScript", level: "high", color: "yellow" },
      { name: "Web Design", level: "high", color: "green" },
      { name: "Git and GitHub", level: "normal", color: "red" },
      { name: "React", level: "high", color: "lightblue" },
      { name: "Svelte", level: "low", color: "red" },
    ],
    imagePath: "/jonas.jpeg",
  };
  return <Card cardInfo={cardInfo} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
