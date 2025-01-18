'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import Help from './Help';
import Lighting from './Lighting';
import Loader from './Loader';
import Models from './Models';

function ThreeCanvas() {
  const [orbitEnabled, setOrbitEnabled] = useState(true);

  useEffect(() => {});

  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="absolute top-0 left-0 w-full h-full z-0"
    >
      <Lighting />
      <OrbitControls
        enabled={orbitEnabled}
        target={[0, 10, 0]}
        minDistance={10}
        maxDistance={150}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      <Models orbitEnabled={orbitEnabled} setOrbitEnabled={setOrbitEnabled} />
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
      <Help />
    </Suspense>
  );
}
