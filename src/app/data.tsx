import {
  AboutContent,
  AboutPreview,
  ContactContent,
  ContactPreview,
  PortfolioContent,
  PortfolioPreview,
} from './components/Content';

type frameType = {
  frame: string;
  view: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  left: number;
  right: number;
  preview: React.ReactNode;
  content: React.ReactNode;
};

const frameData: frameType[] = [
  {
    frame: 'About',
    view: [-150, 30, 0],
    position: [-270, 43, 0],
    rotation: [0, Math.PI / 2, 0],
    left: 2,
    right: 1,
    preview: <AboutPreview />,
    content: <AboutContent />,
  },
  {
    frame: 'Portfolio',
    view: [0, 30, -150],
    position: [0, 43, -270],
    rotation: [0, 0, 0],
    left: 0,
    right: 2,
    preview: <PortfolioPreview />,
    content: <PortfolioContent />,
  },
  {
    frame: 'Contact',
    view: [150, 30, 0],
    position: [270, 43, 0],
    rotation: [0, -Math.PI / 2, 0],
    left: 1,
    right: 0,
    preview: <ContactPreview />,
    content: <ContactContent />,
  },
];

const homeView = [0, 15, 40];

export { frameData, homeView };
