"use client";
import React, { useRef, useMemo, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { useGraph } from '@react-three/fiber';

export default function ComputerModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/computer-transformed.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      
      const actionNames = Object.keys(actions);
      if (actionNames.length > 0) {
        actions[actionNames[0]].play();
      }
    }
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -1.5, 0]} // Adjust position to match the Robot's setup
      scale={[1.2, 1.3, 1.3]} // Scale can be adjusted to fit your scene
      rotation={[0.25, 0, 0]} // Optional rotation adjustment
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/computer-transformed.glb');
