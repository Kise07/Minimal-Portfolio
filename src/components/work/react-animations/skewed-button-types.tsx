"use client";
import { motion } from "motion/react";

const scale = { scale: 0.95 };
export const SkewedButtonSecond = () => {
  return (
    <div className="flex h-full w-full items-center justify-center text-sm md:text-xl">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-10 py-10">
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
    </div>
  );
};

const First = () => {
  return (
    <motion.button
      whileHover={{
        rotate: -10,
      }}
      whileTap={scale}
      className="relative rounded-full bg-linear-to-b from-blue-600 to-blue-500 px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Rotate
    </motion.button>
  );
};

const Second = () => {
  return (
    <motion.button
      whileHover={{
        x: -10,
      }}
      whileTap={scale}
      className="relative rounded-full bg-linear-to-b from-blue-600 to-blue-500 px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Translate
    </motion.button>
  );
};

const Third = () => {
  return (
    <motion.button
      whileHover={{
        y: -10,
      }}
      whileTap={scale}
      className="relative rounded-full bg-linear-to-b from-blue-600 to-blue-500 px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Translate Y
    </motion.button>
  );
};

const Fourth = () => {
  return (
    <motion.button
      initial={{
        backgroundColor: "var(--color-blue-500)",
      }}
      whileHover={{
        backgroundColor: "var(--color-blue-400)",
      }}
      whileTap={scale}
      className="relative rounded-full px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Background
    </motion.button>
  );
};
