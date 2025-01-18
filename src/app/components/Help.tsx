import { useState } from 'react';

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <section>
      {showHelp && (
        <section
        title='Click anywhere to close'
          className="absolute inset-0 w-full h-full bg-black/50 hover:cursor-pointer"
          onClick={() => setShowHelp(false)}
        >
          <div className="flex flex-col absolute inset-0 m-auto w-3/4 sm:w-max h-min items-center bg-white shadow-xl rounded-3xl p-4 lg:p-10 z-1">
            <ul className="flex flex-col p-10 gap-2 lg:gap-4 text-gray-700 list-disc text-lg lg:text-2xl">
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
