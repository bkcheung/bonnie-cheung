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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "5.9em",
            height: "2em",
            transformStyle: 'preserve-3d',
            WebkitFontSmoothing: 'antialiased',
            fontSize: "0.5em",
            color: "white"}}>
    <button className=" hover:bg-[#5d8dc8]/50 w-full h-full rounded-[1.5em] text-[0.5em]">
      {text}
    </button>
    </Html>
  );
};

export default Button;