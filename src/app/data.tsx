type frameType = {
  frame: string;
  view: [number, number, number, number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  left: string;
  right: string;
};

const frameData:frameType[] = [
  {
    frame: 'About',
    view: [-150, 30, 0, -200, 30, 0],
    position: [-250, 42, 0],
    rotation: [0, Math.PI / 2, 0],
    left: 'Contact',
    right: 'Portfolio',
  },
  {
    frame: 'Portfolio',
    view: [0, 30, -150, 0, 30, -200],
    position: [0, 42, -250],
    rotation: [0, 0, 0],
    left: 'About',
    right: 'Contact',
  },
  {
    frame: 'Contact',
    view: [150, 30, 0, 200, 30, 0],
    position: [250, 42, 0], 
    rotation: [0, -Math.PI / 2, 0],
    left: 'Portfolio',
    right: 'About',
  },
];

const homeView = [0, 15, 40, 0, 10, 0];

export {frameData, homeView};

