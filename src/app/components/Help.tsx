'use client';

import { useState } from 'react';

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <button
        aria-label="Help"
        title="Help"
        className="mx-2 flex items-center sm:mx-4"
        onClick={() => setShowHelp(true)}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="p-[0.25rem]"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </button>
      {showHelp && (
        <section
          title="Click anywhere to close"
          className="fixed inset-0 z-50 h-full w-full bg-black/50 hover:cursor-pointer"
          onClick={() => setShowHelp(false)}
        >
          <div className="z-1 absolute inset-0 m-auto flex h-min w-3/4 flex-col items-center rounded-3xl bg-white p-4 shadow-xl sm:w-max lg:p-10">
            <ul className="flex list-disc flex-col gap-2 p-10 text-lg text-gray-700 lg:gap-4 lg:text-2xl">
              <li>Click and drag to rotate the view</li>
              <li>Pinch or scroll to zoom in and out</li>
              <li>Click on the iMac buttons or frames to zoom in</li>
              <li>Click on background to return to home</li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Help;
