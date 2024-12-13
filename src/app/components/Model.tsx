import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Group } from 'three';

import moveCamera from '../moveCamera';
import AboutContent from './AboutContent';
import Button from './Button';
import Frame from './Frame';

useGLTF.preload('/imac.glb');
useGLTF.preload('/gallery.glb');

function Desk() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/imac.glb');
  const [showButtons, setShowButtons] = useState(false);
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const { camera } = useThree();

  const textZ = 6.8;
  const homeView = [0, 15, 40, 0, 10, 0];
  const aboutView = [-150, 30, 0, -200, 30, 0];
  const expView = [0, 30, -150, 0, 30, -200];
  const contactView = [150, 30, 0, 200, 30, 0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  const handleBackgroundClick = () => {
    console.log('background clicked');
    setOrbitEnabled(true);
    moveCamera(homeView, camera);
  };

  //sections
  // const about = <div>About</div>;
  const exp = <div>Experience</div>;
  const contact = <div>Contact</div>;

  return (
    <group>
      <group ref={group}>
        <OrbitControls
          enabled={orbitEnabled}
          target={[0, 10, 0]}
          minDistance={10}
          maxDistance={150}
        />
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
            buttonClick={() => {
              setOrbitEnabled(false);
              moveCamera(aboutView, camera);
            }}
            className="animate-fade-in"
          />
          <Button
            text="Experience"
            position={[9.2, 18.7, textZ]}
            buttonClick={() => {
              setOrbitEnabled(false);
              moveCamera(expView, camera);
            }}
            className="animate-fade-in"
          />
          <Button
            text="Contact"
            position={[9.2, 13.35, textZ]}
            buttonClick={() => {
              setOrbitEnabled(false);
              moveCamera(contactView, camera);
            }}
            className="animate-fade-in"
          />
        </>
      )}
      <Frame
        position={[-250, 42, 0]}
        rotation={[0, Math.PI / 2, 0]}
        handleFrameClick={() => {
          setOrbitEnabled(false);
          moveCamera(aboutView, camera);
        }}
      >
        <AboutContent />
      </Frame>
      <Frame
        position={[0, 42, -250]}
        rotation={[0, 0, 0]}
        handleFrameClick={() => {
          setOrbitEnabled(false);
          moveCamera(expView, camera);
        }}
      >
        {exp}
      </Frame>
      <Frame
        position={[250, 42, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        handleFrameClick={() => {
          setOrbitEnabled(false);
          moveCamera(contactView, camera);
        }}
      >
        {contact}
      </Frame>
    </group>
  );
}

function Background() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/gallery.glb');
  return (
    <group ref={group} position={[0, -45, 0]}>
      <primitive object={scene} scale={[60, 60, 60]} />
    </group>
  );
}

export { Desk, Background };
