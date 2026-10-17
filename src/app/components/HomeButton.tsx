'use client';

import { FOOTER_ICON_PX } from '../footerIcons';
import { HOME_EVENT } from '../homeEvent';

const HomeButton = () => {
  return (
    <button
      aria-label="Back to the opening scene"
      title="Home"
      className="-m-1.5 flex items-center p-1.5"
      onClick={() => window.dispatchEvent(new Event(HOME_EVENT))}
    >
      <svg
        width={FOOTER_ICON_PX}
        height={FOOTER_ICON_PX}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* spans y 2-22 and x 2-22, exactly like the help icon's circle */}
        <path d="M2 11 12 2l10 9" />
        <path d="M5 9.5V22h14V9.5" />
        <path d="M10 22v-6h4v6" />
      </svg>
    </button>
  );
};

export default HomeButton;
