'use client'
import Model from "./Model"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, OrbitControls } from "@react-three/drei"
import { TypeAnimation } from 'react-type-animation';
import ImacAnimation from "../ImacAnimation"
import Button from "./Button"

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
        >
            <directionalLight position={[5, 3, 7]} intensity={3} />
            <ambientLight />
            <OrbitControls 
                target={[0, 10, 0]}
                minDistance={10}
                maxDistance={100}
            />
            <ImacAnimation />
            <Suspense fallback={<Loader/>}>
               <Model />
               <Html 
                position={[-13.25, 24.2, 5.1]}
                transform
                occlude
                style={{
                    transform: 'translate(50%, 50%)',
                    transformStyle: 'preserve-3d',
                    WebkitFontSmoothing: 'antialiased',
                    fontSize: "5em",
                    color: "white",
                }}
               >
                <TypeAnimation
                    sequence={["Hi!", 1000, "Hi! I'm Bonnie"]}
                    wrapper="h1"
                    speed={75}
                    cursor={false}
                    preRenderFirstString={true}
                    omitDeletionAnimation={true}
                />
               </Html>
               <Html 
                position={[-13.25,18.25, 5.1]}
                transform
                occlude
                style={{
                    transform: 'translate(50%, 50%)',
                    width: '600px',
                    transformStyle: 'preserve-3d',
                    WebkitFontSmoothing: 'antialiased',
                    fontSize: "5em",
                    lineHeight: "1.1", 
                    color: "white",
                }}
               >
                <TypeAnimation
                    sequence={["", 2000, "I love creating beautiful user experiences!"]}
                    wrapper="h2"
                    speed={75}
                    cursor={false}
                />
               </Html>
               <Button text="About" position={[9.2, 22.6, 5.1]}/>
               <Button text="Experience" position={[9.2, 17.2, 5.1]}/>
               <Button text="Contact" position={[9.2, 11.8, 5.1]}/>
            </Suspense>
        </Canvas>
    )
}