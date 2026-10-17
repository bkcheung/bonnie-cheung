import { SpeedInsights } from '@vercel/speed-insights/next';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';

import Help from './components/Help';
import Scene from './components/Scene';

export default function Home() {
  return (
    <div className="flex flex-col h-dvh w-screen items-center">
      <main className="h-full w-full overflow-hidden">
        <Scene />
        <ToastContainer limit={3} autoClose={2000} hideProgressBar={true} />
        <SpeedInsights />
      </main>
      <footer className="fixed bottom-0 bg-white/40 w-full min-h-[3rem] flex items-center justify-between px-3 text-sm sm:px-4 sm:text-base">
        <h4>
          ©<a href="https://github.com/bkcheung"> Bonnie Cheung </a>
        </h4>
        <div className="flex items-center whitespace-nowrap">
          <Help />
          <div className="mx-2 flex items-center sm:mx-4">
            <Image
              src="/360.png"
              alt="rotation"
              width={30}
              height={30}
              className="p-[0.25rem] pr-[0.5rem]"
            />
            <span className="hidden sm:inline">Click & drag</span>
            <span className="sm:hidden">Drag</span>
          </div>
          <div className="mx-2 flex items-center sm:mx-4">
            <Image
              src="/zoom.png"
              alt="zoom"
              width={30}
              height={30}
              className="p-[0.25rem] pr-[0.5rem]"
            />
            <span className="hidden sm:inline">Scroll to zoom</span>
            <span className="sm:hidden">Pinch</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
