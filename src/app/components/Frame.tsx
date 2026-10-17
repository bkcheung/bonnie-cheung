import { Box, Html, useKTX2 } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { PerspectiveCamera } from 'three';

import { frameData } from '../data';
import { PORTRAIT_Y_OFFSET, getPortraitNavLayout } from '../layout3d';
import { moveToFrame } from '../moveCamera';
import { NavButton, PortraitNav } from './Buttons';

interface FrameProps {
  frame: number;
  active: boolean;
  zoom: number;
  portrait: boolean;
  setActiveFrame: React.Dispatch<React.SetStateAction<number>>;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
function Frame({
  frame,
  active,
  zoom,
  portrait,
  setActiveFrame,
  setOrbitEnabled,
}: FrameProps) {
  const left = frameData[frame].left;
  const right = frameData[frame].right;
  const framePreview = portrait
    ? frameData[frame].portraitPreview
    : frameData[frame].preview;
  const frameContent = portrait
    ? frameData[frame].portraitContent
    : frameData[frame].content;

  const [hovered, setHovered] = useState(false);
  const [zIndexRange, setZIndexRange] = useState([0, -10]);
  const [content, setContent] = useState(framePreview);

  const { camera, size } = useThree();
  const viewOptions = {
    portrait,
    zoom,
    width: size.width,
    height: size.height,
  };

  const props = useKTX2({
    map: '/contact-prev-uastc.ktx2',
  });

  useEffect(() => {
    // portrait frames show an undistorted slice of the landscape artwork that
    // skips the form panel baked into its left half
    const map = props.map;
    if (!map) return;
    map.repeat.set(portrait ? 0.31 : 1, 1);
    map.offset.set(portrait ? 0.58 : 0, 0);
  }, [props.map, portrait]);

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
    moveToFrame(frame, camera, viewOptions, 0.8);
  };
  const leftButton = zoom >= 1.15 ? 'left-mid' : 'left-bottom';
  const rightButton = zoom >= 1.15 ? 'right-mid' : 'right-bottom';
  const [x, y, z] = frameData[frame].position;
  const position: [number, number, number] = portrait
    ? [x, y + PORTRAIT_Y_OFFSET, z]
    : [x, y, z];

  const goLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveFrame(left);
    moveToFrame(left, camera, viewOptions, 0.6);
  };
  const goRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveFrame(right);
    moveToFrame(right, camera, viewOptions, 0.6);
  };

  return (
    <group
      onClick={handleFrameClick}
      position={position}
      rotation={frameData[frame].rotation}
    >
      <Box
        args={portrait ? [55, 85, 0.5] : [210, 110, 0.5]}
        position={[0, 0, -0.5]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered && !active ? '#636E67' : 'black'}
        />
      </Box>
      {frame === 2 && (
        <Box
          args={portrait ? [49, 78.4, 1] : [200, 100, 1]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial {...props} />
        </Box>
      )}
      <Html
        as="div"
        className={`${portrait ? 'w-[250rem] h-[400rem]' : 'w-[502rem] h-[250rem]'} text-[15rem] antialiased`}
        transform
        distanceFactor={portrait ? 4.9 : undefined}
        occlude="blending"
        position={[0, 0, 0]}
        zIndexRange={zIndexRange}
      >
        {content}
      </Html>
      {active && (
        <>
          {portrait ? (
            <PortraitNav
              layout={getPortraitNavLayout(
                camera as PerspectiveCamera,
                size.width,
                size.height
              )}
              leftText={frameData[left].frame}
              rightText={frameData[right].frame}
              leftClick={goLeft}
              rightClick={goRight}
            />
          ) : (
            <>
              <NavButton
                text={frameData[left].frame}
                position={leftButton}
                buttonClick={goLeft}
              />
              <NavButton
                text={frameData[right].frame}
                position={rightButton}
                buttonClick={goRight}
              />
            </>
          )}
        </>
      )}
    </group>
  );
}

export default React.memo(Frame);
