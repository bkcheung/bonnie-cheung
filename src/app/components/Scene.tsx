'use client'
import Model from "./Model"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html, OrbitControls } from "@react-three/drei"

function Loader(){
    const {progress} = useProgress();
    return <Html center>{progress.toFixed(1)}% loaded</Html>
}

export default function Scene(){
    return(
        <Canvas gl={{antialias: true}} dpr={[1, 1.5]} className="bg-white relative h-svh">
            <directionalLight position={[5, 3, 7]} intensity={3} />
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={<Loader/>}>
               <Model />
               <Html 
                position={[-0.65,2.25, 0.51]}
                className="text-[0.5em]"
                transform
                occlude
               >
                <div> Hi! I'm Bonnie</div>
               </Html>
            </Suspense>
        </Canvas>
    )
}