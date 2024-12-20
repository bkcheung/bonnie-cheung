import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useRef } from 'react';
import { Group } from 'three';

interface BackgroundProps {
  orbitEnabled: boolean;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Background({
  orbitEnabled,
  setOrbitEnabled,
}: BackgroundProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/gallery.glb');
  const { camera } = useThree();

  return (
    <group ref={group} position={[0, -45, 0]}>
      <primitive
        object={scene}
        scale={[60, 60, 60]}
        onClick={() => {
          if (!orbitEnabled) {
            gsap.to(camera.position, {
              x: 0,
              y: 15,
              z: 40,
              duration: 0.75,
              ease: 'ease-in-out',
            });
            setTimeout(() => {
              camera.lookAt(0, 10, 0);
              setOrbitEnabled(true);
            }, 500);
          }
        }}
      />
    </group>
  );
}
