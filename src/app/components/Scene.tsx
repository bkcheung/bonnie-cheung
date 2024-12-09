'use client';

import { OrbitControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import ImacAnimation from '../ImacAnimation';
import Desk from './Model';

function Loader() {
  const { progress } = useProgress();

  return (
    <div className="flex flex-col h-svh items-center justify-center gap-4">
      <div className="text-lg text-gray-600">Loading...</div>
      <div className="w-64 h-3 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm text-gray-500">{progress.toFixed(0)}% loaded</div>
    </div>
  );
}

function ThreeCanvas() {
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
      <Desk />
    </Canvas>
  );
}

export default function Scene() {
  //use loading state to show load progress immediately
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Runs right after first render
    setIsLoading(false);
  }, []);

  //first render shows Loader, since isLoading is true
  if (isLoading) {
    return <Loader />;
  }
  //shows ThreeCanvas since isLoading is now false
  return (
    <Suspense fallback={<Loader />}>
      <ThreeCanvas />
    </Suspense>
  );
}
