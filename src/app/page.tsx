// import Scene from "./components/Scene"
'use client'
import dynamic from "next/dynamic";

const Scene = dynamic(() => import('./components/Scene'), {ssr: false})

export default function Home() {
  const year = String((new Date).getUTCFullYear());
  return (
    <div className="flex flex-col items-center h-[100vh] w-[100vw]">
      <main className="h-full w-full">
      {/* <main className="flex flex-col items-center text-3xl m-8"> */}
      {/* <h1 className="p-4">Hello!</h1>
        <h2 className="p-4">My name is Bonnie</h2> */}
        <Scene />
      </main>
      <footer className="fixed bottom-4">
        <h4>Copyright ©
          <a href="https://github.com/bkcheung"> bkcheung {year}</a>
        </h4>
      </footer>
    </div>
  );
}
