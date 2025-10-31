import React from "react";
import ProjectLayout from "../ProjectLayout";
import "../ProjectPage.css";

export default function MeditationPage() {
  return (
    <ProjectLayout
      title="Meditation Trainer VR"
      role="Lead Developer"
      team="2"
      duration="3 Months"
      engine="Unity (C#)"
      about="A VR meditation experience focused on guiding users through breathing and posture using hand-tracking and immersive sound design."
      videoSrc={`${process.env.PUBLIC_URL}/mp4/meditation_trailer.mp4`}
    >
      <section>
        <h2>Introduction</h2>
        <p>
          The Meditation Trainer project was designed to explore calming VR environments and hand-tracked interactions. 
          My goal was to create a prototype that combined gentle breathing cues with environmental feedback.
        </p>
      </section>

      <section>
        <h2>What I Learned</h2>
        <p>
          I gained a deeper understanding of XR Interaction Toolkit, spatial audio design, and real-time feedback loops 
          based on hand tracking and heart rate input simulation.
        </p>
      </section>

      <section>
        <h2>Gallery</h2>
        <img 
          src={`${process.env.PUBLIC_URL}/images/meditation_scene.png`} 
          alt="Meditation Scene" 
          className="project-image"
        />
      </section>
    </ProjectLayout>
  );
}
