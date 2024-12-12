'use client';

import { useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import ImacAnimation from '../ImacAnimation';
import { Background, Desk } from './Model';

function Loader() {
  const { progress } = useProgress();

  return (
    <div className="flex flex-col h-svh items-center justify-center gap-4">
      <div className="text-lg text-gray-600">Loading...</div>
      <div className="w-64 h-3 bg-gray-200 rounded-full">
        <div
          className="h-full bg-lightgreen rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm text-gray-500">{progress.toFixed(0)}% loaded</div>
    </div>
  );
}

function ThreeCanvas() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-10, 30, 10]} intensity={1} />
      <directionalLight position={[-10, 30, -10]} intensity={1} />
      <directionalLight position={[10, 30, 10]} intensity={1} />
      <directionalLight position={[10, 30, -10]} intensity={1} />
      <ambientLight />
      <ImacAnimation />
      <Desk />
      <Background />
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
