import { Html } from '@react-three/drei';

interface ButtonProps {
  text: string;
  position?: [number, number, number];
}

const Button = ({ text, position = [0, 0, 0] }: ButtonProps) => {
  return (
    <Html
      position={position}
      transform
      style={{
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <button className="flex h-[2.5em] w-[7.4em] items-center justify-center rounded-[1em] text-[4em] text-white hover:bg-[#5d8dc8]/50">
        {text}
      </button>
    </Html>
  );
};

export default Button;
