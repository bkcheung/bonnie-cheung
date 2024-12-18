import { Html } from '@react-three/drei';

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

export default Button;
