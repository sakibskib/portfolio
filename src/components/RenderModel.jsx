"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
    // width set to screen and height set to screen
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
      // dpr is the device pixel ratio. Here we are setting it to 1 and 2 for retina displays to prevent blurriness in the model rendering on high resolution screens.
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default RenderModel;
