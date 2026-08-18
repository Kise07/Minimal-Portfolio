"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const ExpendedButtons = () => {
  const [expanded, setExpanded] = useState(false);

  const [expandedSecond, setExpandedSecond] = useState(false);

  return (
    <div className="flex items-center flex-col sm:flex-row justify-center py-10 gap-20 h-full">
      <div className="flex flex-col items-center w-40">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 rounded-full bg-blue-500 text-base font-medium text-shadow-md text-white"
        >
          <span>{expanded ? "Unsubscribe" : "Subscribe"}</span>
        </button>
        <span className="text-neutral-500 text-sm mt-2">w/0 layout</span>
      </div>
      <div className="flex flex-col items-center w-40">
        <motion.button
          layout
          onClick={() => setExpandedSecond(!expandedSecond)}
          className="px-4 py-2 rounded-full relative overflow-hidden bg-blue-500 text-base font-medium text-shadow-md text-white"
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
        <span className="text-neutral-500 text-sm mt-2">with layout</span>
      </div>
    </div>
  );
};
