import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react";
import { Group } from "three";

// useGLTF.preload("/planet.glb");
useGLTF.preload("/imac.glb");

export default function Model(){
    const group = useRef<Group>(null);
    // const {animations, scene} = useGLTF("/planet.glb");
    const {animations, scene} = useGLTF("/imac.glb");
    const {actions} = useAnimations(animations, scene);

    // useEffect(() => {
    //     const rotation = actions["Rotate"];
    //     if(rotation!==null){
    //         rotation.play().paused = false;
    //         rotation.timeScale = 0.25;
    //     }
    // }, [actions])

    return(
        <group ref={group}>
            <primitive  object={scene} scale={[0.1, 0.1, 0.1]} />    
        </group>
    )
}