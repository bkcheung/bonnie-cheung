import { Box, Html } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { useState } from 'react';
import Button from './Button';
import {frameData} from '../data';

interface FrameProps {
  frame: string;
  clickEnabled: boolean;
  handleFrameClick: (event: ThreeEvent<MouseEvent>) => void;
  children?: React.ReactNode;
}
function Frame({
  frame,
  clickEnabled,
  handleFrameClick,
  children,
}: FrameProps) {
  const [hovered, setHovered] = useState(false);

  let zIndexRange = [0, -10];
  if (!clickEnabled) zIndexRange = [10, 0];

  let position, rotation, left, right;

  switch(frame) {
    case 'About':
      position = frameData[0].position;
      rotation = frameData[0].rotation;
      left = frameData[0].left;
      right = frameData[0].right;
      break;
    case 'Portfolio':
      position = frameData[1].position;
      rotation = frameData[1].rotation;
      left = frameData[1].left;
      right = frameData[1].right;
      break;
    case 'Contact':
      position = frameData[2].position;
      rotation = frameData[2].rotation;
      left = frameData[2].left;
      right = frameData[2].right;
      break;
    default:
      position = frameData[0].position;
      rotation = frameData[0].rotation;
      left = frameData[0].left;
      right = frameData[0].right;
      break;
  }

  return (
      <group rotation={rotation} position={position} onClick={handleFrameClick}>
        <group
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <Box args={[200, 100, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="white"
              opacity={0.75}
              transparent={true}
            />
          </Box>
          <Box args={[210, 110, 1]} position={[0, 0, -0.5]}>
            <meshStandardMaterial
              color={hovered && clickEnabled ? '#636E67' : 'black'}
              opacity={0.75}
              transparent={true}
            />
          </Box>
          <Html
            as="div"
            className="frame-content w-[500rem] h-[250rem] text-[15rem]"
            transform
            occlude="blending"
            position={[0, 0, 0.5]}
            zIndexRange={zIndexRange}
          >
            {children}
          </Html>
        </group>
        {/* <Button text={left} position={[-70,-70,1]} buttonClick={()=>console.log('button')} className='animate-fade-in' />  */}
        {/* <Button text={right} position={[70,-70,1]} buttonClick={()=>console.log('button')} className='animate-fade-in' />  */}
      </group>
    
  );
}

export default Frame;
