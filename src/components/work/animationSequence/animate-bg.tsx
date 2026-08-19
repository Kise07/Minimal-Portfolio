"use client";

import { useState, type CSSProperties } from "react";
import { motion, useAnimate } from "motion/react";

export const AnimateBackground = () => {
  const [scope, animate] = useAnimate();
  const COLORS = [
    {
      center: "var(--color-blue-300)",
      edge: "var(--color-blue-700)",
    },
    {
      center: "var(--color-rose-300)",
      edge: "var(--color-rose-700)",
    },
    {
      center: "var(--color-amber-200)",
      edge: "var(--color-amber-700)",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleClick = () => {
    const color = COLORS[index];
    animate(".button-block", {
      "--gradient-center": color.center,
      "--gradient-edge": color.edge,
    });
    setIndex((prev) => (prev + 1) % COLORS.length);
  };

  return (
    <div ref={scope} className="h-dvh w-full flex items-center justify-center">
      <div
        className="button-block w-full h-full flex items-center justify-center"
        style={
          {
            "--gradient-center": "var(--color-neutral-100)",
            "--gradient-edge": "var(--color-neutral-300)",
            background:
              "radial-gradient(circle, var(--gradient-center) 0%, var(--gradient-edge) 100%)",
          } as CSSProperties
        }
      >
        <motion.button
          onClick={handleClick}
          className="bg-black text-white text-shadow-md px-8 py-2 rounded-full active:scale-98 transition duration-200"
        >
          Animate
        </motion.button>
      </div>
    </div>
  );
};
