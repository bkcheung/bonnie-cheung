'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import Background from './Background';
import Lighting from './Lighting';
import Loader from './Loader';
import Desk from './Model';

function ThreeCanvas() {
  const [orbitEnabled, setOrbitEnabled] = useState(true);

  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <Lighting />
      <OrbitControls
        enabled={orbitEnabled}
        target={[0, 10, 0]}
        minDistance={10}
        maxDistance={150}
      />
      <Desk setOrbitEnabled={setOrbitEnabled} />
      <Background
        orbitEnabled={orbitEnabled}
        setOrbitEnabled={setOrbitEnabled}
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
