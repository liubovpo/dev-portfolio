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

      group.current.rotation.y += delta * 0.05 * Math.PI;
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
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, 0]}
          rotation={[-1.617, 0, 0]}
          scale={0.017}
        >
          <group
            name="6429e4bf40804998943345f21ea97979fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Island"
                  position={[0, -0.062, -2.826]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Island_Island+Alpha_0"
                    geometry={nodes["Island_Island+Alpha_0"].geometry}
                    material={materials.IslandAlpha}
                  />
                </group>
                <group
                  name="Bark_tree_2"
                  position={[-22.484, 1.496, 4.696]}
                  rotation={[-1.599, -0.096, 3.003]}
                  scale={0.671}
                >
                  <mesh
                    name="Bark_tree_2_Tree_2_0"
                    geometry={nodes.Bark_tree_2_Tree_2_0.geometry}
                    material={materials.Tree_2}
                  />
                </group>
                <group
                  name="logs"
                  position={[28.062, 10.5, -13.486]}
                  rotation={[0.049, 0, 0]}
                >
                  <mesh
                    name="logs_Log_0"
                    geometry={nodes.logs_Log_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Stone_6"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Stone_6_Stones_0"
                    geometry={nodes.Stone_6_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Moss"
                  position={[27.647, 5.64, -27.81]}
                  rotation={[-1.573, 0.182, 3.114]}
                  scale={1.379}
                >
                  <mesh
                    name="Moss_Moss_0"
                    geometry={nodes.Moss_Moss_0.geometry}
                    material={materials.Moss}
                  />
                </group>
                <group
                  name="Mushrooms_Tall"
                  position={[-20.183, 19.974, -39.393]}
                  rotation={[-1.624, 0.064, 2.399]}
                  scale={[0.645, 0.645, 0.282]}
                >
                  <mesh
                    name="Mushrooms_Tall_Mushroom_Big_0"
                    geometry={nodes.Mushrooms_Tall_Mushroom_Big_0.geometry}
                    material={materials.Mushroom_Big}
                  />
                </group>
                <group
                  name="Paporotnik"
                  position={[46.214, -0.348, 7.444]}
                  rotation={[-1.121, -0.616, 2.152]}
                  scale={0.353}
                >
                  <group name="Object_17" position={[0, -24.006, 0]}>
                    <mesh
                      name="Paporotnik_Paporotnic_0"
                      geometry={nodes.Paporotnik_Paporotnic_0.geometry}
                      material={materials.Paporotnic}
                    />
                  </group>
                </group>
                <group
                  name="Leafs_Tree_1"
                  position={[3.341, 34.426, -29.831]}
                  rotation={[-2.08, 0.13, 2.914]}
                  scale={0.555}
                >
                  <group name="Object_20" position={[0, -25.878, 0]}>
                    <mesh
                      name="Leafs_Tree_1_Tree_1_0"
                      geometry={nodes.Leafs_Tree_1_Tree_1_0.geometry}
                      material={materials.Tree_1}
                    />
                  </group>
                </group>
                <group
                  name="Bark_tree_2_1"
                  position={[3.103, 0, -27.365]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Bark_tree_2_Tree_1_0"
                    geometry={nodes.Bark_tree_2_Tree_1_0.geometry}
                    material={materials.Tree_1}
                  />
                </group>
                <group
                  name="Leafs_Tree_2"
                  position={[-22.484, 1.496, 4.696]}
                  rotation={[-1.599, -0.096, 3.003]}
                  scale={0.671}
                >
                  <mesh
                    name="Leafs_Tree_2_Tree_2_0"
                    geometry={nodes.Leafs_Tree_2_Tree_2_0.geometry}
                    material={materials.Tree_2}
                  />
                </group>
                <group
                  name="Leafs_Tree_2_1"
                  position={[-22.484, 1.496, 4.696]}
                  rotation={[-1.599, -0.096, 3.003]}
                  scale={0.671}
                >
                  <mesh
                    name="Leafs_Tree_2_Tree_2_0_1"
                    geometry={nodes.Leafs_Tree_2_Tree_2_0_1.geometry}
                    material={materials.Tree_2}
                  />
                </group>
                <group
                  name="Bark_tree_2_2"
                  position={[-22.484, 1.496, 4.696]}
                  rotation={[-1.599, -0.096, 3.003]}
                  scale={0.671}
                >
                  <mesh
                    name="Bark_tree_2_Tree_2_0_1"
                    geometry={nodes.Bark_tree_2_Tree_2_0_1.geometry}
                    material={materials.Tree_2}
                  />
                </group>
                <group
                  name="Stone_1"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Stone_1_Stones_0"
                    geometry={nodes.Stone_1_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Stone_2"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Stone_2_Stones_0"
                    geometry={nodes.Stone_2_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Object003"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Object003_Stones_0"
                    geometry={nodes.Object003_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Stone_3"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Stone_3_Stones_0"
                    geometry={nodes.Stone_3_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Stone_4"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Stone_4_Stones_0"
                    geometry={nodes.Stone_4_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Stone_5"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Stone_5_Stones_0"
                    geometry={nodes.Stone_5_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Stone_7"
                  position={[34.364, 10.146, 20.902]}
                  rotation={[-1.725, 0.05, 1.574]}
                  scale={0.414}
                >
                  <mesh
                    name="Stone_7_Stones_0"
                    geometry={nodes.Stone_7_Stones_0.geometry}
                    material={materials.Stones}
                  />
                </group>
                <group
                  name="Mushrooms_Flat001"
                  position={[0.644, 0.3, -0.513]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Mushrooms_Flat001_Mushrooms_Flatasd_0"
                    geometry={
                      nodes.Mushrooms_Flat001_Mushrooms_Flatasd_0.geometry
                    }
                    material={materials.Mushrooms_Flatasd}
                  />
                </group>
                <group
                  name="Object004"
                  position={[33.41, 10.085, -21.828]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.567}
                >
                  <group name="Object_47" position={[-35.838, -22.499, -8.873]}>
                    <mesh
                      name="Object004_Mushrooms_Flatasd_0"
                      geometry={nodes.Object004_Mushrooms_Flatasd_0.geometry}
                      material={materials.Mushrooms_Flatasd}
                    />
                  </group>
                </group>
                <group
                  name="Object005"
                  position={[32.69, 12.888, -22.686]}
                  rotation={[-1.555, -0.219, -1.023]}
                  scale={0.443}
                >
                  <group name="Object_50" position={[-35.838, -22.499, -8.873]}>
                    <mesh
                      name="Object005_Mushrooms_Flatasd_0"
                      geometry={nodes.Object005_Mushrooms_Flatasd_0.geometry}
                      material={materials.Mushrooms_Flatasd}
                    />
                  </group>
                </group>
                <group
                  name="Object006"
                  position={[33.41, 9.224, -17.535]}
                  rotation={[-1.558, -0.077, -1.409]}
                  scale={0.467}
                >
                  <group name="Object_53" position={[-35.838, -22.499, -8.873]}>
                    <mesh
                      name="Object006_Mushrooms_Flatasd_0"
                      geometry={nodes.Object006_Mushrooms_Flatasd_0.geometry}
                      material={materials.Mushrooms_Flatasd}
                    />
                  </group>
                </group>
                <group
                  name="Object007"
                  position={[33.612, 10.171, 1.514]}
                  rotation={[-1.724, -0.234, -2.04]}
                  scale={0.553}
                >
                  <group name="Object_56" position={[-35.838, -22.499, -8.873]}>
                    <mesh
                      name="Object007_Mushrooms_Flatasd_0"
                      geometry={nodes.Object007_Mushrooms_Flatasd_0.geometry}
                      material={materials.Mushrooms_Flatasd}
                    />
                  </group>
                </group>
                <group
                  name="Plane001"
                  position={[46.791, 49.618, -4.021]}
                  rotation={[Math.PI, 1.433, -Math.PI]}
                  scale={0.599}
                >
                  <mesh
                    name="Plane001_19_-_Default_0"
                    geometry={nodes["Plane001_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane002"
                  position={[12.449, 39.705, -7.012]}
                  rotation={[Math.PI, 0.7, -Math.PI]}
                  scale={0.716}
                >
                  <mesh
                    name="Plane002_19_-_Default_0"
                    geometry={nodes["Plane002_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane003"
                  position={[28.401, 63.072, -6.038]}
                  rotation={[Math.PI, 0.84, -Math.PI]}
                  scale={0.869}
                >
                  <mesh
                    name="Plane003_19_-_Default_0"
                    geometry={nodes["Plane003_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane004"
                  position={[64.9, 13.274, -15.071]}
                  rotation={[Math.PI, 1.276, -Math.PI]}
                  scale={0.072}
                >
                  <mesh
                    name="Plane004_19_-_Default_0"
                    geometry={nodes["Plane004_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane005"
                  position={[-52.873, 10.134, -16.758]}
                  rotation={[Math.PI, 0.945, -Math.PI]}
                  scale={0.777}
                >
                  <mesh
                    name="Plane005_19_-_Default_0"
                    geometry={nodes["Plane005_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane006"
                  position={[13.726, 72.295, -8.147]}
                  rotation={[Math.PI, 1.538, -Math.PI]}
                  scale={0.081}
                >
                  <mesh
                    name="Plane006_19_-_Default_0"
                    geometry={nodes["Plane006_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane007"
                  position={[3.93, 84.225, -0.636]}
                  rotation={[Math.PI, 1.259, -Math.PI]}
                  scale={0.929}
                >
                  <mesh
                    name="Plane007_19_-_Default_0"
                    geometry={nodes["Plane007_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane008"
                  position={[24.758, 34.065, -0.819]}
                  rotation={[Math.PI, 1.311, -Math.PI]}
                  scale={0.633}
                >
                  <mesh
                    name="Plane008_19_-_Default_0"
                    geometry={nodes["Plane008_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane009"
                  position={[-16.042, 77.564, 4.88]}
                  rotation={[Math.PI, -0.05, Math.PI]}
                  scale={0.872}
                >
                  <mesh
                    name="Plane009_19_-_Default_0"
                    geometry={nodes["Plane009_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane010"
                  position={[-24.298, 47.896, 2.429]}
                  rotation={[Math.PI, 1.259, -Math.PI]}
                  scale={0.946}
                >
                  <mesh
                    name="Plane010_19_-_Default_0"
                    geometry={nodes["Plane010_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane011"
                  position={[-38.32, 86.373, -19.589]}
                  rotation={[Math.PI, 0.648, -Math.PI]}
                  scale={0.683}
                >
                  <mesh
                    name="Plane011_19_-_Default_0"
                    geometry={nodes["Plane011_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane012"
                  position={[-13.275, 23.25, -14.678]}
                  rotation={[Math.PI, 0.421, -Math.PI]}
                  scale={0.78}
                >
                  <mesh
                    name="Plane012_19_-_Default_0"
                    geometry={nodes["Plane012_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane013"
                  position={[-48.172, 46.875, -7.101]}
                  rotation={[Math.PI, 1.067, -Math.PI]}
                  scale={0.656}
                >
                  <mesh
                    name="Plane013_19_-_Default_0"
                    geometry={nodes["Plane013_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane014"
                  position={[-25.501, 24.741, -18.211]}
                  rotation={[Math.PI, 0.823, -Math.PI]}
                  scale={0.813}
                >
                  <mesh
                    name="Plane014_19_-_Default_0"
                    geometry={nodes["Plane014_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane015"
                  position={[-9.145, 57.84, -6.82]}
                  rotation={[Math.PI, 1.503, -Math.PI]}
                  scale={0.73}
                >
                  <mesh
                    name="Plane015_19_-_Default_0"
                    geometry={nodes["Plane015_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane016"
                  position={[17.552, -2.623, 9.28]}
                  rotation={[Math.PI, 0.194, -Math.PI]}
                  scale={0.653}
                >
                  <mesh
                    name="Plane016_19_-_Default_0"
                    geometry={nodes["Plane016_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane017"
                  position={[0.317, 26.693, -9.344]}
                  rotation={[Math.PI, 0.945, -Math.PI]}
                  scale={0.865}
                >
                  <mesh
                    name="Plane017_19_-_Default_0"
                    geometry={nodes["Plane017_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane018"
                  position={[-26.036, 86.093, -20.697]}
                  rotation={[0, 1.411, 0]}
                  scale={0.829}
                >
                  <mesh
                    name="Plane018_19_-_Default_0"
                    geometry={nodes["Plane018_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane019"
                  position={[-35.687, 117.585, -3.384]}
                  rotation={[Math.PI, 1.05, -Math.PI]}
                  scale={0.854}
                >
                  <mesh
                    name="Plane019_19_-_Default_0"
                    geometry={nodes["Plane019_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane020"
                  position={[-12.346, 65.031, -18.035]}
                  rotation={[0, 1.429, 0]}
                  scale={0.702}
                >
                  <mesh
                    name="Plane020_19_-_Default_0"
                    geometry={nodes["Plane020_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane021"
                  position={[-59.047, 96.975, -10.719]}
                  rotation={[Math.PI, 1.503, -Math.PI]}
                  scale={0.734}
                >
                  <mesh
                    name="Plane021_19_-_Default_0"
                    geometry={nodes["Plane021_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane022"
                  position={[-27.028, 62.983, -18.887]}
                  rotation={[Math.PI, 1.119, -Math.PI]}
                  scale={0.739}
                >
                  <mesh
                    name="Plane022_19_-_Default_0"
                    geometry={nodes["Plane022_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane023"
                  position={[-7.328, 81.43, -4.862]}
                  rotation={[Math.PI, 0.142, -Math.PI]}
                  scale={0.774}
                >
                  <mesh
                    name="Plane023_19_-_Default_0"
                    geometry={nodes["Plane023_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane024"
                  position={[16.626, 33.531, -8.147]}
                  rotation={[Math.PI, 0.875, -Math.PI]}
                  scale={0.647}
                >
                  <mesh
                    name="Plane024_19_-_Default_0"
                    geometry={nodes["Plane024_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane025"
                  position={[0.526, 65.3, -3.218]}
                  rotation={[Math.PI, 1.172, -Math.PI]}
                  scale={0.758}
                >
                  <mesh
                    name="Plane025_19_-_Default_0"
                    geometry={nodes["Plane025_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane026"
                  position={[15.625, 96.957, -3.925]}
                  rotation={[Math.PI, 1.154, -Math.PI]}
                  scale={0.945}
                >
                  <mesh
                    name="Plane026_19_-_Default_0"
                    geometry={nodes["Plane026_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane027"
                  position={[28.718, 95.352, -22.988]}
                  rotation={[Math.PI, 0.875, -Math.PI]}
                  scale={1.012}
                >
                  <mesh
                    name="Plane027_19_-_Default_0"
                    geometry={nodes["Plane027_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane028"
                  position={[29.791, 82.051, -16.915]}
                  rotation={[Math.PI, 0.753, -Math.PI]}
                  scale={0.942}
                >
                  <mesh
                    name="Plane028_19_-_Default_0"
                    geometry={nodes["Plane028_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane029"
                  position={[49.302, 39.772, -2.911]}
                  rotation={[Math.PI, 1.137, -Math.PI]}
                  scale={0.091}
                >
                  <mesh
                    name="Plane029_19_-_Default_0"
                    geometry={nodes["Plane029_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane030"
                  position={[-57.687, 54.148, 5.322]}
                  rotation={[Math.PI, 1.311, -Math.PI]}
                  scale={0.814}
                >
                  <mesh
                    name="Plane030_19_-_Default_0"
                    geometry={nodes["Plane030_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane031"
                  position={[11.804, 94.101, -2.765]}
                  rotation={[Math.PI, 1.05, -Math.PI]}
                  scale={0.668}
                >
                  <mesh
                    name="Plane031_19_-_Default_0"
                    geometry={nodes["Plane031_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane032"
                  position={[5.143, 154.447, 5.414]}
                  rotation={[Math.PI, 0.194, -Math.PI]}
                  scale={0.81}
                >
                  <mesh
                    name="Plane032_19_-_Default_0"
                    geometry={nodes["Plane032_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane033"
                  position={[39.673, 80.326, 3.448]}
                  rotation={[Math.PI, 1.102, -Math.PI]}
                  scale={1.007}
                >
                  <mesh
                    name="Plane033_19_-_Default_0"
                    geometry={nodes["Plane033_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
                <group
                  name="Plane034"
                  position={[-15.524, 113.29, -11.982]}
                  rotation={[Math.PI, 0.962, -Math.PI]}
                  scale={0.72}
                >
                  <mesh
                    name="Plane034_19_-_Default_0"
                    geometry={nodes["Plane034_19_-_Default_0"].geometry}
                    material={materials["19_-_Default"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Island;
