"use client";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  MotionProps,
  Transition,
  Variant,
} from "motion/react";
import { useState } from "react";
import { cn } from "../../../../lib/utils";

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      name: "job board mvp",
      description: `junior- friendly job opportunities from hacker news, updated daily.`,
      tech: [
        "next.js 16",
        "react 19",
        "typescript",
        "tailwind css v4",
        "node.js",
        "express 5",
        "redis",
        "vercel",
        "render",
      ],
      link: "https://job-board-mvp-f4n8.vercel.app/",
      github: "https://github.com/kise07/jobboardmvp",
      highlights: [
        "full-stack development (next.js + express)",
        "redis caching (95% fewer api calls)",
        "<100ms api response times",
        "automated daily job fetching with cron",
        "custom domain with https/ssl",
      ],
    },
    {
      name: "link bio",
      description: `a simple link aggregator to showcase all your
 important links in one place.`,
      tech: ["html", "css", "javascript", "vanta.js", "vercel"],
      link: "https://link-in-bio-one-peach.vercel.app/",
      github: "https://github.com/kise07/link-in-bio",
      highlights: [
        "responsive design",
        "easy to customize",
        "fast deployment",
        "animated backgrounds with vanta.js",
      ],
    },
  ];

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`capitalize rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="py-2 space-y-3 text-zinc-600 dark:text-zinc-400"
            >
              <div className="flex gap-4 text-sm">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-900 dark:text-zinc-100 hover:underline-none border rounded-md p-1"
                >
                  <IconLink className="size-4" />
                </a>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 hover:underline-none border rounded-md p-1"
                  >
                    <IconBrandGithub className="size-4" />
                  </a>
                )}
              </div>

              <p className="text-xl">{item.description}</p>
              <ul className="space-y-1 text-xs">
                {item.highlights.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}

export type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

export function TransitionPanel({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  return (
    <div className={cn("relative", className)}>
      <AnimatePresence
        initial={false}
        mode="popLayout"
        custom={motionProps.custom}
      >
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial="enter"
          animate="center"
          exit="exit"
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
