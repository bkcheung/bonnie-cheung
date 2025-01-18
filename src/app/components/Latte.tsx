import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React from 'react';
import { KTX2Loader } from 'three-stdlib';

useGLTF.preload('/latte.glb');

const Latte = () => {
  const { gl } = useThree();
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath(
    'https://unpkg.com/three@0.168.0/examples/jsm/libs/basis/'
  );
  const { scene } = useGLTF('latte.glb', undefined, undefined, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
    ktx2Loader.dispose();
  });
  return (
    <primitive
      title="latte"
      object={scene}
      scale={[100, 100, 100]}
      position={[-22, 2, 8]}
    />
  );
};

export default React.memo(Latte);
