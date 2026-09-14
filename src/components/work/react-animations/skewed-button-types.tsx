"use client";
import { motion } from "motion/react";

export const SkewedButtonSecond = () => {
  return (
    <div className="flex h-full w-full items-center justify-center text-[10px] md:text-sm">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-10 py-10">
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
    </div>
  );
};

const rotate = { rotate: -10 };
const First = () => {
  return (
    <motion.button
      whileHover={rotate}
      whileTap={rotate}
      className="relative rounded-full bg-linear-to-b from-blue-600 to-blue-500 px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Rotate
    </motion.button>
  );
};

const translate = { x: -10 };
const Second = () => {
  return (
    <motion.button
      whileHover={translate}
      whileTap={translate}
      className="relative rounded-full bg-linear-to-b from-blue-600 to-blue-500 px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Translate
    </motion.button>
  );
};

const translateY = { y: -10 };
const Third = () => {
  return (
    <motion.button
      whileHover={translateY}
      whileTap={translateY}
      className="relative rounded-full bg-linear-to-b from-blue-600 to-blue-500 px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Translate Y
    </motion.button>
  );
};

const bgColor = { backgroundColor: "var(--color-blue-400)" };
const Fourth = () => {
  return (
    <motion.button
      initial={{
        backgroundColor: "var(--color-blue-500)",
      }}
      whileHover={bgColor}
      whileTap={bgColor}
      className="relative rounded-full px-8 py-4 text-white shadow-[0px_2px_0px_0px_var(--color-blue-400)_inset] text-shadow-md"
    >
      Background
    </motion.button>
  );
};
