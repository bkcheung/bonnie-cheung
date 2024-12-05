'use client'
import Model from "./Model"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, OrbitControls } from "@react-three/drei"
import { TypeAnimation } from 'react-type-animation';


function Loader(){
    const {progress} = useProgress();
    return <Html center>{progress.toFixed(1)}% loaded</Html>
}

export default function Scene(){
    return(
        <Canvas 
            gl={{antialias: true}} 
            dpr={[1, 1.5]} 
            className="bg-white relative h-svh"
            camera={{ 
                position: [-2, 5, 8], // Adjust these values for desired camera position
                fov: 45
            }}
        >
            <directionalLight position={[5, 3, 7]} intensity={3} />
            <ambientLight />
            <OrbitControls 
                enableZoom={true}
                enablePan={true}
                target={[0, 0, 0]}
                minDistance={5}
                maxDistance={20}
            />
            <Suspense fallback={<Loader/>}>
               <Model />
               <Html 
                position={[-0.65,2.25, 0.51]}
                transform
                occlude
                style={{
                    transformStyle: 'preserve-3d',
                    WebkitFontSmoothing: 'antialiased'
                }}
               >
                <TypeAnimation
                    sequence={["Hi!", 750, "Hi! I'm Bonnie"]}
                    wrapper="div"
                    speed={50}
                    style={{
                        fontSize: "0.5em",
                        color: "white",
                        textShadow: "0 0 0.1em black"
                    }}
                    cursor={false}
                    preRenderFirstString={true}
                    omitDeletionAnimation={true}
                />
               </Html>
               <Html 
                position={[-1.35,1.85, 0.51]}
                transform
                occlude
                style={{
                    transform: 'translate(50%, 50%)',
                    width: '60px',
                    transformStyle: 'preserve-3d',
                    WebkitFontSmoothing: 'antialiased'
                }}
               >
                <TypeAnimation
                    sequence={["", 1700, "I love creating beautiful user experiences!"]}
                    wrapper="div"
                    speed={75}
                    style={{
                        fontSize: "0.05em",
                        lineHeight: "1.1", 
                        color: "white",
                        textShadow: "0 0 0.1em black"
                    }}
                    cursor={false}
                />
               </Html>
            </Suspense>
        </Canvas>
    )
}