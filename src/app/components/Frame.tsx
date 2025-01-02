import { Box, Html, useCursor } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { useState } from 'react';

interface FrameProps {
  position: [number, number, number];
  rotation: [number, number, number];
  clickEnabled: boolean;
  handleFrameClick: (event: ThreeEvent<MouseEvent>) => void;
  children?: React.ReactNode;
}
function Frame({
  position,
  rotation,
  clickEnabled,
  handleFrameClick,
  children,
}: FrameProps) {
  const [hovered, setHovered] = useState(false);

  let zIndexRange = [0, -10];
  if (!clickEnabled) zIndexRange = [10, 0];

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
    </group>
  );
}

export default Frame;
