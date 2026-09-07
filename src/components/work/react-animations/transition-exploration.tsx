"use client";

import { motion } from "motion/react";

const rotate = { rotateX: 40 };
export const TransitionExploration = () => {
  return (
    <div className="h-full w-full items-center justify-center">
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
    <div className="perspective-distant">
      <motion.div
        whileHover={rotate}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="size-40 rounded-md shadow-sm shadow-black/10 ring-1 ring-black/10 p-1 perspective-origin-center"
      >
        <img
          alt="first image"
          src="https://plus.unsplash.com/premium_photo-1732757787074-0f95bf19cf73?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover rounded-md"
        />
      </motion.div>
    </div>
  );
};

const Second = () => {
  return (
    <div className="perspective-distant">
      <motion.div
        whileHover={rotate}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="size-40 rounded-md shadow-sm shadow-black/10 ring-1 ring-black/10 p-1 perspective-origin-center"
      >
        <img
          alt="second image"
          src="https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover rounded-md"
        />
      </motion.div>
    </div>
  );
};

const Third = () => {
  return (
    <div className="perspective-distant">
      <motion.div
        whileHover={rotate}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
        className="size-40 rounded-md shadow-sm shadow-black/10 ring-1 ring-black/10 p-1 perspective-origin-center"
      >
        <img
          alt="third image"
          src="https://plus.unsplash.com/premium_photo-1732757787045-d903f2e88b08?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover rounded-md"
        />
      </motion.div>
    </div>
  );
};

const Fourth = () => {
  return (
    <div className="perspective-distant">
      <motion.div
        whileHover={rotate}
        transition={{
          type: "spring",
          visualDuration: 1,
          bounce: 0.3,
        }}
        className="size-40 rounded-md shadow-sm shadow-black/10 ring-1 ring-black/10 p-1 perspective-origin-center"
      >
        <img
          alt="fourth image"
          src="https://plus.unsplash.com/premium_photo-1732757787074-0f95bf19cf73?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover rounded-md"
        />
      </motion.div>
    </div>
  );
};
