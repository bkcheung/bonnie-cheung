import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/planet.glb");

export default function Model(){
    const group = useRef<Group>(null);
    const {animations, scene} = useGLTF("/planet.glb");
    const {actions} = useAnimations(animations, scene);
    // const scroll = useScroll();

    useEffect(() => {
        const rotation = actions["Rotate"];
        if(rotation!==null){
            rotation.play();
            rotation.timeScale = 0.25;
        }
    }, [actions])

    return(
        <group ref={group}>
            <primitive  object={scene} scale={[0.02,0.02,0.02]}/>
        </group>
    )
}