import { Html } from '@react-three/drei'

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
          }}>
    <button className=" hover:bg-[#5d8dc8]/50 w-[7.4em] h-[2.5em] flex items-center 
                        justify-center text-[4em] text-white rounded-[1em]">
      {text}
    </button>
    </Html>
  );
};

export default Button;