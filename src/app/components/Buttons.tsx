import { Html } from '@react-three/drei';
import { Vector3 } from 'three';

interface ButtonProps {
  text: string;
  position?: [number, number, number];
  buttonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({
  text,
  position = [0, 0, 0],
  buttonClick,
  className,
}: ButtonProps) => {
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
        className={
          'flex h-[2.5em] w-[7.35em] items-center justify-center rounded-[1.1em] text-[4em] hover:bg-white/30 ' +
          className
        }
        onClick={buttonClick}
      >
        {text}
      </button>
    </Html>
  );
};

interface NavButton {
  text: string;
  direction: string;
  buttonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavButton = ({ text, direction, buttonClick }: NavButton) => {
  let label, pos;
  switch (direction) {
    case 'left':
      label = '← ' + text;
      pos = new Vector3(-95, -70, 1);
      break;
    case 'right':
      label = text + ' →';
      pos = new Vector3(95, -70, 1);
      break;
    default:
      label = text;
      pos = new Vector3(0, -70, 1);
      break;
  }
  return (
    <Html
      position={pos}
      transform
      occlude
      style={{
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <button
        className={
          'flex px-32 py-20 items-center justify-center rounded-[0.75em] text-[8em] hover:bg-white/30 animate-fade-in-long'
        }
        onClick={buttonClick}
      >
        {label}
      </button>
    </Html>
  );
};

export { Button, NavButton };
