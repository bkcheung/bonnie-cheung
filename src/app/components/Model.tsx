import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/konbini.glb");

export default function Model(){
    const group = useRef<Group>(null);
    const {animations, scene} = useGLTF("/konbini.glb");
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
            <primitive  object={scene} scale={[0.01,0.01,0.01]}/>
        </group>
    )
}