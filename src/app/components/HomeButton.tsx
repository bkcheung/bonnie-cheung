'use client';

import { HOME_EVENT } from '../homeEvent';

const HomeButton = () => {
  return (
    <button
      aria-label="Back to the opening scene"
      title="Home"
      className="flex items-center"
      onClick={() => window.dispatchEvent(new Event(HOME_EVENT))}
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
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9.5h13V10" />
        <path d="M10 19.5v-5h4v5" />
      </svg>
    </button>
  );
};

export default HomeButton;
