import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

useGLTF.preload('/imac.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/imac.glb');
  return (
    <group ref={group}>
      <primitive object={scene} scale={[0.1, 0.1, 0.1]} />
    </group>
  );
}
