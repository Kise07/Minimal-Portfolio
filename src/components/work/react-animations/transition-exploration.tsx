"use client";

import Image from "next/image";

import { motion } from "motion/react";

const rotate = { rotateX: 40 };
const scale = { scale: 0.95 };
export const TransitionExploration = () => {
  return (
    <div className="h-full w-full items-center justify-center">
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
    <div className="perspective-distant">
      <motion.div
        whileHover={rotate}
        whileTap={scale}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="rounded-md p-1 shadow-sm ring-1 shadow-black/10 ring-black/10 perspective-origin-center md:size-40"
      >
        <Image
          width={500}
          height={500}
          alt="first image"
          src="https://plus.unsplash.com/premium_photo-1732757787074-0f95bf19cf73?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full rounded-md object-cover"
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
        whileTap={scale}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="rounded-md p-1 shadow-sm ring-1 shadow-black/10 ring-black/10 perspective-origin-center md:size-40"
      >
        <Image
          width={500}
          height={500}
          alt="second image"
          src="https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full rounded-md object-cover"
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
        whileTap={scale}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
        className="rounded-md p-1 shadow-sm ring-1 shadow-black/10 ring-black/10 perspective-origin-center md:size-40"
      >
        <Image
          width={500}
          height={500}
          alt="third image"
          src="https://plus.unsplash.com/premium_photo-1732757787045-d903f2e88b08?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full rounded-md object-cover"
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
        whileTap={scale}
        transition={{
          type: "spring",
          visualDuration: 1,
          bounce: 0.3,
        }}
        className="rounded-md p-1 shadow-sm ring-1 shadow-black/10 ring-black/10 perspective-origin-center md:size-40"
      >
        <Image
          width={500}
          height={500}
          alt="fourth image"
          src="https://plus.unsplash.com/premium_photo-1732757787074-0f95bf19cf73?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full rounded-md object-cover"
        />
      </motion.div>
    </div>
  );
};
