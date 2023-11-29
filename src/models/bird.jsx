import birdScene from "../assets/3d/bird.glb";

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Bird(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["AnimationStack"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, 0]}
          rotation={[1.576, 0, 0]}
        >
          <group
            name="6b0a2fa548de40d29b2f27faa63c1570fbx"
            rotation={[-Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Animated_Camera_1"
                  position={[0.296, -0.265, 0.333]}
                  rotation={[-Math.PI / 2, Math.PI / 4, 2.526]}
                >
                  <group name="Object_5" />
                </group>
                <group name="Ground" />
                <group
                  name="Wooden_Flying_Bird_Mobile_(assembly)"
                  position={[0.014, -0.014, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                >
                  <group name="Wooden_Flying_Bird_Mobile_(assembled_body)">
                    <group
                      name="Wooden_Flying_Bird_Mobile_(body)"
                      position={[0.018, -0.002, 0.079]}
                      rotation={[1.594, 0, 0]}
                    >
                      <group name="Body_1">
                        <group name="3DGeom~33">
                          <mesh
                            name="3DGeom~33_texture_0"
                            geometry={nodes["3DGeom~33_texture_0"].geometry}
                            material={materials.texture}
                          />
                        </group>
                        <group name="3DGeom~34">
                          <mesh
                            name="3DGeom~34_Mtl1_0"
                            geometry={nodes["3DGeom~34_Mtl1_0"].geometry}
                            material={materials.Mtl1}
                          />
                        </group>
                        <group name="3DGeom~35">
                          <mesh
                            name="3DGeom~35_Mtl2_0"
                            geometry={nodes["3DGeom~35_Mtl2_0"].geometry}
                            material={materials.Mtl2}
                          />
                        </group>
                        <group name="3DGeom~36">
                          <mesh
                            name="3DGeom~36_Mtl8_0"
                            geometry={nodes["3DGeom~36_Mtl8_0"].geometry}
                            material={materials.Mtl8}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wings_hinge)"
                      position={[0.012, 0, -0.002]}
                      rotation={[-3.118, 0, -Math.PI / 2]}
                    >
                      <group name="Body_1_2">
                        <group name="3DGeom~65">
                          <mesh
                            name="3DGeom~65_Mtl3_0"
                            geometry={nodes["3DGeom~65_Mtl3_0"].geometry}
                            material={materials.Mtl3}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(tail)"
                      position={[0.027, 0.086, -0.008]}
                      rotation={[1.594, 0, 0]}
                    >
                      <group name="Body_1_3">
                        <group name="3DGeom~83">
                          <mesh
                            name="3DGeom~83_Mtl4_0"
                            geometry={nodes["3DGeom~83_Mtl4_0"].geometry}
                            material={materials.Mtl4}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wings_hinge_axle)"
                      position={[0.012, 0.005, -0.002]}
                      rotation={[2.178, -Math.PI / 2, 0]}
                    >
                      <group name="Body_1_4">
                        <group name="3DGeom~87">
                          <mesh
                            name="3DGeom~87_Mtl5_0"
                            geometry={nodes["3DGeom~87_Mtl5_0"].geometry}
                            material={materials.Mtl5}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wings_hinge_axle)_2"
                      position={[0.012, -0.006, -0.002]}
                      rotation={[1.899, -Math.PI / 2, 0]}
                    >
                      <group name="Body_1_5">
                        <group name="3DGeom~87_2">
                          <mesh
                            name="3DGeom~87_2_Mtl5_0"
                            geometry={nodes["3DGeom~87_2_Mtl5_0"].geometry}
                            material={materials.Mtl5}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(ball_wire)"
                      position={[0.011, 0.01, -0.425]}
                      rotation={[0.024, 0, 0]}
                    >
                      <group name="Body_1_6">
                        <group name="3DGeom~92">
                          <mesh
                            name="3DGeom~92_Mtl6_0"
                            geometry={nodes["3DGeom~92_Mtl6_0"].geometry}
                            material={materials.Mtl6}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(ball)"
                      position={[0.011, 0.01, -0.425]}
                      rotation={[1.594, 0, 0]}
                    >
                      <group name="Body_1_7">
                        <group name="3DGeom~96">
                          <mesh
                            name="3DGeom~96_textureb_0"
                            geometry={nodes["3DGeom~96_textureb_0"].geometry}
                            material={materials.textureb}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="Wooden_Flying_Bird_Mobile_(assembled_wing)">
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wing)"
                      position={[0.036, -0.006, -0.007]}
                      rotation={[-2.654, 0, 1.101]}
                    >
                      <group name="Body_1_8">
                        <group name="3DGeom~160">
                          <mesh
                            name="3DGeom~160_Mtl8_0"
                            geometry={nodes["3DGeom~160_Mtl8_0"].geometry}
                            material={materials.Mtl8}
                          />
                        </group>
                        <group name="3DGeom~159">
                          <mesh
                            name="3DGeom~159_Mtl9_0"
                            geometry={nodes["3DGeom~159_Mtl9_0"].geometry}
                            material={materials.Mtl9}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wing_wire_joint)"
                      position={[0.018, 0.051, 0.026]}
                      rotation={[-1.083, 1.57, 0]}
                    >
                      <group name="Body_1_9">
                        <group name="3DGeom~164">
                          <mesh
                            name="3DGeom~164_Mtla_0"
                            geometry={nodes["3DGeom~164_Mtla_0"].geometry}
                            material={materials.Mtla}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wing_wire_joint)_2"
                      position={[-0.019, 0.051, 0.026]}
                      rotation={[-1.083, 1.57, 0]}
                    >
                      <group name="Body_1_10">
                        <group name="3DGeom~164_2">
                          <mesh
                            name="3DGeom~164_2_Mtla_0"
                            geometry={nodes["3DGeom~164_2_Mtla_0"].geometry}
                            material={materials.Mtla}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="Wooden_Flying_Bird_Mobile_(assembled_wing)_2">
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wing)_2"
                      position={[0.036, 0.005, -0.008]}
                      rotation={[-0.493, 0, 1.101]}
                    >
                      <group name="Body_1_11">
                        <group name="3DGeom~160_2">
                          <mesh
                            name="3DGeom~160_2_Mtl8_0"
                            geometry={nodes["3DGeom~160_2_Mtl8_0"].geometry}
                            material={materials.Mtl8}
                          />
                        </group>
                        <group name="3DGeom~159_2">
                          <mesh
                            name="3DGeom~159_2_Mtl9_0"
                            geometry={nodes["3DGeom~159_2_Mtl9_0"].geometry}
                            material={materials.Mtl9}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wing_wire_joint)_3"
                      position={[0.018, -0.055, 0.021]}
                      rotation={[1.078, 1.57, 0]}
                    >
                      <group name="Body_1_12">
                        <group name="3DGeom~164_3">
                          <mesh
                            name="3DGeom~164_3_Mtla_0"
                            geometry={nodes["3DGeom~164_3_Mtla_0"].geometry}
                            material={materials.Mtla}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Wooden_Flying_Bird_Mobile_(wing_wire_joint)_4"
                      position={[-0.019, -0.055, 0.021]}
                      rotation={[1.078, 1.57, 0]}
                    >
                      <group name="Body_1_13">
                        <group name="3DGeom~164_4">
                          <mesh
                            name="3DGeom~164_4_Mtla_0"
                            geometry={nodes["3DGeom~164_4_Mtla_0"].geometry}
                            material={materials.Mtla}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(top_dowel)"
                    position={[0, 0, 0.162]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                  >
                    <group name="Body_1_14">
                      <group name="3DGeom~177">
                        <mesh
                          name="3DGeom~177_textureb_0"
                          geometry={nodes["3DGeom~177_textureb_0"].geometry}
                          material={materials.textureb}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(top_dowel_wire_joint)"
                    position={[0, 0.055, 0.157]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Body_1_15">
                      <group name="3DGeom~181">
                        <mesh
                          name="3DGeom~181_Mtla_0"
                          geometry={nodes["3DGeom~181_Mtla_0"].geometry}
                          material={materials.Mtla}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(top_dowel_wire_joint)_2"
                    position={[0, -0.055, 0.157]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Body_1_16">
                      <group name="3DGeom~181_2">
                        <mesh
                          name="3DGeom~181_2_Mtla_0"
                          geometry={nodes["3DGeom~181_2_Mtla_0"].geometry}
                          material={materials.Mtla}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(wires)"
                    position={[0.018, 0.051, 0.026]}
                    rotation={[1.541, -0.001, 0.138]}
                  >
                    <group name="Body_1_17">
                      <group name="3DGeom~186">
                        <mesh
                          name="3DGeom~186_Mtl11_0"
                          geometry={nodes["3DGeom~186_Mtl11_0"].geometry}
                          material={materials.Mtl11}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(wires)_2"
                    position={[-0.019, 0.051, 0.026]}
                    rotation={[1.543, 0.005, -0.143]}
                  >
                    <group name="Body_1_18">
                      <group name="3DGeom~186_2">
                        <mesh
                          name="3DGeom~186_2_Mtl11_0"
                          geometry={nodes["3DGeom~186_2_Mtl11_0"].geometry}
                          material={materials.Mtl11}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(wires)_3"
                    position={[0.018, -0.052, 0.026]}
                    rotation={[1.594, 0.005, 0.138]}
                  >
                    <group name="Body_1_19">
                      <group name="3DGeom~186_3">
                        <mesh
                          name="3DGeom~186_3_Mtl11_0"
                          geometry={nodes["3DGeom~186_3_Mtl11_0"].geometry}
                          material={materials.Mtl11}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(wires)_4"
                    position={[-0.019, -0.052, 0.026]}
                    rotation={[1.593, -0.004, -0.143]}
                  >
                    <group name="Body_1_20">
                      <group name="3DGeom~186_4">
                        <mesh
                          name="3DGeom~186_4_Mtl11_0"
                          geometry={nodes["3DGeom~186_4_Mtl11_0"].geometry}
                          material={materials.Mtl11}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(wires)_5"
                    position={[0, 0.055, 0.167]}
                    rotation={[1.999, -0.06, -0.012]}
                  >
                    <group name="Body_1_21">
                      <group name="3DGeom~186_5">
                        <mesh
                          name="3DGeom~186_5_Mtl11_0"
                          geometry={nodes["3DGeom~186_5_Mtl11_0"].geometry}
                          material={materials.Mtl11}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Wooden_Flying_Bird_Mobile_(wires)_6"
                    position={[0, -0.055, 0.167]}
                    rotation={[-2.002, 0.186, -3.129]}
                  >
                    <group name="Body_1_22">
                      <group name="3DGeom~186_6">
                        <mesh
                          name="3DGeom~186_6_Mtl11_0"
                          geometry={nodes["3DGeom~186_6_Mtl11_0"].geometry}
                          material={materials.Mtl11}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}



export default Bird;
