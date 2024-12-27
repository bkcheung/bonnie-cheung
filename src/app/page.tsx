import Image from 'next/image';
import { ToastContainer } from 'react-toastify';

import Scene from './components/Scene';

export default function Home() {
  // const year = String(new Date().getUTCFullYear());
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center">
      <main className="h-full w-full">
        <Scene />
        <ToastContainer limit={3} autoClose={2000} hideProgressBar={true} />
      </main>
      <footer className="fixed bottom-0 bg-white/40 w-full min-h-[3rem] flex items-center justify-between px-4">
        <h4>
          ©<a href="https://github.com/bkcheung"> Bonnie Cheung </a>
        </h4>
        <div className="flex">
          <div className="flex items-center mx-4">
            <Image
              src="/360.png"
              alt="rotation"
              width={30}
              height={30}
              className="p-[0.25rem] pr-[0.5rem]"
            />
            Click & drag
          </div>
          <div className="flex items-center mx-4">
            <Image
              src="/zoom.png"
              alt="zoom"
              width={30}
              height={30}
              className="p-[0.25rem] pr-[0.5rem]"
            />
            Scroll to zoom
          </div>
        </div>
      </footer>
    </div>
  );
}
