
export default function Home() {
  const year = String((new Date).getUTCFullYear());
  return (
    <div className="flex flex-col items-center h-[100vh] w-[100vw]">
      <main className="flex flex-col items-center text-3xl m-8">
        <h1 className="p-4">Hello!</h1>
        <h2 className="p-4">My name is Bonnie</h2>
      </main>
      <footer className="fixed bottom-4">
        <h4>Copyright ©
          <a href="https://github.com/bkcheung"> bkcheung {year}</a>
        </h4>
      </footer>
    </div>
  );
}
