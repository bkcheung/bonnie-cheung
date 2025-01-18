import { Html, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Group } from 'three';
import { KTX2Loader } from 'three-stdlib';

import { frameData, homeView } from '../data';
import moveCamera from '../moveCamera';
import { Button } from './Buttons';

useGLTF.preload('/imac.glb');

interface DeskProps {
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveFrame: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
}

function Desk({ setOrbitEnabled, setActiveFrame, zoom }: DeskProps) {
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
  const { camera } = useThree();

  const textZ = 6.8;
  const about = frameData[0];
  const exp = frameData[1];
  const contact = frameData[2];

  useEffect(() => {
    camera.position.set(30, 50, 50);
    moveCamera(homeView, [0, 0, 0], camera, 1, 0, 1.15);
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
        I'm a frontend engineer who is passionate about creating stunning user
        experiences
      </Html>
      <Button
        text="About"
        position={[9.2, 24.15, textZ]}
        buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          setActiveFrame(0);
          moveCamera(about.view, about.rotation, camera, 0.8, 0.8, zoom);
        }}
      />
      <Button
        text="Portfolio"
        position={[9.2, 18.7, textZ]}
        buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          setActiveFrame(1);
          moveCamera(exp.view, exp.rotation, camera, 0.8, 0.8, zoom);
        }}
      />
      <Button
        text="Contact"
        position={[9.2, 13.35, textZ]}
        buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          setActiveFrame(2);
          moveCamera(contact.view, contact.rotation, camera, 0.8, 0.8, zoom);
        }}
      />
    </group>
  );
}

export default React.memo(Desk);
