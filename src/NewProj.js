import React from "react";
import "./NewProj.css";

const projects = [
  {
    title: "Road Smart Interactive (2025)",
    role: "Unity Developer (iOS / VR)",
    description: "Road Smart Interactive is an evidence based, highly interactive road safety education program that consists of a 30-player multiplayer iPad application, along with 2 immersive VR experiences.",
    skills: ["C#", "Unity"],
    video: `${process.env.PUBLIC_URL}/mp4/RSI2.mp4`,
    duration: "6 Months",
    team: "2",
    engine: "Unity (C#)",
    link: "/rsi",
  },
  {
    title: "Dream Machine XR (2024)",
    role: "VR Developer (Unity C#)",
    description:
      "Dream Machine is an interactive, multiplayer VR music experience that debuted at the Lincoln Centre in New York in July 2024.",
      video: `${process.env.PUBLIC_URL}/mp4/dreamMachine.mp4`,
    duration: "6 Months",
    team: "5",
    engine: "Unity (C#)",
    link: "/dream-machine",
  },
  {
    title: "Neuromersiv (2024)",
    role: "VR Developer (Unity C#)",
    description: "Neuromersiv Ulysses aims to assist stroke patients in their functional recovery through hand-tracked VR rehabilitation programs.",
    video: `${process.env.PUBLIC_URL}/mp4/neuro.mp4`,
    duration: "3 Months",
    team: "3",
    engine: "Unity",
    link: "/neuro",
  },
  {
    title: "uCat (2023)",
    role: "VR Developer (Unity C#)",
    description: "uCat is a Brain-Computer Interface VR startup that aims to help paralyzed users regain their function and autonomy through the metaverse.",
    video: `${process.env.PUBLIC_URL}/mp4/ucat.mp4`,
    duration: "1 Year",
    team: "3",
    engine: "Unity",
    link: "/ucat",
  },
  {
    title: "Sound Storm",
    role: "Unity Developer (iOS)",
    description: "Sound Storm is an iOS application developed in Unity that helps children suffering from Spatial Processing Disorder through a series of interactive games.",
    video: `${process.env.PUBLIC_URL}/mp4/sound.mp4`,
    duration: "6 Months",
    team: "3",
    engine: "Unity",
    link: "/sound",
  },
  {
    title: "Space Breathwork",
    role: "Unity Developer (WebGL)",
    description: "Space Breathwork is a breathwork application built in Unity to help people engage in various breathwork practices in a relaxing 3D space environment.",
    video: `${process.env.PUBLIC_URL}/mp4/space.mp4`,
    duration: "2 Weeks",
    team: "1",
    engine: "Unity",
    link: "/space",
  },
  {
    title: "Orb Pondering XR (Upcoming)",
    role: "VR Developer (Unity C#)",
      description: "Orb Pondering XR is a fantasy-inspired VR game that uses hand-tracking to ponder, manipulate and shoot various types of magical orbs.",
      video: `${process.env.PUBLIC_URL}/mp4/orbDemo.mp4`,
    duration: "Ongoing",
    team: "12",
    engine: "Unity",
    link: "/orb",
  },
];

export default function NewProj() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <a href={proj.link} key={index} className="project-card">
            <div className="project-img">
              <video
                src={proj.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="project-video"
              />
              <div className="overlay">
                <div className="overlay-text">
                  <span>👥 {proj.team}</span>
                  <span>⏱ {proj.duration}</span>
                  <span>🛠 {proj.engine}</span>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p className="role">{proj.role}</p>
              <p className="desc">{proj.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
