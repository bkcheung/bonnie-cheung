import gsap from 'gsap';

const moveCamera = ([x1, y1, z1, x2, y2, z2]: number[], camera: any) => {
    gsap.to(camera.position, {
      x: x1,
      y: y1,
      z: z1,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(x2, y2, z2);
      },
    });
  };

export default moveCamera;
