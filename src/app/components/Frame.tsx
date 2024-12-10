import { Box, Html } from '@react-three/drei';

interface FrameProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

function Frame({
  position,
  rotation,
  width = 20,
  height = 30,
  children,
}: FrameProps) {
  return (
    <group rotation={rotation} position={position}>
      <Box args={[width, height, 0.5]}>
        <meshStandardMaterial color="white" opacity={0.75} transparent={true}/>
      </Box>
      <Box args={[width + 10, height + 10, 1]} position={(position[2] = -0.5)}>
        <meshStandardMaterial color="black" opacity={0.75} transparent={true}/>
      </Box>
      <Html
        transform
        occlude
        position={position[2] = 0.5}
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
  );
}

export default Frame;
