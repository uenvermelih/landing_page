import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 40 }}>
      <color attach="background" args={["#14181f"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
