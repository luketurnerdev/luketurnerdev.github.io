import './MediaSection.css';

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

export default function MediaSection() {
  return (
    <section className="projects-section">
      <h2>Media Appearances</h2>
      <div className="projects-grid">
        {exampleMediaAppearances.map((proj, index) => (
          <a href={proj.link} key={index} className="project-card">
            <div className="project-img">
              {/* <video
                src={proj.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="project-video"
              /> */}
              <img src={proj.image} alt={proj.title} className="project-video"/>
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

const exampleMediaAppearances = [
  {
    id: 1,
    title: "Talk at SydAR: Hand Tracking",
    description: "In this talk, Luke documents the trial-and-error of various ways of using hand tracking to control a Mixed Reality application on the Quest 3.",
    image: `${process.env.PUBLIC_URL}/img/hand.png`,
    link: "https://www.youtube.com/watch?v=9P7mdPt2vxs",
    linkName: "View full talk on YouTube",
  },
  {
    id: 2,
    title: "Talk at Transhumanism Australia: Virtual Reality and Brain-Computer Interfaces",
    description: "A talk outlining Luke's research into combining biomarkers with VR for optimal learning outcomes.",
    image: `${process.env.PUBLIC_URL}/img/bci2.png`,
    link: "https://www.youtube.com/watch?v=Tyux5XoLnQY",
    linkName: "View full talk on YouTube",
  },
  {
    id: 3,
    title: "Diffusion Science Radio: Neurofeedback",
    description: "Luke's appearance on Diffusion Science Radio to discuss Neurofeedback in VR.",
    image: `${process.env.PUBLIC_URL}/img/ian.jpg`,
    link: "https://www.diffusionradio.com/2023/09/neurofeedback_virtual_learning.html",
    linkName: "View full talk on YouTube",
  },
  {
    id: 4,
    title: "Talk at Deepend: Intro to Brain Computer Interfaces",
    description: "Luke's talk at Deepend giving an introduction to BCI technology and research.",
    image: `${process.env.PUBLIC_URL}/img/bci.png`,
    link: "https://www.youtube.com/watch?v=G1WdQEDJXJY",
    linkName: "View full talk on YouTube",
  },
];

// const MediaSection = ({ mediaAppearances = exampleMediaAppearances }) => {
//   return (
//     <section id="media" className="media-section">
//       <h2 className="section-title">Media Appearances</h2>
//       <div className="media-grid">
//         {mediaAppearances.map(media => (
//           <div className="media-card" key={media.id}>
//             <img src={media.image} alt={media.title} className="media-image" />
//             <h3 className="media-title">{media.title}</h3>
//             <p className="media-description">{media.description}</p>
//             {media.video ? (
//               <video controls className="media-video">
//                 <source src={media.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : media.link ? (
//               <a href={media.link} target="_blank" rel="noopener noreferrer" className="media-link">
//                 {media.linkName}
//               </a>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MediaSection;
