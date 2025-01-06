import { Html, useGLTF } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Group } from 'three';

import { frameData, homeView } from '../data';
import moveCamera from '../moveCamera';
import { Button } from './Buttons';
import { AboutContent, ContactContent, PortfolioContent } from './Content';
import Frame from './Frame';

useGLTF.preload('/imac.glb');
useGLTF.preload('/gallery.glb');

interface DeskProps {
  orbitEnabled: boolean;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Desk({ orbitEnabled, setOrbitEnabled }: DeskProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/imac.glb');
  const [showButtons, setShowButtons] = useState(false);
  const { camera } = useThree();

  const textZ = 6.8;
  const aboutView = frameData[0].view;
  const expView = frameData[1].view;
  const contactView = frameData[2].view;

  useEffect(() => {
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
        <primitive
          object={scene}
          scale={[1, 1, 1]}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
        />
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
        position={[-14, 20.5, textZ]}
        transform
        occlude
        style={{
          transform: 'translate(50%, 50%)',
          width: '10.5em',
          transformStyle: 'preserve-3d',
          WebkitFontSmoothing: 'antialiased',
          fontSize: '3.5em',
          textAlign: 'center',
        }}
      >
        <TypeAnimation
          sequence={[
            '',
            2200,
            'Welcome to my website! Scroll to zoom and click + drag to rotate the view.',
          ]}
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
                y: 50,
                z: 75,
                duration: 0.3,
                ease: 'ease-in-out',
              });
              setTimeout(() => {
                moveCamera(aboutView, camera);
              }, 400);
            }}
            className="animate-fade-in"
          />
          <Button
            text="Portfolio"
            position={[9.2, 18.7, textZ]}
            buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setOrbitEnabled(false);
              gsap.to(camera.position, {
                x: 0,
                y: 50,
                z: 75,
                duration: 0.3,
                ease: 'ease-in-out',
              });
              setTimeout(() => {
                moveCamera(expView, camera);
              }, 400);
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
                y: 50,
                z: 75,
                duration: 0.3,
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
        frame="About"
        clickEnabled={orbitEnabled}
        handleFrameClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          moveCamera(aboutView, camera);
        }}
        camera={camera}
      >
        <AboutContent />
      </Frame>
      <Frame
        frame="Portfolio"
        clickEnabled={orbitEnabled}
        handleFrameClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          moveCamera(expView, camera);
        }}
        camera={camera}
      >
        <PortfolioContent />
      </Frame>
      <Frame
        frame="Contact"
        clickEnabled={orbitEnabled}
        handleFrameClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          moveCamera(contactView, camera);
        }}
        camera={camera}
      >
        <ContactContent />
      </Frame>
    </group>
  );
}
