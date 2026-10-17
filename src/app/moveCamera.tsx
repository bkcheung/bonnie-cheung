import gsap from 'gsap';
import { Camera, PerspectiveCamera } from 'three';

import { frameData } from './data';
import { getPortraitView } from './layout3d';

const moveCamera = (
  [x1, y1, z1]: number[],
  [thetax, thetay, thetaz]: number[],
  camera: any,
  transitionDuration: number,
  delay: number = 0,
  zoom: number = 1
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
      x: x1 * zoom,
      y: y1 * zoom,
      z: z1 * zoom,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }, delay * 1000);
};

interface FrameViewOptions {
  portrait: boolean;
  zoom: number;
  width: number;
  height: number;
}

const moveToFrame = (
  frame: number,
  camera: Camera,
  { portrait, zoom, width, height }: FrameViewOptions,
  transitionDuration: number,
  delay: number = 0.8
) => {
  const { view, rotation } = frameData[frame];
  if (portrait) {
    moveCamera(
      getPortraitView(frame, camera as PerspectiveCamera, width, height),
      rotation,
      camera,
      transitionDuration,
      delay
    );
  } else {
    moveCamera(view, rotation, camera, transitionDuration, delay, zoom);
  }
};

export { moveToFrame };
export default moveCamera;
