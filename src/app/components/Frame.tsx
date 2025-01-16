import { Box, Html, useKTX2, useTexture } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { frameData } from '../data';
import moveCamera from '../moveCamera';
import { NavButton } from './Buttons';

interface FrameProps {
  frame: number;
  active: boolean;
  zoom: number;
  setActiveFrame: React.Dispatch<React.SetStateAction<number>>;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
function Frame({
  frame,
  active,
  zoom,
  setActiveFrame,
  setOrbitEnabled,
}: FrameProps) {
  const left = frameData[frame].left;
  const right = frameData[frame].right;
  const framePreview = frameData[frame].preview;
  const frameContent = frameData[frame].content;

  const [hovered, setHovered] = useState(false);
  const [zIndexRange, setZIndexRange] = useState([0, -10]);
  const [content, setContent] = useState(framePreview);

  const { camera } = useThree();

  const props = useKTX2({
    map: '/contact-prev-uastc.ktx2',
  });

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
      0.8,
      zoom
    );
  };

  return (
    <group
      onClick={handleFrameClick}
      position={frameData[frame].position}
      rotation={frameData[frame].rotation}
    >
      <Box
        args={[210, 110, 0.5]}
        position={[0, 0, -0.5]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered && !active ? '#636E67' : 'black'}
        />
      </Box>
      {frame === 2 && (
        <Box args={[200, 100, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial {...props} />
        </Box>
      )}
      <Html
        as="div"
        className="w-[502rem] h-[250rem] text-[15rem] antialiased"
        transform
        occlude="blending"
        position={[0, 0, 0]}
        zIndexRange={zIndexRange}
      >
        {content}
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
                0.8,
                zoom
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
                0.8,
                zoom
              );
            }}
          />
        </>
      )}
    </group>
  );
}

export default React.memo(Frame);
