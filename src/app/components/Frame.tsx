import { Box, Html } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { frameData } from '../data';
import moveCamera from '../moveCamera';
import { NavButton } from './Buttons';

interface FrameProps {
  frame: number;
  active: boolean;
  setActiveFrame: React.Dispatch<React.SetStateAction<number>>;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
function Frame({ frame, active, setActiveFrame, setOrbitEnabled }: FrameProps) {
  const left = frameData[frame].left;
  const right = frameData[frame].right;
  const framePreview = frameData[frame].preview;
  const frameContent = frameData[frame].content;

  const [hovered, setHovered] = useState(false);
  const [zIndexRange, setZIndexRange] = useState([0, -10]);
  const [content, setContent] = useState(framePreview);

  const { camera } = useThree();

  useEffect(() => {
    document.body.style.cursor = hovered && !active ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, active]);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setContent(frameContent);
        setZIndexRange([10, 0]);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setContent(framePreview);
      setZIndexRange([0, -10]);
    }
  }, [active, frameContent, framePreview]);

  const handleFrameClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setOrbitEnabled(false);
    setActiveFrame(frame);
    moveCamera(
      frameData[frame].view,
      frameData[frame].rotation,
      camera,
      0.8,
      0.8
    );
  };

  return (
    <group
      onClick={handleFrameClick}
      position={frameData[frame].position}
      rotation={frameData[frame].rotation}
    >
      <Box
        args={[210, 110, 1]}
        position={[0, 0, -0.5]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered && !active ? '#636E67' : 'black'}
        />
      </Box>
      <Html
        as="div"
        className="w-[500rem] h-[250rem] text-[15rem] antialiased"
        transform
        occlude="blending"
        position={[0, 0, 0.5]}
        zIndexRange={zIndexRange}
      >
        {content}
      </Html>
      <Html
        as="div"
        className="w-[510rem] h-[260rem]"
        transform
        position={[0, 0, 0.25]}
        zIndexRange={[-10, -20]}
      >
        <div className="w-full h-full bg-[url(/cliff-walk.jpg)] bg-cover bg-center bg-no-repeat" />
      </Html>
      {active && (
        <>
          <NavButton
            text={frameData[left].frame}
            direction="left"
            buttonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setActiveFrame(left);
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
              setActiveFrame(right);
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

export default React.memo(Frame);
