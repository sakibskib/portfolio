"use client";
import React, { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      setFireflies((currentFireflies) => [
        ...currentFireflies.slice(-30),
        newFirefly,
      ]);
    };

    const interval = setInterval(addFireflyPeriodically, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {fireflies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[15px] h-[15px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
