"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

export const ExpendedButtons = () => {
  const [expanded, setExpanded] = useState(false);

  const [expandedSecond, setExpandedSecond] = useState(false);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-20 py-10 sm:flex-row">
      <div className="flex w-40 flex-col items-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded-full bg-blue-500 px-4 py-2 text-base font-medium text-white text-shadow-md md:text-xl"
        >
          <span>{expanded ? "Unsubscribe" : "Subscribe"}</span>
        </button>
        <span className="mt-2 text-sm text-neutral-500">w/0 layout</span>
      </div>
      <div className="flex w-40 flex-col items-center">
        <motion.button
          layout
          onClick={() => setExpandedSecond(!expandedSecond)}
          className="relative overflow-hidden rounded-full bg-blue-500 px-4 py-2 text-base font-medium text-white text-shadow-md"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              layoutId="expanded"
              exit={{ y: 25, opacity: 0, filter: "blur(10px)" }}
              className="inline-block"
              transition={{ duration: 0.3, ease: "easeOut" }}
              key={expandedSecond ? "unsubscribe" : "subscribe"}
            >
              {expandedSecond ? "Unsubscribe" : "Subscribe"}
            </motion.span>
          </AnimatePresence>
        </motion.button>
        <span className="mt-2 text-sm text-neutral-500">with layout</span>
      </div>
    </div>
  );
};
