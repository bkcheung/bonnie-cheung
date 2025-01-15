import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useRef } from 'react';
import { Group } from 'three';
import { KTX2Loader } from 'three-stdlib';

useGLTF.preload('/gallery.glb');

interface BackgroundProps {
  orbitEnabled: boolean;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveFrame: React.Dispatch<React.SetStateAction<number>>;
}

export default function Background({
  orbitEnabled,
  setOrbitEnabled,
  setActiveFrame,
}: BackgroundProps) {
  const group = useRef<Group>(null);

  const { gl } = useThree();
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath(
    'https://unpkg.com/three@0.168.0/examples/jsm/libs/basis/'
  );
  const { scene } = useGLTF('gallery.glb', undefined, undefined, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
    ktx2Loader.dispose();
  });
  const { camera } = useThree();

  return (
    <group ref={group} position={[0, -45, 0]}>
      <primitive
        object={scene}
        scale={[60, 60, 60]}
        onClick={() => {
          setActiveFrame(-1);
          if (!orbitEnabled) {
            gsap.to(camera.position, {
              x: 0,
              y: 50,
              z: 70,
              duration: 0.8,
              ease: 'power2.inOut',
              onStart: () => {
                gsap.to(camera.rotation, {
                  x: -Math.PI / 12,
                  y: 0,
                  z: 0,
                  duration: 0.8,
                  ease: 'power2.inOut',
                });
              },
              onComplete: () => {
                setOrbitEnabled(true);
              },
            });
            setTimeout(() => {
              gsap.to(camera.position, {
                x: 0,
                y: 15,
                z: 40,
                duration: 0.75,
                ease: 'power2.inOut',
              });
            }, 800);
          }
        }}
      />
    </group>
  );
}
