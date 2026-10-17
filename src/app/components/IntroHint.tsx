'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getIntroHintTop } from '../layout3d';

// let the opening camera move finish before the hints start
const START_DELAY_MS = 1500;
const FADE_MS = 1200;
const HOLD_MS = 5000;
const GAP_MS = 600;

interface IntroHintProps {
  // true once the user has moved off the first home view
  dismissed: boolean;
}

const IntroHint = ({ dismissed }: IntroHintProps) => {
  const [touch, setTouch] = useState(false);
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [top, setTop] = useState<number | null>(null);

  useEffect(() => {
    setTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  // vertical position: centred between the desk and the footer
  useEffect(() => {
    const place = () => {
      const footer = document.querySelector('footer');
      setTop(
        getIntroHintTop(
          window.innerWidth,
          window.innerHeight,
          footer?.offsetHeight ?? 48
        )
      );
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, []);

  const hints = [
    {
      icon: '/360.png',
      text: touch
        ? 'Drag to rotate the view'
        : 'Click & drag to rotate the view',
    },
    {
      icon: '/zoom.png',
      text: touch ? 'Pinch to zoom in and out' : 'Scroll to zoom in and out',
    },
    {
      icon: null,
      text: touch
        ? 'Tap About, Portfolio or Contact to explore'
        : 'Click About, Portfolio or Contact to explore',
    },
  ];

  // fade in, hold, fade out, then on to the next hint, until dismissed
  useEffect(() => {
    if (dismissed) {
      setShown(false);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = (i: number) => {
      setIndex(i % hints.length);
      setShown(true);
      timers.push(
        setTimeout(() => {
          setShown(false);
          timers.push(setTimeout(() => run(i + 1), FADE_MS + GAP_MS));
        }, FADE_MS + HOLD_MS)
      );
    };
    timers.push(setTimeout(() => run(0), START_DELAY_MS));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dismissed]);

  if (top === null) return null;

  return (
    <div
      aria-hidden={!shown}
      className="pointer-events-none fixed inset-x-0 grid -translate-y-1/2 justify-items-center px-4"
      style={{ top }}
    >
      {hints.map((hint, i) => (
        <div
          key={hint.text}
          style={{ transitionDuration: `${FADE_MS}ms` }}
          className={`col-start-1 row-start-1 flex items-center text-base font-medium tracking-wide text-white transition-opacity [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] sm:text-lg ${
            shown && i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {hint.icon && (
            <Image
              src={hint.icon}
              alt=""
              width={30}
              height={30}
              priority
              className="mr-2 h-[1.2em] w-[1.2em] invert drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            />
          )}
          {hint.text}
        </div>
      ))}
    </div>
  );
};

export default IntroHint;
