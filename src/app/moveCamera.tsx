import gsap from 'gsap';

const moveCamera = (
  [x1, y1, z1]: number[],
  [thetax, thetay, thetaz]: number[],
  camera: any,
  transitionDuration: number,
  delay: number = 0
) => {
  gsap.to(camera.position, {
    x: 0,
    y: 50,
    z: 75,
    duration: transitionDuration,
    ease: 'power2.inOut',
    onStart: () => {
      gsap.to(camera.rotation, {
        x: thetax,
        y: thetay,
        z: thetaz,
        duration: transitionDuration,
        ease: 'power2.inOut',
      });
    },
  });
  setTimeout(() => {
    gsap.to(camera.position, {
      x: x1,
      y: y1,
      z: z1,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }, delay * 1000);
};

export default moveCamera;
