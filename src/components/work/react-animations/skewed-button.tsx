"use client";
import { motion } from "motion/react";

const scale = { scale: 0.95 };
export const SkewedButton = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center perspective-distant">
      <motion.button
        whileHover={{
          rotateX: 40,
          rotateZ: -20,
          boxShadow: "0 12px 48px 0 rgba(0,0,0,0.2)",
        }}
        whileTap={scale}
        className="relative rounded-full bg-linear-to-b from-blue-600 to-blue-500 px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
      >
        Subscribe
      </motion.button>
    </div>
  );
};
