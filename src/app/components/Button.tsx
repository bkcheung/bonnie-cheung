import { Html } from '@react-three/drei';

interface ButtonProps {
  text: string;
  position?: [number, number, number];
  buttonClick?: () => void;
}

const Button = ({ text, position = [0, 0, 0], buttonClick }: ButtonProps) => {
  return (
    <Html
      position={position}
      transform
      occlude
      style={{
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <button
        className="flex h-[2.5em] w-[7.4em] items-center justify-center rounded-[1em] text-[4em] text-white hover:bg-[#5d8dc8]/50"
        onClick={buttonClick}
      >
        {text}
      </button>
    </Html>
  );
};

export default Button;
