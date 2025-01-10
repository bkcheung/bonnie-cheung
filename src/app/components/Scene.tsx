'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import { frameData } from '../data';
import Background from './Background';
import Desk from './Desk';
import Frame from './Frame';
import Lighting from './Lighting';
import Loader from './Loader';

function ThreeCanvas() {
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const [activeFrame, setActiveFrame] = useState(-1);

  const frames = frameData.map((frame, index) => {
    return (
      <Frame
        key={index}
        frame={index}
        active={activeFrame === index}
        setActiveFrame={setActiveFrame}
        setOrbitEnabled={setOrbitEnabled}
      />
    );
  });

  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <Lighting />
      <OrbitControls
        enabled={orbitEnabled}
        target={[0, 10, 0]}
        minDistance={10}
        maxDistance={150}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      <Desk setOrbitEnabled={setOrbitEnabled} setActiveFrame={setActiveFrame} />
      {frames}
      <Background
        orbitEnabled={orbitEnabled}
        setOrbitEnabled={setOrbitEnabled}
        setActiveFrame={setActiveFrame}
      />
    </Canvas>
  );
}

export default function Scene() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <ThreeCanvas />
    </Suspense>
  );
}
