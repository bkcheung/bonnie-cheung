import { PerspectiveCamera } from 'three';

import { frameData } from './data';

// Viewports taller than this (height / width) get the portrait frames
const PORTRAIT_RATIO = 1.1;

// Screen space at the bottom taken by the footer, in px
const FOOTER_PX = 56;

// Height of the portrait nav buttons, in px
const NAV_BUTTON_PX = 44;

// The visible wall runs from the cove at the top (y ~91) to the baseboard
// (y ~-22.5). Portrait frames are 55 x 85 world units, hung so the gap above
// the frame is 1.5x the gap between frame and nav row, which equals the gap
// below the nav row
const WALL_TOP = 91;
const WALL_BOTTOM = -22.5;
const WALL_HEIGHT = WALL_TOP - WALL_BOTTOM;
const WALL_CENTER = (WALL_TOP + WALL_BOTTOM) / 2;
const PORTRAIT_Y_OFFSET = -3.3;
const PORTRAIT_FRAME_WIDTH = 55;
const PORTRAIT_FRAME_HEIGHT = 85;
const PORTRAIT_MARGIN = 5;
const FRAME_CENTER_Y = 43 + PORTRAIT_Y_OFFSET;

// Half the width of the iMac (plus margin) that the home view has to fit
const HOME_HALF_WIDTH = 28;
const HOME_VIEW: [number, number, number] = [0, 15, 40];

// Landscape keeps the original home view; portrait backs the camera up until
// the iMac fits the screen width
const getHomeView = (
  portrait: boolean,
  camera: PerspectiveCamera,
  width: number,
  height: number
): [number, number, number] => {
  if (!portrait) return HOME_VIEW;
  const tanHalfFov = Math.tan((camera.fov * Math.PI) / 360);
  const z = HOME_HALF_WIDTH / (tanHalfFov * (width / height));
  return [HOME_VIEW[0], HOME_VIEW[1], Math.max(HOME_VIEW[2], z)];
};

const isPortrait = (width: number, height: number) =>
  height / width > PORTRAIT_RATIO;

// Camera distance (and the resulting px per world unit at the wall) that fits
// the whole wall above the footer, and the frame within the screen width
const getPortraitFit = (
  camera: PerspectiveCamera,
  width: number,
  height: number
) => {
  const tanHalfFov = Math.tan((camera.fov * Math.PI) / 360);
  const fitWidth =
    (PORTRAIT_FRAME_WIDTH / 2 + PORTRAIT_MARGIN) /
    (tanHalfFov * (width / height));
  const fitWall =
    (WALL_HEIGHT * height) / (2 * tanHalfFov * (height - FOOTER_PX));
  const distance = Math.max(fitWidth, fitWall);
  const pxPerUnit = height / (2 * distance * tanHalfFov);
  // centre the wall in the space above the footer
  const cameraY = WALL_CENTER - FOOTER_PX / 2 / pxPerUnit;
  return { distance, pxPerUnit, cameraY };
};

// Camera position for a portrait frame, looking straight at it
const getPortraitView = (
  frame: number,
  camera: PerspectiveCamera,
  width: number,
  height: number
): [number, number, number] => {
  const { position, rotation } = frameData[frame];
  const { distance, cameraY } = getPortraitFit(camera, width, height);

  // frames face the room's centre along their local +z axis
  const normalX = Math.sin(rotation[1]);
  const normalZ = Math.cos(rotation[1]);
  return [
    position[0] + normalX * distance,
    cameraY,
    position[2] + normalZ * distance,
  ];
};

// Where the portrait nav row goes on screen once the camera has settled: as
// wide as the frame, vertically centred in the gap between frame and baseboard
// (px, relative to the frame's Html anchor)
const getPortraitNavLayout = (
  camera: PerspectiveCamera,
  width: number,
  height: number
) => {
  const { pxPerUnit, cameraY } = getPortraitFit(camera, width, height);
  const toPx = (worldY: number) => height / 2 - (worldY - cameraY) * pxPerUnit;
  const frameBottom = toPx(FRAME_CENTER_Y - PORTRAIT_FRAME_HEIGHT / 2);
  const baseboard = toPx(WALL_BOTTOM);
  const gap = (baseboard - frameBottom - NAV_BUTTON_PX) / 2;
  // a fullscreen Html is anchored at its group's projected centre, so express
  // the row's position relative to that rather than to the screen
  const anchorTop = toPx(FRAME_CENTER_Y) - height / 2;
  return {
    width: PORTRAIT_FRAME_WIDTH * pxPerUnit,
    top: frameBottom + gap - anchorTop,
    height: NAV_BUTTON_PX,
  };
};

export {
  PORTRAIT_Y_OFFSET,
  getHomeView,
  getPortraitNavLayout,
  getPortraitView,
  isPortrait,
};
