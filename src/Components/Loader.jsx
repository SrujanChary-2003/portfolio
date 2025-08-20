import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html className="text-xl font-normal text-center">{progress}% Loaded</Html>
  );
}

export default Loader;
