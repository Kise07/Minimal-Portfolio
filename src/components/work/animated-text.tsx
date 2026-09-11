"use client";
import { useEffect } from "react";

import { motion, stagger, useAnimate } from "motion/react";

export const AnimateText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  }, [animate]);

  return (
    <div
      ref={scope}
      className="mx-auto max-w-4xl text-4xl font-bold text-neutral-700 dark:text-neutral-400"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          key={word + index}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};
