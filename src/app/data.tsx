import {
  AboutContent,
  AboutPreview,
  ContactContent,
  ContactPreview,
  PortfolioContent,
  PortfolioPreview,
} from './components/Content';
import {
  AboutPortrait,
  ContactPortrait,
  PortfolioPortrait,
} from './components/PortraitContent';

type frameType = {
  frame: string;
  view: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  left: number;
  right: number;
  preview: React.ReactNode;
  content: React.ReactNode;
  portraitPreview: React.ReactNode;
  portraitContent: React.ReactNode;
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
    portraitPreview: <AboutPortrait />,
    portraitContent: <AboutPortrait />,
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
    portraitPreview: <PortfolioPortrait />,
    portraitContent: <PortfolioPortrait />,
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
    portraitPreview: <ContactPreview />,
    portraitContent: <ContactPortrait />,
  },
];

const homeView = [0, 15, 40];

export { frameData, homeView };
