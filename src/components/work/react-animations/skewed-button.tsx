"use client";
import { motion } from "motion/react";

export const SkewedButton = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full perspective-distant">
      <motion.button
        whileHover={{
          rotateX: 40,
          rotateZ: -20,
          boxShadow: "0 12px 48px 0 rgba(0,0,0,0.2)",
        }}
        className="px-8 shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] py-4 rounded-full bg-linear-to-b from-blue-600 to-blue-500 text-white text-shadow-md relative"
      >
        Subscribe
      </motion.button>
    </div>
  );
};
