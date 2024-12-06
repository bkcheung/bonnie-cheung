'use client'
import Model from "./Model"
import { Canvas, useThree } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
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
                target={[0, 1, 0]}
                minDistance={3}
                maxDistance={10}
            />
            <ImacAnimation />
            <Suspense fallback={<Loader/>}>
               <Model />
               <Html 
                position={[-1.35,2.42, 0.51]}
                transform
                occlude
                style={{
                    transform: 'translate(50%, 50%)',
                    width: '60px',
                    transformStyle: 'preserve-3d',
                    WebkitFontSmoothing: 'antialiased',
                    fontSize: "0.5em",
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
                position={[-1.35,1.85, 0.51]}
                transform
                occlude
                style={{
                    transform: 'translate(50%, 50%)',
                    width: '60px',
                    transformStyle: 'preserve-3d',
                    WebkitFontSmoothing: 'antialiased',
                    fontSize: "0.5em",
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
               <Button text="About" position={[0.92, 2.26, 0.51]}/>
               <Button text="Experience" position={[0.92, 1.72, 0.51]}/>
               <Button text="Contact" position={[0.92, 1.18, 0.51]}/>
            </Suspense>
        </Canvas>
    )
}