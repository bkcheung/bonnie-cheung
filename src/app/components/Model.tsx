import { Html, useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Group } from 'three';

import Button from './Button';

useGLTF.preload('/desk.glb');

function Desk() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/desk.glb');
  const [showButtons, setShowButtons] = useState(false);
  const textZ = 6.8;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  function aboutClick() {
    console.log('About button clicked!');
  }

  function experienceClick() {
    console.log('Experience button clicked!');
  }

  function contactClick() {
    console.log('Contact button clicked!');
  }

  return (
    <>
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
          color: 'white',
          width: '10em',
        }}
      >
        <TypeAnimation
          sequence={[750,'Hi!', 750, "Hi! I'm Bonnie"]}
          wrapper="h1"
          speed={75}
          cursor={false}
          // preRenderFirstString={true}
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
          color: 'white',
        }}
      >
        <TypeAnimation
          sequence={['', 2500, 'I love creating beautiful user experiences!']}
          wrapper="h2"
          speed={75}
          cursor={false}
        />
      </Html>
      {showButtons && (
        <>
          <Button
            text="About"
            position={[9.2, 24.1, textZ]}
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
            position={[9.2, 13.3, textZ]}
            buttonClick={contactClick}
            className="animate-fade-in"
          />
        </>
      )}
    </>
  );
}

export default Desk;
