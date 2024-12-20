import { Html, useGLTF } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Group } from 'three';

import moveCamera from '../moveCamera';
import {AboutContent, PortfolioContent} from './Content';
import Button from './Button';
import Frame from './Frame';

useGLTF.preload('/imac.glb');
useGLTF.preload('/gallery.glb');

interface DeskProps {
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Desk({ setOrbitEnabled }: DeskProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/imac.glb');
  const [showButtons, setShowButtons] = useState(false);
  const { camera } = useThree();

  const textZ = 6.8;
  const aboutView = [-150, 30, 0, -200, 30, 0];
  const expView = [0, 30, -150, 0, 30, -200];
  const contactView = [150, 30, 0, 200, 30, 0];

  useEffect(() => {
    const homeView = [0, 15, 40, 0, 10, 0];

    camera.position.set(30, 50, 50);
    moveCamera(homeView, camera);

    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 3600);

    return () => clearTimeout(timer);
  }, [camera]);

  return (
    <group>
      <group ref={group}>
        <primitive object={scene} scale={[1, 1, 1]} />
      </group>
      <Html
        position={[-16.5, 25.8, textZ]}
        transform
        occlude
        style={{
          transform: 'translate(50%, 50%)',
          transformStyle: 'preserve-3d',
          WebkitFontSmoothing: 'antialiased',
          fontSize: '5em',
          textAlign: 'center',
          width: '10em',
        }}
      >
        <TypeAnimation
          sequence={[750, 'Hi!', 750, "Hi! I'm Bonnie"]}
          wrapper="h1"
          speed={75}
          cursor={false}
          omitDeletionAnimation={true}
        />
      </Html>
      <Html
        position={[-15.5, 20.5, textZ]}
        transform
        occlude
        style={{
          transform: 'translate(50%, 50%)',
          width: '10em',
          transformStyle: 'preserve-3d',
          WebkitFontSmoothing: 'antialiased',
          fontSize: '4.5em',
          textAlign: 'center',
        }}
      >
        <TypeAnimation
          sequence={['', 2200, 'I enjoy creating beautiful user experiences!']}
          wrapper="h2"
          speed={75}
          cursor={false}
        />
      </Html>
      {showButtons && (
        <>
          <Button
            text="About"
            position={[9.2, 24.15, textZ]}
            buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setOrbitEnabled(false);
              gsap.to(camera.position, {
                x: 0,
                y: 15,
                z: 75,
                duration: 0.6,
                ease: 'ease-in-out',
              });
              setTimeout(() => {
                moveCamera(aboutView, camera);
              }, 400);
            }}
            className="animate-fade-in"
          />
          <Button
            text="Experience"
            position={[9.2, 18.7, textZ]}
            buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setOrbitEnabled(false);
              moveCamera(expView, camera);
            }}
            className="animate-fade-in"
          />
          <Button
            text="Contact"
            position={[9.2, 13.35, textZ]}
            buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setOrbitEnabled(false);
              gsap.to(camera.position, {
                x: 0,
                y: 15,
                z: 75,
                duration: 0.6,
                ease: 'ease-in-out',
              });
              setTimeout(() => {
                moveCamera(contactView, camera);
              }, 400);
            }}
            className="animate-fade-in"
          />
        </>
      )}
      <Frame
        position={[-250, 42, 0]}
        rotation={[0, Math.PI / 2, 0]}
        handleFrameClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          moveCamera(aboutView, camera);
        }}
      >
        <AboutContent />
      </Frame>
      <Frame
        position={[0, 42, -250]}
        rotation={[0, 0, 0]}
        handleFrameClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          moveCamera(expView, camera);
        }}
      >
        <PortfolioContent />
      </Frame>
      <Frame
        position={[250, 42, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        handleFrameClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          moveCamera(contactView, camera);
        }}
      >
        <div>Contact</div>
      </Frame>
    </group>
  );
}
