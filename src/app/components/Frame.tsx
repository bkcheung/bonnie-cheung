import { Box, Html } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { frameData } from '../data';
import moveCamera from '../moveCamera';
import { NavButton } from './Buttons';

interface FrameProps {
  frame: number;
  left: number;
  right: number;
  clickEnabled: boolean;
  handleFrameClick: (event: ThreeEvent<MouseEvent>) => void;
  children?: React.ReactNode;
}
function Frame({
  frame,
  left,
  right,
  clickEnabled,
  handleFrameClick,
  children,
}: FrameProps) {
  console.log('Frame rendered');
  const [hovered, setHovered] = useState(false);
  const [zIndexRange, setZIndexRange] = useState([0, -10]);
  const { camera } = useThree();

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

  return (
    <group
      rotation={frameData[frame].rotation}
      position={frameData[frame].position}
      onClick={handleFrameClick}
    >
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
        <group>
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
        </group>
      )}
    </group>
  );
}

export default React.memo(Frame);
