// src/MediaSection.js
import React from 'react';
import './MediaSection.css';

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

const MediaSection = ({ mediaAppearances = exampleMediaAppearances }) => {
  return (
    <section id="media" className="media-section">
      <h2 className="section-title">Media Appearances</h2>
      <div className="media-grid">
        {mediaAppearances.map(media => (
          <div className="media-card" key={media.id}>
            <img src={media.image} alt={media.title} className="media-image" />
            <h3 className="media-title">{media.title}</h3>
            <p className="media-description">{media.description}</p>
            {media.video ? (
              <video controls className="media-video">
                <source src={media.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : media.link ? (
              <a href={media.link} target="_blank" rel="noopener noreferrer" className="media-link">
                {media.linkName}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
