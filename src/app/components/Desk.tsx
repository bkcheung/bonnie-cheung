import { Html, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Group } from 'three';
import { KTX2Loader } from 'three-stdlib';

import moveCamera, { moveToFrame } from '../moveCamera';
import { Button } from './Buttons';

useGLTF.preload('/imac.glb');

interface DeskProps {
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveFrame: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
  portrait: boolean;
  homeView: [number, number, number];
}

function Desk({
  setOrbitEnabled,
  setActiveFrame,
  zoom,
  portrait,
  homeView: home,
}: DeskProps) {
  const group = useRef<Group>(null);
  const { gl } = useThree();
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath(
    'https://unpkg.com/three@0.168.0/examples/jsm/libs/basis/'
  );
  const { scene } = useGLTF('imac.glb', undefined, undefined, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
    ktx2Loader.dispose();
  });
  const { camera, size } = useThree();
  const viewOptions = {
    portrait,
    zoom,
    width: size.width,
    height: size.height,
  };

  const textZ = 6.8;

  // the opening camera move only uses the layout at first load
  const initial = useRef({ home, portrait });
  useEffect(() => {
    camera.position.set(30, 50, 50);
    const { home, portrait } = initial.current;
    moveCamera(home, [0, 0, 0], camera, 1, 0, portrait ? 1 : 1.15);
  }, [camera]);

  return (
    <group>
      <group ref={group}>
        <primitive
          object={scene}
          scale={[1, 1, 1]}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
        />
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
        Hi! I'm Bonnie
      </Html>
      <Html
        position={[-14, 20.75, textZ]}
        transform
        occlude
        style={{
          transform: 'translate(50%, 50%)',
          width: '10.5em',
          transformStyle: 'preserve-3d',
          WebkitFontSmoothing: 'antialiased',
          fontSize: '3.5em',
          textAlign: 'center',
        }}
      >
        I'm a fullstack engineer who is passionate about creating stunning user
        experiences
      </Html>
      <Button
        text="About"
        position={[9.2, 24.15, textZ]}
        buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          setActiveFrame(0);
          moveToFrame(0, camera, viewOptions, 0.8);
        }}
      />
      <Button
        text="Portfolio"
        position={[9.2, 18.7, textZ]}
        buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          setActiveFrame(1);
          moveToFrame(1, camera, viewOptions, 0.8);
        }}
      />
      <Button
        text="Contact"
        position={[9.2, 13.35, textZ]}
        buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          setActiveFrame(2);
          moveToFrame(2, camera, viewOptions, 0.8);
        }}
      />
    </group>
  );
}

export default React.memo(Desk);
