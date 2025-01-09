import { ThreeEvent, useThree } from '@react-three/fiber';

import { frameData } from '../data';
import moveCamera from '../moveCamera';
import Frame from './Frame';

interface FramesProps {
  orbitEnabled: boolean;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Frames = ({ orbitEnabled, setOrbitEnabled }: FramesProps) => {
  const { camera } = useThree();
  console.log('All frames rendered')
  const frames = frameData.map((frame, index) => {
    return (
      <Frame
        key={index}
        frame={index}
        left={frame.left}
        right={frame.right}
        clickEnabled={orbitEnabled}
        handleFrameClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setOrbitEnabled(false);
          moveCamera(frame.view, frame.rotation, camera, 0.8, 0.8);
        }}
      >
        {frame.content}
      </Frame>
    );
  });
  return <>{frames}</>;
};

export default Frames;
