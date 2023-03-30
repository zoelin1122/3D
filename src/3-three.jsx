import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CameraControls, Environment } from "@react-three/drei";


function coordinate(event) {
  
}

function Box(props, event) {
  var xpos = event.clientX;
  var ypos = event.clientY;
  const ref = useRef();
  var direction = xpos < ypos ? 'x' : 'y'
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[props.length, 1, 1]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

function App() {
  return ( 
    <Canvas>
      <CameraControls makeDefault />
      <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box length = {3} position={[-1.2, -1, 1]} />
        <Box length = {2} position={[1.2, 0, 0]} />
        <Box length = {1} position={[0, 1, -1]} />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
