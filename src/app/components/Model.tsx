import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Group } from 'three';

import Button from './Button';

useGLTF.preload('/imac.glb');
useGLTF.preload('/gallery.glb');

function Desk() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/imac.glb');
  const [showButtons, setShowButtons] = useState(false);
  const textZ = 6.8;
  const { camera } = useThree();
  const [orbitEnabled, setOrbitEnabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 4300);

    return () => clearTimeout(timer);
  }, []);

  function aboutClick() {
    setOrbitEnabled(false);
    gsap.to(camera.position, {
      x: -150,
      y: 30,
      z: 0,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(-200, 30, 0);
      },
    });
  }

  function experienceClick() {
    console.log('Experience button clicked!');
  }

  function contactClick() {
    console.log('Contact button clicked!');
  }

  return (
    <>
      <OrbitControls
        enabled={orbitEnabled}
        target={[0, 10, 0]}
        minDistance={10}
        maxDistance={150}
      />
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
          speed={65}
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
          sequence={['', 2600, 'I enjoy creating beautiful user experiences!']}
          wrapper="h2"
          speed={70}
          cursor={false}
        />
      </Html>
      {showButtons && (
        <>
          <Button
            text="About"
            position={[9.2, 24.15, textZ]}
            buttonClick={aboutClick}
            className="animate-fade-in"
          />
          <Button
            text="Experience"
            position={[9.2, 18.7, textZ]}
            buttonClick={experienceClick}
            className="animate-fade-in"
          />
          <Button
            text="Contact"
            position={[9.2, 13.35, textZ]}
            buttonClick={contactClick}
            className="animate-fade-in"
          />
        </>
      )}
    </>
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
