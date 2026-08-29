"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";

export default function Flipper({ className }: { className?: string }) {
  const words = [
    "Software Engineer",
    "Design Engineer",
    "Full Stack Developer",
    "Front-end Developer",
    "Vibe Coding Engineer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={cn("flex items-center justify-center h-full", className)}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-secondary relative order-first flex w-fit justify-center overflow-hidden rounded-md px-2 py-0.5 text-sm shadow-sm shadow-black/50 dark:shadow-white/50 ring-1 ring-black/10 dark:ring-white/10 sm:order-last sm:mx-0 sm:mb-0"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            layoutId={`word-${words[currentIndex]}`}
            key={currentIndex}
            initial={{ y: -20, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              x: [0, -2, 2, 0],
            }}
            exit={{ y: 20, filter: "blur(10px)" }}
            transition={{
              duration: 0.5,
              x: {
                duration: 0.4,
                delay: 0.5,
              },
            }}
            className="inline-block whitespace-nowrap"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>{" "}
      </motion.div>
    </div>
  );
}
