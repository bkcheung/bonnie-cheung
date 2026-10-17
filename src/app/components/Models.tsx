import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { PerspectiveCamera } from 'three';

import { frameData } from '../data';
import { getHomeView, isPortrait } from '../layout3d';
import moveCamera, { moveToFrame } from '../moveCamera';
import Background from './Background';
import Desk from './Desk';
import Frame from './Frame';

interface ModelsProps {
  orbitEnabled: boolean;
  setOrbitEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Models = ({ orbitEnabled, setOrbitEnabled }: ModelsProps) => {
  const [activeFrame, setActiveFrame] = useState(-1);
  const [zoom, setZoom] = useState(1.15);
  const { width, height } = useThree((state) => state.size);
  const camera = useThree((state) => state.camera);
  const portrait = isPortrait(width, height);

  const activeFrameRef = useRef(activeFrame);
  activeFrameRef.current = activeFrame;

  useEffect(() => {
    const ratio = height / width;
    if (portrait) return;
    if (1.1 < ratio && ratio < 4 / 3) setZoom(0.6);
    else if (0.9 < ratio && ratio < 1.1) setZoom(0.75);
    else if (0.7 < ratio && ratio < 0.9) setZoom(0.85);
    else if (0.55 < ratio && ratio < 0.7) setZoom(1.1);
    else if (0 < ratio && ratio < 0.5) setZoom(1.25);
    else setZoom(1.15);
  }, [height, width, portrait]);

  const homeView = getHomeView(
    portrait,
    camera as PerspectiveCamera,
    width,
    height
  );
  const homeViewRef = useRef(homeView);
  homeViewRef.current = homeView;

  // swap between the landscape and portrait home views when the layout flips
  const layoutMounted = useRef(false);
  useEffect(() => {
    if (!layoutMounted.current) {
      layoutMounted.current = true;
      return;
    }
    if (activeFrameRef.current === -1) {
      moveCamera(homeViewRef.current, [0, 0, 0], camera, 0.5, 0);
    }
  }, [portrait, camera]);

  // re-fit the camera if the viewport changes while a frame is open
  useEffect(() => {
    if (activeFrameRef.current === -1) return;
    moveToFrame(
      activeFrameRef.current,
      camera,
      { portrait, zoom, width, height },
      0.5,
      0
    );
  }, [portrait, zoom, width, height, camera]);

  const frames = frameData.map((frame, index) => {
    return (
      <Frame
        key={index}
        frame={index}
        active={activeFrame === index}
        setActiveFrame={setActiveFrame}
        setOrbitEnabled={setOrbitEnabled}
        zoom={zoom}
        portrait={portrait}
      />
    );
  });

  const models = (
    <>
      <Desk
        setOrbitEnabled={setOrbitEnabled}
        setActiveFrame={setActiveFrame}
        zoom={zoom}
        portrait={portrait}
        homeView={homeView}
      />
      {frames}
    </>
  );
  return (
    <group>
      {models}
      <Background
        orbitEnabled={orbitEnabled}
        setOrbitEnabled={setOrbitEnabled}
        setActiveFrame={setActiveFrame}
        homeView={portrait ? homeView : [0, 15, 40]}
      />
    </group>
  );
};

export default Models;
