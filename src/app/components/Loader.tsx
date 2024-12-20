import { useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();

  return (
    <div className="flex flex-col h-svh items-center justify-center gap-4">
      <div className="text-lg text-gray-600">Loading...</div>
      <div className="w-64 h-3 bg-gray-200 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm text-gray-500">{progress.toFixed(0)}% loaded</div>
    </div>
  );
}
