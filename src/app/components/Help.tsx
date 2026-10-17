'use client';

import { useState } from 'react';

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <button
        aria-label="Help"
        title="Help"
        className="flex items-center"
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
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </button>
      {showHelp && (
        <section
          role="dialog"
          aria-label="Help"
          className="fixed inset-0 z-50 flex items-center justify-center whitespace-normal bg-black/50 px-4 hover:cursor-pointer"
          onClick={() => setShowHelp(false)}
        >
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-xl sm:w-max sm:max-w-none lg:p-10">
            <ul className="flex list-disc flex-col gap-3 pl-5 pr-2 text-base text-gray-700 sm:text-lg lg:gap-4 lg:text-2xl">
              <li>
                <span className="hidden sm:inline">Click and drag</span>
                <span className="sm:hidden">Drag</span> to rotate the view
              </li>
              <li>
                <span className="hidden sm:inline">Pinch or scroll</span>
                <span className="sm:hidden">Pinch</span> to zoom in and out
              </li>
              <li>
                <span className="hidden sm:inline">Click</span>
                <span className="sm:hidden">Tap</span> the iMac buttons or
                frames to zoom in
              </li>
              <li>
                <span className="hidden sm:inline">Click</span>
                <span className="sm:hidden">Tap</span> the background to return
                home
              </li>
            </ul>
            <p className="mt-5 text-center text-sm text-gray-500">
              <span className="hidden sm:inline">Click</span>
              <span className="sm:hidden">Tap</span> anywhere to close
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Help;
