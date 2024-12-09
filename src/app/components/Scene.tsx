'use client';

import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { TypeAnimation } from 'react-type-animation';

import ImacAnimation from '../ImacAnimation';
import Button from './Button';
import Model from './Model';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Scene() {
  const textZ = 6.8;
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
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative h-svh bg-white"
    >
      <directionalLight position={[5, 3, 7]} intensity={3} />
      <ambientLight />
      <OrbitControls target={[0, 10, 0]} minDistance={10} maxDistance={100} />
      <ImacAnimation />
      <Suspense fallback={<Loader />}>
        <Model />
        <Html
          position={[-13.25, 25.8, textZ]}
          transform
          occlude
          style={{
            transform: 'translate(50%, 50%)',
            transformStyle: 'preserve-3d',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '5em',
            color: 'white',
          }}
        >
          <TypeAnimation
            sequence={['Hi!', 1000, "Hi! I'm Bonnie"]}
            wrapper="h1"
            speed={75}
            cursor={false}
            preRenderFirstString={true}
            omitDeletionAnimation={true}
          />
        </Html>
        <Html
          position={[-13.25, 19.75, textZ]}
          transform
          occlude
          style={{
            transform: 'translate(50%, 50%)',
            width: '600px',
            transformStyle: 'preserve-3d',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '5em',
            lineHeight: '1.1',
            color: 'white',
          }}
        >
          <TypeAnimation
            sequence={['', 2000, 'I love creating beautiful user experiences!']}
            wrapper="h2"
            speed={75}
            cursor={false}
          />
        </Html>
        <Button text="About" position={[9.2, 24.1, textZ]} buttonClick={aboutClick} />
        <Button text="Experience" position={[9.2, 18.7, textZ]} buttonClick={experienceClick} />
        <Button text="Contact" position={[9.2, 13.3, textZ]} buttonClick={contactClick} />
      </Suspense>
    </Canvas>
  );
}
