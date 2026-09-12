"use client";

import { type MouseEvent, useRef, useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const STRENGTH = 1;
const MAX_DISTANCE = 200;

export const MagneticButtonDemo = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <MagneticButton>Magnetic Button</MagneticButton>
    </div>
  );
};

function MagneticButton({
  children,
  className,
  onClick,
  active,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    let x = (clientX - (left + width / 2)) * STRENGTH;
    let y = (clientY - (top + height / 2)) * STRENGTH;

    const distance = Math.hypot(x, y);
    if (distance > MAX_DISTANCE) {
      const scale = MAX_DISTANCE / distance;
      x *= scale;
      y *= scale;
    }

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const hasMoved = position.x !== 0 || position.y !== 0;

  return (
    <div
      className="rounded-lg border border-dashed transition-colors duration-500 [--show-color:var(--color-neutral-500)] dark:[--show-color:var(--color-neutral-600)]"
      style={{
        borderColor: hasMoved ? "var(--show-color)" : "transparent",
        backgroundColor: hasMoved
          ? "color-mix(in srgb, var(--show-color) 10%, transparent)"
          : "transparent",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
        animate={{ x: position.x, y: position.y }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <button
          onClick={onClick}
          className={cn(
            "relative rounded-lg bg-linear-to-b from-neutral-500 to-neutral-700 px-4 py-2 font-medium text-white transition duration-200 active:scale-98",
            active
              ? "bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
              : "bg-linear-to-b from-neutral-500 to-neutral-700 text-white",
            className
          )}
        >
          {children}
        </button>
      </motion.div>
    </div>
  );
}

export { MagneticButton };
