'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import ImacAnimation from '../ImacAnimation';
import Lighting from './Lighting';
import Loader from './Loader';
import { Background, Desk } from './Model';

function ThreeCanvas() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <Lighting />
      <ImacAnimation />
      <Desk />
      <Background />
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
