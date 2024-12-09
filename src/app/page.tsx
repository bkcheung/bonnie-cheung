import Scene from "./components/Scene"

export default function Home() {
  const year = String(new Date().getUTCFullYear());
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center">
      <main className="h-full w-full">
        <Scene />
      </main>
      <footer className="fixed bottom-4">
        <h4>
          Copyright ©<a href="https://github.com/bkcheung"> bkcheung {year}</a>
        </h4>
      </footer>
    </div>
  );
}
