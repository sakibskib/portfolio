"use client";
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ComputerModel = React.memo(function ComputerModel(props) {
  const { nodes, materials } = useGLTF('/models/pi-transformed.glb');
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group ref={modelRef} {...props} dispose={null} scale={[0.4, 0.4, 0.4]} rotation={[0.4, -1, 0]} position={[0, 0, 0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.palette} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
});

export default ComputerModel;

useGLTF.preload('/models/pi-transformed.glb');
