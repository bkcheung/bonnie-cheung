import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/planet.glb");

export default function Model(){
    const group = useRef<Group>(null);
    const {animations, scene} = useGLTF("/planet.glb");
    const {actions} = useAnimations(animations, scene);
    const scroll = useScroll();

    useEffect(() => {
        if(actions["Rotate"]!==null) actions["Rotate"].play().paused = true;
    }, [actions])

    useFrame(() => {
        if(actions["Rotate"]!==null){
            actions["Rotate"].time = 
            (actions["Rotate"].getClip().duration * scroll.offset);
        }
    })
    return(
        <group ref={group}>
            <primitive  object={scene} scale={[0.02,0.02,0.02]}/>
        </group>
    )
}