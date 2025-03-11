// src/ProjectSection.js
import React, { useState } from 'react';
import './ProjectSection.css'; // Custom styles

const exampleProjects = {
  commercial: [
    { 
      id: 1, 
      title: "Neuromersiv", 
      date: "September 2024",
      description: "Neuromersiv aims to assist stroke patients in their functional recovery through hand-tracked VR rehabilitation programs.",
      image: `${process.env.PUBLIC_URL}/img/neuromersiv.jpg`, 
      link: "https://www.neuromersiv.com/",  
      video: null, 
      linkName: "Neuromersiv Site" 
    },
    { 
      id: 2, 
      title: "Dream Machine XR", 
      date: "February - July 2024",
      description: "Dream Machine is an interactive, multiplayer VR music experience that debuted at the Lincoln Centre in New York in July 2024.",
      link: "https://www.eyejack.io/projects/the-dream-machine",  
      video: `${process.env.PUBLIC_URL}/mp4/dreamMachine.mp4`, 
      linkName: "Dream Machine Site" 
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
      additionalTitle: "Video Demo" 
    },
    { 
      id: 4, 
      title: "Sound Storm", 
      date: "2021-2022",
      description: "Sound Storm is an iOS application developed in Unity that helps children suffering from Spatial Processing Disorder through a series of interactive games.",
      image: `${process.env.PUBLIC_URL}/img/soundstorm.png`, 
      link: "https://www.soundstorm.app/",  
      video: null, 
      linkName: "SoundStorm Site" 
    },
  ],
  personal: [
    { 
      id: 5, 
      title: "Virtual Live Audio Engineer", 
      date: "2023-Present",
      description: "Virtual Live Audio Engineer (VLAE) is a VR application designed to teach users live audio skills in an immersive and engaging environment. </br> </br> It is currently being developed as part of a research project at UTS on optimal learning paradigms in VR.",
      image: `${process.env.PUBLIC_URL}/img/newui.png`, 
      link: "https://www.youtube.com/watch?v=_sLEIi5ofsg",  
      video: null, 
      linkName: "Video Demo" 
    },
    { 
      id: 6, 
      title: "Orb Pondering XR", 
      date: "2024-Present",
      description: "Orb Pondering XR is a fantasy-inspired mixed-reality game that uses hand-tracking to ponder, manipulate and shoot various types of magical orbs.",
      video: `${process.env.PUBLIC_URL}/mp4/orbDemo.mp4`, 
      additionalLink: "https://youtu.be/Twg4H8p6W9U", 
      additionalTitle: "Orb Reloading Mechanic Demo" 
    },
  ]
};

const ProjectSection = ({ projects = exampleProjects }) => {
  const [activeTab, setActiveTab] = useState('commercial');

  const renderProjects = () => {
    return projects[activeTab].map(project => (
      <div className="project-card" key={project.id}>
        {project.image && (
          <img src={project.image} alt={project.title} className="project-image" />
        )}
        <h3 className="project-title">{project.title}</h3>
        <h5 className="project-date">{project.date}</h5>
        <p dangerouslySetInnerHTML={{ __html: project.description }} className="project-description"></p>
        <p className='project-description'>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.linkName}
          </a>
        </p>
        {project.additionalLink && (
          <p className='project-description'>
            <a href={project.additionalLink} target="_blank" rel="noopener noreferrer">
              {project.additionalTitle}
            </a>
          </p>
        )}
        {project.video && (
          <video controls className="project-video">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    ));
  };

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'commercial' ? 'active' : ''}`}
          onClick={() => setActiveTab('commercial')}
        >
          Commercial
        </button>
        <button 
          className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal
        </button>
      </div>
      <div className="project-grid">
        {renderProjects()}
      </div>
    </section>
  );
};

export default ProjectSection;
