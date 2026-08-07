"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
    // width set to screen and height set to screen
      className={clsx("w-full h-full relative", className)}
      shadows={false}
      dpr={[1.5, 3]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      // Higher DPR and antialiasing keep the model crisp on retina and high-DPI displays.
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default RenderModel;
