'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const IDLE_MS = 3000;
// two pulses per hint; each pulse starts and ends dark, so swaps are seamless
const CYCLE_MS = 6000;
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

  useEffect(() => {
    setTouch(window.matchMedia('(pointer: coarse)').matches);
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

  // step through the hints while visible
  useEffect(() => {
    if (!idle) {
      setIndex(0);
      return;
    }
    const timer = setInterval(() => setIndex((i) => i + 1), CYCLE_MS);
    return () => clearInterval(timer);
  }, [idle]);

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
  const hint = hints[index % hints.length];

  return (
    <div
      aria-hidden={!idle}
      className="pointer-events-none fixed inset-x-0 top-[56.667dvh] flex h-[33.333dvh] items-center justify-center px-4"
    >
      <div
        className={`transition-opacity duration-700 ${
          idle ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          key={index}
          className="flex animate-pulse-soft items-center text-sm font-medium tracking-wide text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] sm:text-base"
        >
          {hint.icon && (
            <Image
              src={hint.icon}
              alt=""
              width={26}
              height={26}
              className="mr-2 invert drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            />
          )}
          {hint.text}
        </div>
      </div>
    </div>
  );
};

export default IdleHint;
