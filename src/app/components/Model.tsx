import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

useGLTF.preload('/desk.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/desk.glb');
  return (
    <group ref={group}>
      <primitive object={scene} scale={[ 1  , 1 , 1 ]} />
    </group>
  );
}
