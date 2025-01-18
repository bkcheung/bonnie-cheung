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
  const [zoom, setZoom] = useState(1.15);
  const { width, height } = useThree((state) => state.size);

  useEffect(() => {
    const ratio = height / width;
    if (ratio > 4 / 3) {
      setRotate(true);
    } else {
      setRotate(false);
      if (1.1 < ratio && ratio < 4 / 3) setZoom(0.6);
      else if (0.9 < ratio && ratio < 1.1) setZoom(0.75);
      else if (0.7 < ratio && ratio < 0.9) setZoom(0.85);
      else if (0.6 < ratio && ratio < 0.7) setZoom(1.1);
      else if (0 < ratio && ratio < 0.5) setZoom(1.25);
      else setZoom(1.15);
    }
  }, [height, width]);

  const frames = frameData.map((frame, index) => {
    return (
      <Frame
        key={index}
        frame={index}
        active={activeFrame === index}
        setActiveFrame={setActiveFrame}
        setOrbitEnabled={setOrbitEnabled}
        zoom={zoom}
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
      <Desk
        setOrbitEnabled={setOrbitEnabled}
        setActiveFrame={setActiveFrame}
        zoom={zoom}
      />
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
