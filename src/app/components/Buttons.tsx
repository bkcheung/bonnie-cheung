import { Html } from '@react-three/drei';
import { Vector3 } from 'three';

interface ButtonProps {
  text: string;
  position?: [number, number, number];
  buttonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
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
        className="flex h-[2.5em] w-[7.35em] items-center justify-center rounded-[1.1em] text-[4em] hover:bg-white/30 animate-fade-in"
        onClick={buttonClick}
      >
        {text}
      </button>
    </Html>
  );
};

interface NavButton {
  text: string;
  position: string;
  buttonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavButton = ({ text, position, buttonClick }: NavButton) => {
  let label, pos;
  switch (position) {
    case 'left-bottom':
      label = text;
      pos = new Vector3(-95, -62, 1);
      break;
    case 'left-mid':
      label = text;
      pos = new Vector3(-120, 0, 1);
      break;
    case 'right-bottom':
      label = text;
      pos = new Vector3(95, -62, 1);
      break;
    case 'right-mid':
      label = text;
      pos = new Vector3(120, 0, 1);
      break;
    default:
      label = text;
      pos = new Vector3(0, -60, 1);
      break;
  }
  return (
    <Html
      position={pos}
      transform
      style={{
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <button
        className="px-28 py-16 rounded-[0.75em] text-[10rem] text-gray-700 shadow-2xl bg-white/30 hover:bg-white/70 animate-fade-in-long"
        onClick={buttonClick}
      >
        {label}
      </button>
    </Html>
  );
};

export { Button, NavButton };
