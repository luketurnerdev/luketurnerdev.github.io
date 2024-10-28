// src/AutoPlayVideo.js
import React, { useEffect, useRef } from 'react';

const AutoPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const playVideo = async () => {
      try {
        await video.play();
        console.log("Video started playing");
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    };
    playVideo();
  }, []);

  return (
    <video
      ref={videoRef}
      src={`${process.env.PUBLIC_URL}/mp4/tunnelvid.mp4`} // Updated path for GitHub Pages
      loop
      muted
      playsInline
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default AutoPlayVideo;
