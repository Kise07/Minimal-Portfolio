"use client";
import {
  IconBrandSafari,
  IconFolder,
  IconMail,
  IconMusic,
  IconX,
  type Icon,
} from "@tabler/icons-react";
import { arc, motion } from "motion/react";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

const cardImage =
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const controls = {
  peak: [0.5, 0, 1, 0.05],
  strength: [0.5, 0, 1, 0.05],
  rotate: false,
  direction: {
    type: "select",
    options: [
      { value: "auto", label: "Auto" },
      { value: "cw", label: "Clockwise" },
      { value: "ccw", label: "Counter-clockwise" },
    ],
    default: "auto",
  },
};

type StackCardsProps = {
  peak?: number;
  strength?: number;
  rotate?: boolean;
  direction?: "auto" | "cw" | "ccw";
};

const dockItems: Array<{
  label: string;
  Icon: Icon;
  center: string;
  edge: string;
}> = [
  {
    label: "Safari",
    Icon: IconBrandSafari,
    center: "var(--color-blue-300)",
    edge: "var(--color-blue-700)",
  },
  {
    label: "Files",
    Icon: IconFolder,
    center: "var(--color-amber-200)",
    edge: "var(--color-amber-600)",
  },
  {
    label: "Mail",
    Icon: IconMail,
    center: "var(--color-sky-200)",
    edge: "var(--color-sky-600)",
  },
  {
    label: "Music",
    Icon: IconMusic,
    center: "var(--color-rose-300)",
    edge: "var(--color-rose-700)",
  },
];

function StackCards({
  peak = 0.5,
  strength = 0.5,
  rotate = false,
  direction = "auto",
}: StackCardsProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const arcPath = useMemo(
    () =>
      arc({
        direction: direction === "auto" ? undefined : direction,
        peak,
        rotate,
        strength,
      }),
    [direction, peak, rotate, strength],
  );

  return (
    <div
      className="relative flex h-dvh w-full items-end justify-center overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      {!isMinimized ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            layoutId="card-image-container"
            drag
            dragMomentum={false}
            className="pointer-events-auto z-20 flex w-72 max-w-[calc(100%-2rem)] cursor-grab flex-col overflow-hidden rounded-2xl bg-white p-1 shadow-sm shadow-black/10 ring-1 ring-black/10 active:cursor-grabbing"
            transition={{
              path: arcPath,
            }}
          >
            <div className="flex min-h-10 items-center justify-between gap-2 px-2 py-1">
              <span className="min-w-0 truncate px-1 font-mono text-xs text-neutral-500">
                Monterey.jpg
              </span>
              <button
                aria-label="Minimize image to dock"
                className="relative flex size-8 items-center justify-center rounded-lg text-neutral-600 active:scale-[0.98] hover:bg-neutral-100 hover:text-neutral-950"
                onClick={() => setIsMinimized(true)}
                type="button"
              >
                <IconX className="size-4 shrink-0" />
              </button>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl bg-white shadow-sm ring-1 shadow-black/10 ring-black/10">
              <img
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
                src={cardImage}
              />
            </div>
          </motion.div>
        </div>
      ) : null}

      <motion.div
        layout
        animate={{
          width: isMinimized ? "20rem" : "16rem",
        }}
        className="mx-auto mb-8 flex w-fit max-w-[calc(100%-2rem)] items-start justify-start gap-3 rounded-2xl border border-white/20 bg-white/20 p-3 shadow-[0px_-1px_0px_0px_var(--color-neutral-200),0px_1px_1px_0px_var(--color-neutral-300)] backdrop-blur-sm"
      >
        {dockItems.map(({ label, Icon, center, edge }) => (
          <motion.button
            aria-label={label}
            className="flex size-12 shrink-0 cursor-not-allowed items-center justify-center rounded-xl text-white  transition duration-200 "
            key={label}
            style={
              {
                "--gradient-center": center,
                "--gradient-edge": edge,
                background:
                  "radial-gradient(circle, var(--gradient-center) 0%, var(--gradient-edge) 100%)",
              } as CSSProperties
            }
            type="button"
          >
            <Icon className="size-6" stroke={1.7} />
          </motion.button>
        ))}
        {isMinimized ? (
          <div className="relative shrink-0">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 bottom-16 h-28 w-44 overflow-visible text-white/80 drop-shadow-sm"
              viewBox="0 0 176 112"
            >
              <defs>
                <marker
                  id="stack-cards-click-arrow"
                  markerHeight="8"
                  markerWidth="8"
                  orient="auto"
                  refX="6"
                  refY="4"
                >
                  <path
                    d="M1 1L7 4L1 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </marker>
              </defs>
              <text
                className="font-mono text-[11px]"
                fill="currentColor"
                x="24"
                y="22"
              >
                click here
              </text>
              <path
                d="M84 28C120 36 138 58 136 94"
                fill="none"
                markerEnd="url(#stack-cards-click-arrow)"
                stroke="currentColor"
                strokeDasharray="3 4"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
            <motion.button
              layoutId="card-image-container"
              aria-label="Restore image"
              className="flex size-12 cursor-pointer overflow-hidden rounded-xl bg-white"
              data-dock-preview
              onClick={() => setIsMinimized(false)}
              type="button"
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                path: arcPath,
              }}
            >
              <img
                alt=""
                className="h-full w-full rounded-lg object-cover"
                draggable={false}
                src={cardImage}
              />
            </motion.button>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

export { StackCards };
