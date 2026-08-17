"use client";
import { motion } from "motion/react";

export const SkewedButtonSecond = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="py-10 grid grid-cols-2 gap-10 max-w-sm mx-auto">
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
      className="px-8 shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] py-4 rounded-full bg-linear-to-b from-blue-600 to-blue-500 text-white text-shadow-md relative"
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
      className="px-8 shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] py-4 rounded-full bg-linear-to-b from-blue-600 to-blue-500 text-white text-shadow-md relative"
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
      className="px-8 shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] py-4 rounded-full bg-linear-to-b from-blue-600 to-blue-500 text-white text-shadow-md relative"
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
      className="px-8 shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] py-4 rounded-full text-white text-shadow-md relative"
    >
      Background
    </motion.button>
  );
};
