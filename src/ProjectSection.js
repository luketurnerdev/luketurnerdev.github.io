// src/ProjectSection.js
import React from 'react';
import './ProjectSection.css';

const exampleProjects = {
  commercial: [
    {
      id: 1,
      title: "Mirror Skater",
      date: "2025",
      description: "Mirror Skater is a procedurally-generated skating game developed as part of the online Micro Jam in 2025.",
      image: `${process.env.PUBLIC_URL}/img/fish.png`,
      link: "https://neurogoblin.itch.io/mirror-skater",
      video: null,
      linkName: "Itch.io Link",
      tech: "Unity (C#)"    
    },
    {
      id: 2,
      title: "Dream Machine XR",
      date: "February - July 2024",
      description: "Dream Machine is an interactive, multiplayer VR music experience that debuted at the Lincoln Centre in New York in July 2024.",
      link: "https://www.eyejack.io/projects/the-dream-machine",
      video: `${process.env.PUBLIC_URL}/mp4/dreamMachine.mp4`,
      linkName: "Dream Machine Site",
      tech: "Unity (C#)"     
    },
    {
      id: 2,
      title: "Tech Gym",
      date: "2018",
      description: "Tech Gym was a startup at UTS which aimed to help stroke patients in their upper limb recovery through an interactive Unity application linked to a UR3 robotics system.",
      link: "https://www.youtube.com/watch?v=Xt5-x-Zk7fo",
      image: `${process.env.PUBLIC_URL}/img/techgym.png`,
      linkName: "Tech Gym Demo",
      tech: "Unity (C#), UR3 Robotics System"
    },
    {
      id: 1,
      title: "Kickfight!",
      date: "2018",
      description: "Kickfight is a multiplayer 2d fighting game developed as part of a game jam at UTS in 2018. Players must defeat eachother without the use of their hands!",
      image: `${process.env.PUBLIC_URL}/img/kickfight.png`,
      link: "https://beefjerkay.itch.io/kickfight",
      video: null,
      linkName: "Itch.io Link",
      tech: "Unity (C#)"    
    },
    {
      id: 1,
      title: "Neuromersiv",
      date: "2024",
      description: "Neuromersiv Ulysses aims to assist stroke patients in their functional recovery through hand-tracked VR rehabilitation programs.",
      image: `${process.env.PUBLIC_URL}/img/neuromersiv.jpg`,
      link: "https://www.neuromersiv.com/",
      video: null,
      linkName: "Neuromersiv Site",
      tech: "Unity (C#), Meta Quest 3, ArborXR"    
    },
    {
      id: 3,
      title: "uCat",
      date: "2022-2024",
      description: "uCat is a Brain-Computer Interface VR startup that aims to help paralyzed users regain their function and autonomy through the metaverse.",
      image: `${process.env.PUBLIC_URL}/img/ucat.png`,
      link: "https://ucat.app",
      video: null,
      linkName: "uCat Site",
      additionalLink: "https://www.youtube.com/watch?v=tlFnHw4QF8k",
      additionalTitle: "Video Demo",
      tech: "Unity (C#)"    
    },
    {
      id: 4,
      title: "Sound Storm",
      date: "2021-2022",
      description: "Sound Storm is an iOS application developed in Unity that helps children suffering from Spatial Processing Disorder through a series of interactive games.",
      image: `${process.env.PUBLIC_URL}/img/soundstorm.png`,
      link: "https://www.soundstorm.app/",
      video: null,
      linkName: "SoundStorm Site",
      tech: "Unity (C#), Xcode, Testflight"    
    },
    {
      id: 6,
      title: "Space Breathwork Application",
      date: "2025",
      description: "Space Breathwork is a breathwork application built in Unity to help people engage in various breathwork practices in a relaxing 3D space environment.",
      image: `${process.env.PUBLIC_URL}/img/meditationScreen.png`,
      link: "https://neurogoblin.io/meditation",
      video: null,
      linkName: "Live Application",
      tech: "Unity (C#)"    
    },
    {
      id: 5,
      title: "Virtual Live Audio Engineer",
      date: "2023-2025",
      description: "Virtual Live Audio Engineer (VLAE) is a VR application designed to teach users live audio skills in an immersive and engaging environment. </br> </br> It is currently being developed as part of a research project at UTS on optimal learning paradigms in VR.",
      image: `${process.env.PUBLIC_URL}/img/newui.png`,
      link: "https://www.youtube.com/watch?v=_sLEIi5ofsg",
      video: null,
      linkName: "Video Demo",
      tech: "Unity (C#)"    
    },
    {
      id: 6,
      title: "Orb Pondering XR",
      date: "2024-Present",
      description: "Orb Pondering XR is a fantasy-inspired mixed-reality game that uses hand-tracking to ponder, manipulate and shoot various types of magical orbs.",
      video: `${process.env.PUBLIC_URL}/mp4/orbDemo.mp4`,
      additionalLink: "https://youtu.be/Twg4H8p6W9U",
      additionalTitle: "Orb Reloading Mechanic Demo",
      tech: "Unity (C#)"
    },
  ],
};

const ProjectSection = ({ projects = exampleProjects }) => {
  const renderProjects = (projectList) => {
    return projectList.map(project => (
      <div className="project-card" key={project.id}>
        <h3 className="project-title">{project.title}</h3>
        <h5 className="project-date">{project.date}</h5>
        <p
          dangerouslySetInnerHTML={{ __html: project.description }}
          className="project-description"
        />
        {project.link && (
          <p className='project-description'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.linkName}
            </a>
          </p>
        )}

{project.additionalLink && (
  <p className='project-description'>
    <a href={project.additionalLink} target="_blank" rel="noopener noreferrer">
      {project.additionalTitle}
    </a>
  </p>
)}
        {project.tech && (
          <p className='project-description'>
              <b>Technologies used: </b> {project.tech}
          </p>
        )}
        {project.image && (
          <div className='imageBox'> 
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        )}
        {project.video && (
          <div className='imageBox'> 
            <video controls className="project-video">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>            
          </div>
        )}
      </div>
    ));
  };

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {renderProjects(projects.commercial)}
      </div>

      <div className="section-divider"></div>


    </section>
  );
};

export default ProjectSection;
