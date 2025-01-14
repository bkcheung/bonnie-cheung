import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';

import { frameData } from '../data';
import Background from './Background';
import Desk from './Desk';
import Frame from './Frame';

interface ModelsProps {
  orbitEnabled: boolean;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Models = ({ orbitEnabled, setOrbitEnabled }: ModelsProps) => {
  const [activeFrame, setActiveFrame] = useState(-1);
  const [rotate, setRotate] = useState(false);
  const { width, height } = useThree((state) => state.size);

  useEffect(() => {
    if (height / width > 1.3) {
      setRotate(true);
    } else setRotate(false);
  }, [height, width]);

  const frames = frameData.map((frame, index) => {
    return (
      <Frame
        key={index}
        frame={index}
        active={activeFrame === index}
        setActiveFrame={setActiveFrame}
        setOrbitEnabled={setOrbitEnabled}
      />
    );
  });

  const models = rotate ? (
    <Html
      position={[0, 10, 0]}
      style={{
        width: '100%',
        height: '100%',
        transform: 'translate(50%, 50%)',
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div className="flex w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 bg-white/80 items-center justify-center text-3xl text-center p-20">
        Please rotate your screen for the best experience!
      </div>
    </Html>
  ) : (
    <>
      <Desk setOrbitEnabled={setOrbitEnabled} setActiveFrame={setActiveFrame} />
      {frames}
    </>
  );
  return (
    <group>
      {models}
      <Background
        orbitEnabled={orbitEnabled}
        setOrbitEnabled={setOrbitEnabled}
        setActiveFrame={setActiveFrame}
      />
    </group>
  );
};

export default Models;
