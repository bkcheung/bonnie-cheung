'use client'

import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"

function Loader(){
    const {progress} = useProgress();
    return <Html center>{progress.toFixed(1)}% loaded</Html>
}

export default function Scene(){
    return(
        <Canvas gl={{antialias: true}} dpr={[1, 1.5]} className="relative h-svh">
            <directionalLight position={[5, 3, 7]} intensity={4} />
            <Suspense fallback={<Loader/>}>
                <ScrollControls damping={0.2} pages={4}>
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}