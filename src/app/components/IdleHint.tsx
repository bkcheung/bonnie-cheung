'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getIdleHintTop } from '../layout3d';

const IDLE_MS = 3000;
const FADE_MS = 1200;
const HOLD_MS = 5000;
const GAP_MS = 600;
const ACTIVITY_EVENTS = [
  'pointerdown',
  'pointermove',
  'wheel',
  'touchstart',
  'keydown',
] as const;

interface IdleHintProps {
  // true while a frame is open, when the hints would be irrelevant
  suppressed: boolean;
}

const IdleHint = ({ suppressed }: IdleHintProps) => {
  const [idle, setIdle] = useState(false);
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
        getIdleHintTop(
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

  // idle once there has been no input for a while; any input hides the hint
  useEffect(() => {
    if (suppressed) {
      setIdle(false);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const restart = () => {
      setIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), IDLE_MS);
    };
    restart();
    ACTIVITY_EVENTS.forEach((e) =>
      window.addEventListener(e, restart, { passive: true })
    );
    return () => {
      clearTimeout(timer);
      ACTIVITY_EVENTS.forEach((e) => window.removeEventListener(e, restart));
    };
  }, [suppressed]);

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

  // fade in, hold, fade out, then on to the next hint
  useEffect(() => {
    if (!idle) {
      setShown(false);
      setIndex(0);
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
    run(0);
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idle]);

  if (top === null) return null;

  return (
    <div
      aria-hidden={!(idle && shown)}
      className="pointer-events-none fixed inset-x-0 grid -translate-y-1/2 justify-items-center px-4"
      style={{ top }}
    >
      {hints.map((hint, i) => (
        <div
          key={hint.text}
          style={{ transitionDuration: `${FADE_MS}ms` }}
          className={`col-start-1 row-start-1 flex items-center text-base font-medium tracking-wide text-white transition-opacity [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] sm:text-lg ${
            idle && shown && i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {hint.icon && (
            <Image
              src={hint.icon}
              alt=""
              width={30}
              height={30}
              priority
              className="mr-2 invert drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            />
          )}
          {hint.text}
        </div>
      ))}
    </div>
  );
};

export default IdleHint;
