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
          transform
          occlude
          position={[0, 0, 0.5]}
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15em',
          }}
        >
          {children}
        </Html>
      </group>
    </group>
  );
}

export default Frame;
