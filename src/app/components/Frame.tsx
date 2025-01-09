import { Box, Html } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { useEffect, useState } from 'react';

import { frameData } from '../data';
import moveCamera from '../moveCamera';
import { NavButton } from './Buttons';

interface FrameProps {
  frame: string;
  clickEnabled: boolean;
  handleFrameClick: (event: ThreeEvent<MouseEvent>) => void;
  children?: React.ReactNode;
  camera: any;
}
function Frame({
  frame,
  clickEnabled,
  handleFrameClick,
  children,
  camera,
}: FrameProps) {
  const [hovered, setHovered] = useState(false);
  const [zIndexRange, setZIndexRange] = useState([0, -10]);

  useEffect(() => {
    document.body.style.cursor = hovered && clickEnabled ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, clickEnabled]);

  useEffect(() => {
    if (!clickEnabled) {
      const timer = setTimeout(() => {
        setZIndexRange([10, 0]);
      }, 800);
      return () => clearTimeout(timer);
    } else setZIndexRange([0, -10]);
  }, [clickEnabled]);

  let position, rotation, left, right;

  switch (frame) {
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
        <Box args={[210, 110, 1]} position={[0, 0, -0.5]}>
          <meshStandardMaterial
            color={hovered && clickEnabled ? '#636E67' : 'black'}
            opacity={0.75}
            transparent={true}
          />
        </Box>
        <Html
          as="div"
          className="w-[500rem] h-[250rem] text-[15rem]"
          transform
          occlude="blending"
          position={[0, 0, 0.5]}
          zIndexRange={zIndexRange}
        >
          {children}
        </Html>
      </group>
      {!clickEnabled && (
        <>
          <NavButton
            text={frameData[left].frame}
            direction="left"
            buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              moveCamera(
                frameData[left].view,
                frameData[left].rotation,
                camera,
                0.6,
                0.8
              );
            }}
          />
          <Html as="div" transform position={[0, -70, 1]}>
            <div
              title="Home"
              className="w-[400rem] h-[65rem] hover:cursor-pointer"
            />
          </Html>
          <NavButton
            text={frameData[right].frame}
            direction="right"
            buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              moveCamera(
                frameData[right].view,
                frameData[right].rotation,
                camera,
                0.6,
                0.8
              );
            }}
          />
        </>
      )}
    </group>
  );
}

export default Frame;
