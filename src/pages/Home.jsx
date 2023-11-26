import React from 'react'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from "../components/Loader";
import Island from '../models/island';

const Home = () => {
  const adjustIslanForScreens = () => {
    let screenScale = null
    let screenPosition= [1,0,0]
    let rotation = [0.4, 5, 0.1]

    if (window.innerWidth < 768){
      screenScale = [1.1, 1.1, 1.1];
    }else{
      screenScale = [1.6, 1.6, 1.6];
    }
    return [screenScale,rotation,screenPosition]
  }
  const [islandScale,islandRotation,islandPosition] = adjustIslanForScreens()
  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Text
      </div> */}
      <Canvas 
      className='w-full h-full bg-transparent'
      camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <Island
          scale={islandScale}
          rotation={islandRotation}
          position={islandPosition}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home