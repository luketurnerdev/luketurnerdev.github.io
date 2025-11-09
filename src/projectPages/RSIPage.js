import React, { useState } from "react";
import ProjectLayout from "../ProjectLayout";
import "../ProjectPage.css";

export default function RSIPage() {
  // Add your images here
  const galleryImages = [
      `${process.env.PUBLIC_URL}/img/rsi/3.png`,
    `${process.env.PUBLIC_URL}/img/rsi/1.png`,
    `${process.env.PUBLIC_URL}/img/rsi/2.jpg`,
    `${process.env.PUBLIC_URL}/img/rsi/4.png`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <ProjectLayout
      title="Road Smart Interactive (2025)"
      role="Unity Developer (C#) - VR / iOS"
      team="2"
      duration="6 Months"
      engine="Unity (C#), XCode, Testflight"
      about="Road Smart Interactive "
      videoSrc={`${process.env.PUBLIC_URL}/mp4/RSIVR1.mp4`}
      playLink={"https://www.roadsafetyeducation.vic.gov.au/educational-resources/programs/roadsmart-interactive"}
      playText="Road Smart Interactive Victoria Page"
    >
      <section>
        <h2>About</h2>
        <p>
          Road Smart Interactive is an installation designed for high school students in Victoria and Western Australia. It is comprised of a 30-iPad networked experience and 2 VR experiences, with the aim of educating students about road safety in an immersive and engaging manner.
        </p>
      </section>

      <section>
        <h2>Skills Learned</h2>
        <p>
          This application taught me a lot about the logistics of networking such a large amount of iPads, debugging iOS apps at scale, and the challenges of physically installing an iPad experience.
        </p>
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        {galleryImages.length > 1 ? (
          <div className="carousel">
            <button className="carousel-btn left" onClick={handlePrev}>
              ‹
            </button>
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="carousel-image"
            />
            <button className="carousel-btn right" onClick={handleNext}>
              ›
            </button>
            <div className="carousel-dots">
              {galleryImages.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>
        ) : (
          <img
            src={galleryImages[0]}
            alt="Road Smart Interactive"
            className="project-image"
          />
        )}
      </section>
    </ProjectLayout>
  );
}
