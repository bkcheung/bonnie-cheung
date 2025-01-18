import { useState } from 'react';

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <section>
      {showHelp && (
        <section
          className="absolute inset-0 w-full h-full"
          onClick={() => setShowHelp(false)}
        >
          <div className="flex flex-col absolute inset-0 m-auto w-max h-min items-center bg-white/90 shadow-xl rounded-3xl p-10 z-1">
            <button
              title="close"
              className="absolute right-10 text-gray-600 text-xl"
              onClick={() => setShowHelp(false)}
            >
              close
            </button>
            <ul className="flex flex-col p-10 gap-4 text-gray-700 list-disc text-2xl">
              <li>Click and drag to rotate the view</li>
              <li>Pinch or scroll to zoom in and out</li>
              <li>
                Click on the iMac buttons or frames to zoom in
              </li>
              <li>Click on background to return to home</li>
            </ul>
          </div>
        </section>
      )}
      {!showHelp && (
        <button
          className="absolute top-0 right-0 bg-white/50 rounded-full text-gray-600 p-2 m-4"
          onClick={() => setShowHelp(true)}
        >
          Help
        </button>
      )}
    </section>
  );
};

export default Help;
