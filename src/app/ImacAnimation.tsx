'use client'
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import gsap from "gsap"

const ImacAnimation = () =>{
    const { camera } = useThree();
    
    useEffect(() => {
      // Set initial camera position (zoomed out)
      camera.position.set(5, 5, 10)
      
      // Create GSAP animation
      gsap.to(camera.position, {
        x: 0,
        y: 1.25,
        z: 4,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(0, 0, 0);
        }
      })
    }, [camera])

    return null;
}

export default ImacAnimation