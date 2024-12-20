import Scene from './components/Scene';
import Image from 'next/image';

export default function Home() {
  const year = String(new Date().getUTCFullYear());
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center">
      <main className="h-full w-full">
        <Scene />
      </main>
      <footer className="fixed bottom-0 bg-white/40 w-full min-h-[3rem] flex items-center justify-between px-4">
        <div className="flex items-center">
          <Image 
            src="/360.png"
            alt="rotation"
            width={30}
            height={30}
            className="p-[0.25rem] pr-[0.5rem]"
          />
          Click & drag
        </div>
        <h4>
          Copyright ©<a href="https://github.com/bkcheung"> bkcheung {year}</a>
        </h4>
        <div className="flex items-center">
          <Image 
            src="/zoom.png"
            alt="zoom"
            width={30}
            height={30}
            className="p-[0.25rem] pr-[0.5rem]"
          />
          Scroll to zoom
        </div>
      </footer>
    </div>
  );
}
