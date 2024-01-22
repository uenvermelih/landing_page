import { Environment, OrbitControls, ScrollControls, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { Microphone } from "./Microphone";
import { Overlay } from "./Overlay";


export const Experience = () => {

  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= 0.001;
    }
  });   

  return (
    <>
      <OrbitControls enableZoom={false}/>  
      

      <Sphere args={[90, 90, 32, 32]} position={[50, -10, -200]} rotation={[0.3, 1, 0]} ref={sphereRef} > 
          <meshNormalMaterial wireframe={true}/>
      </Sphere>
            
      <ScrollControls damping={0.1} pages={4} distance={0.8} direction={[1, 0, 0]}> 
      <Overlay />
        <group position={[3, -1.5, -3]} rotation={[0, -0.4, 0]}>
          <Avatar position={[0, -14, 0]} rotation={[0, 0., 0]} scale={0.1}/>
          <Microphone position={[-0.5, -1.5, 2]} rotation={[0, -0.3, 0.05]} scale={4}/>
        </group>
      </ScrollControls>
      <Environment preset='sunset' />

    </>
  );
};
