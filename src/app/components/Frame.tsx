import { Box, Html } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';

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
  let zIndexRange = [0, -10];
  if (!clickEnabled) zIndexRange = [10, 0];
  return (
    <group rotation={rotation} position={position} onClick={handleFrameClick}>
      <group>
        <Box args={[200, 100, 0.5]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="white"
            opacity={0.75}
            transparent={true}
          />
        </Box>
        <Box args={[210, 110, 1]} position={[0, 0, -0.5]}>
          <meshStandardMaterial
            color="black"
            opacity={0.75}
            transparent={true}
          />
        </Box>
        <Html
          as="div"
          className="frame-content"
          transform
          occlude="blending"
          position={[0, 0, 0.5]}
          zIndexRange={zIndexRange}
          style={{
            fontSize: '15rem',
          }}
        >
          {children}
        </Html>
      </group>
    </group>
  );
}

export default Frame;
