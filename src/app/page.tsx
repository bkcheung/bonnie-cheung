import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastContainer } from 'react-toastify';

import Help from './components/Help';
import HomeButton from './components/HomeButton';
import Scene from './components/Scene';
import { FOOTER_ICON_INSET_PX } from './footerIcons';

export default function Home() {
  return (
    <div className="flex flex-col h-dvh w-screen items-center">
      <main className="h-full w-full overflow-hidden">
        <Scene />
        <ToastContainer limit={3} autoClose={2000} hideProgressBar={true} />
        <SpeedInsights />
      </main>
      <footer className="fixed bottom-0 bg-white/40 w-full min-h-[3rem] flex items-center justify-between px-[var(--gutter)] text-sm [--gutter:0.75rem] sm:text-base sm:[--gutter:1rem]">
        <h4>
          ©<a href="https://github.com/bkcheung"> Bonnie Cheung </a>
        </h4>
        {/* the icons sit one footer gutter apart (the left padding), minus the
            empty space inside the two SVGs, so the visible gap matches */}
        <div
          className="flex items-center"
          style={{ gap: `calc(var(--gutter) - ${FOOTER_ICON_INSET_PX}px)` }}
        >
          <HomeButton />
          <Help />
        </div>
      </footer>
    </div>
  );
}
