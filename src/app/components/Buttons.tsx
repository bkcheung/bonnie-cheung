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

interface PortraitNavProps {
  layout: { width: number; top: number; height: number };
  leftText: string;
  rightText: string;
  leftClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  rightClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Portrait frames are too narrow for 3D buttons beside or below them, so the
// nav is a plain screen-space row just above the footer, as wide as the frame
const PortraitNav = ({
  layout,
  leftText,
  rightText,
  leftClick,
  rightClick,
}: PortraitNavProps) => {
  const buttonClass =
    'pointer-events-auto min-w-28 rounded-xl bg-white px-5 text-gray-700 shadow-xl hover:bg-gray-100';
  return (
    <Html fullscreen pointerEvents="none">
      <div
        className="pointer-events-none absolute inset-x-0 mx-auto flex animate-fade-in-long justify-between"
        style={{ width: layout.width, top: layout.top }}
      >
        <button
          className={buttonClass}
          onClick={leftClick}
          style={{ height: layout.height }}
        >
          {leftText}
        </button>
        <button
          className={buttonClass}
          onClick={rightClick}
          style={{ height: layout.height }}
        >
          {rightText}
        </button>
      </div>
    </Html>
  );
};

export { Button, NavButton, PortraitNav };
