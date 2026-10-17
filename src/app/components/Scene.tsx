'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useCallback, useEffect, useState } from 'react';

import IntroHint from './IntroHint';
import Lighting from './Lighting';
import Loader from './Loader';
import Models from './Models';

function ThreeCanvas({
  onFrameActiveChange,
  onUserMove,
}: {
  onFrameActiveChange: (active: boolean) => void;
  onUserMove: () => void;
}) {
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
        onStart={onUserMove}
        target={[0, 10, 0]}
        minDistance={10}
        maxDistance={150}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      <Models
        orbitEnabled={orbitEnabled}
        setOrbitEnabled={setOrbitEnabled}
        onFrameActiveChange={onFrameActiveChange}
      />
    </Canvas>
  );
}

export default function Scene() {
  const [isLoading, setIsLoading] = useState(true);
  // the hints stay up until the user first leaves the opening home view
  const [hintDismissed, setHintDismissed] = useState(false);
  const dismissHint = useCallback(() => setHintDismissed(true), []);
  const handleFrameActive = useCallback((active: boolean) => {
    if (active) setHintDismissed(true);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <ThreeCanvas
        onFrameActiveChange={handleFrameActive}
        onUserMove={dismissHint}
      />
      <IntroHint dismissed={hintDismissed} />
    </Suspense>
  );
}
