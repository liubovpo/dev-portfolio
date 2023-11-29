import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";
import Bird from "../models/bird";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [birdPosition, setBirdPosition] = useState([0, 0, 0]);
  const time = useRef(0);
  const radius = 3;

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('body-scroll-lock');

    return () => {
      body.classList.remove('body-scroll-lock');
    };
  }, []);

  useEffect(() => {
    const animateBird = () => {
      const x = Math.cos(time.current) * radius;
      const y = 0.5;
      const z = Math.sin(time.current) * radius + 1;

      setBirdPosition([x, y, z]);

      time.current += 0.005;
    };

    const animationId = setInterval(animateBird, 30);

    return () => clearInterval(animationId);
  }, []);

  const adjustIslandForScreens = () => {
    let screenScale = null;
    let screenPosition = [0, -0.4, 0];
    let rotation = [0.4, 4.8, 0.1];

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
    } else {
      screenScale = [2, 2, 2];
    }
    return [screenScale, rotation, screenPosition];
  };

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [islandScale, islandRotation, islandPosition] = adjustIslandForScreens();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-full bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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
            scale={[2, 2, 2]}
            rotation={islandRotation}
            position={birdPosition}
          />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
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
