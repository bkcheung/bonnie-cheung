import { Box, Html } from '@react-three/drei';

interface FrameProps {
  position: [number, number, number];
  rotation: [number, number, number];
  handleFrameClick: () => void;
  children?: React.ReactNode;
}

function Frame({ position, rotation, handleFrameClick, children }: FrameProps) {
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
          zIndexRange={[0, -10]}
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
