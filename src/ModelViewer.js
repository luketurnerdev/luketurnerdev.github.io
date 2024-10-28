// src/ModelViewer.js
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import * as THREE from 'three';

function BackgroundVideo() {
  const videoRef = useRef(null);
  const textureRef = useRef(null);

  useEffect(() => {
    // Reinitialize video if it doesn't exist
    if (!videoRef.current) {
      const video = document.createElement('video');
      video.src = `${process.env.PUBLIC_URL}/mp4/tunnelvid.mp4`; // Updated path for GitHub Pages
      video.loop = true;
      video.muted = true; // Mute video to allow autoplay in some browsers
      video.playsInline = true; // For mobile compatibility
      videoRef.current = video;

      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;
      textureRef.current = texture;
    }

    const video = videoRef.current;
    const texture = textureRef.current;

    // Attempt to play video with error handling
    const playVideo = async () => {
      try {
        await video.play();
        console.log("Video started playing");
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    };

    playVideo();

    // Cleanup: Stop video playback and dispose of texture
    return () => {
      video.pause();
      video.currentTime = 0; // Reset video to start
      texture.dispose();
    };
  }, []);

  // Use frame loop to update texture on each frame
  useFrame(() => {
    if (textureRef.current) textureRef.current.needsUpdate = true;
  });

  return (
    textureRef.current && (
      <mesh scale={[16, 9, 1]} position={[0, 0, -2]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={textureRef.current} toneMapped={false} />
      </mesh>
    )
  );
}

function Model() {
  const fbx = useFBX(`${process.env.PUBLIC_URL}/fbx/neuro-anim.fbx`); // Updated path for GitHub Pages
  const texture = new THREE.TextureLoader().load(`${process.env.PUBLIC_URL}/fbx/neuro-albedo.png`); // Updated path for GitHub Pages
  const mixer = useRef(); // Reference for AnimationMixer

  useEffect(() => {
    // Apply texture to all mesh materials
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });

    // Set up the animation mixer and play the first animation
    mixer.current = new THREE.AnimationMixer(fbx);
    if (fbx.animations.length > 0) {
      const action = mixer.current.clipAction(fbx.animations[0]);
      action.play();
    }

    // Clean up function
    return () => {
      mixer.current?.stopAllAction();
      mixer.current = null;
    };
  }, [fbx, texture]);

  // Update the mixer on each frame to play animations
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return <primitive object={fbx} scale={0.01} />;
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <BackgroundVideo />
        <Model />
      </Suspense>
      {/* Uncomment if you want interactive controls */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
