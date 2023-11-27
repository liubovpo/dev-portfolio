import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";
import Bird from "../models/bird";

const Home = () => {
  const adjustIslanForScreens = () => {
    let screenScale = null;
    let screenPosition = [1, 0, 0];
    let rotation = [0.4, 5, 0.1];

    if (window.innerWidth < 768) {
      screenScale = [1.1, 1.1, 1.1];
    } else {
      screenScale = [1.6, 1.6, 1.6];
    }
    return [screenScale, rotation, screenPosition];
  };
  const [islandScale, islandRotation, islandPosition] = adjustIslanForScreens();
  return (
    <section className="w-full h-screen relative">
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Text
      </div> */}
      <Canvas
        className="w-full h-full bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird
            scale={islandScale}
            rotation={islandRotation}
            position={[0, 0, 4]}
          />
          <Island
            scale={islandScale}
            rotation={islandRotation}
            position={islandPosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
