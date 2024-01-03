import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const group = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials, animations } = useGLTF(islandScene);
  const { actions } = useAnimations(animations, group);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      group.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;

      rotationSpeed.current = delta * 0.005 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      group.current.rotation.y += 0.01 * Math.PI;
      //   rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      group.current.rotation.y -= 0.01 * Math.PI;
      //   rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      group.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = group.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[23.7, 65.577, -16.479]}
          rotation={[0.632, -1.072, -0.216]}
          scale={9.079}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane089_derevo_krona1_0.geometry}
            material={materials.derevo_krona1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane089_derevo_krona2_0.geometry}
            material={materials.derevo_krona2}
          />
        </group>
        <group
          position={[32.286, 15.018, -15.847]}
          rotation={[-1.707, -0.661, 0.69]}
          scale={9.445}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane051_derevo_krona6_0.geometry}
            material={materials.derevo_krona6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane051_derevo_krona5_0.geometry}
            material={materials.derevo_krona5}
          />
        </group>
        <group
          position={[-28.635, 2.463, 10.665]}
          rotation={[-2.923, -0.442, -2.182]}
          scale={3.506}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane305_derevo_krona7png_0.geometry}
            material={materials["derevo_krona7.png"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane305_derevo_krona8png_0.geometry}
            material={materials["derevo_krona8.png"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_zemlia_0.geometry}
          material={materials.zemlia}
          position={[-5.702, -7.35, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_kamni_0.geometry}
          material={materials.kamni}
          position={[-59.517, -28.441, 73.597]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_voda4_0.geometry}
          material={materials.voda4}
          position={[-5.495, -40.336, -1.09]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={179.536}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_stvol_dereva_0.geometry}
          material={materials.stvol_dereva}
          position={[-33.68, 40.551, -34.685]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_dom_0.geometry}
          material={materials.material}
          position={[0.097, 7.137, 3.326]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_most_0.geometry}
          material={materials.most}
          position={[61.626, -27.542, -0.049]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_bochka_0.geometry}
          material={materials.bochka}
          position={[-20.303, 4.805, -15.471]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_iashik_krishka_0.geometry}
          material={materials.iashik_krishka}
          position={[-24.477, 3.493, -10.127]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_zemlia2_0.geometry}
          material={materials.zemlia2}
          position={[-5.702, -7.35, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_elka_krona4_0.geometry}
          material={materials.elka_krona4}
          position={[-4.105, 156.493, -63.304]}
          rotation={[-2.32, 0.067, -3.103]}
          scale={[1.432, 5.284, 10.019]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_elka_krona3_0.geometry}
          material={materials.elka_krona3}
          position={[-26.119, 173.419, -32.594]}
          rotation={[-0.918, -0.297, -0.281]}
          scale={[1.432, 5.284, 10.019]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_grass1_0.geometry}
          material={materials.grass1}
          position={[37.802, -14.162, -0.878]}
          rotation={[-0.011, 0.098, -0.053]}
          scale={1.577}
        />
      </group>
    </a.group>

  );
};

export default Island;
