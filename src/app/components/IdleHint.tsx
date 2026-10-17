'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const IDLE_MS = 3000;
const CYCLE_MS = 3500;
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
      className="pointer-events-none fixed inset-x-0 top-[66.667dvh] flex h-[33.333dvh] items-center justify-center px-4"
    >
      <div
        key={index}
        className={`flex items-center rounded-full bg-white/70 px-4 py-2 text-sm text-gray-700 shadow-lg backdrop-blur transition-opacity duration-500 sm:text-base ${
          idle ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}
      >
        {hint.icon && (
          <Image
            src={hint.icon}
            alt=""
            width={30}
            height={30}
            className="p-[0.25rem] pr-[0.5rem]"
          />
        )}
        {hint.text}
      </div>
    </div>
  );
};

export default IdleHint;
