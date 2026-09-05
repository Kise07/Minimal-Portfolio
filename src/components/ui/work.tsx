"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TransitionPanel } from "../work/minimal/transition-panel";
import { AnimateText } from "../work/animated-text";
import { Xanimation } from "../work/x-animation";
import { AnimationSequences } from "../work/animation-sequences";
import { SubmitButton } from "../work/animationSequence/animate-submit-btn";
import { AnimateBackground } from "../work/animationSequence/animate-bg";
import { HoverExit } from "../work/hover-exit";
import { ButtonEffect } from "../work/react-animations/button-effect";
import { TransitionExploration } from "../work/react-animations/tansition-exploration";
import { SkewedButtonSecond } from "../work/react-animations/skewed-button-types";
import { SkewedButton } from "../work/react-animations/skewed-button";
import { NavSmooth } from "../work/layouts/nav-smooth";
import { MovingAvatar } from "../work/layouts/moving-avatar";
import { CardsGrid } from "../work/layouts/cards-grid-layout";
import { LayoutCards } from "../work/layouts/layout-cards";
import { ExpendedButtons } from "../work/layouts/expanded-btn";
import { cn } from "../../../lib/utils";
import { RefreshIcon } from "../svgs/svgs";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

const WorkCard = ({
  name,
  category,
  component: Component,
}: {
  name: string;
  category: string;
  component: React.ComponentType;
}) => {
  const [key, setKey] = useState(0);

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4">
      <div className="flex items-center justify-center min-h-dvh overflow-hidden rounded-lg">
        <Component key={key} />
      </div>
      <div className="flex items-center justify-between mt-3">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {category}
          </span>
          <button
            onClick={() => setKey((k) => k + 1)}
            className="p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label={`Refresh ${name}`}
          >
            <RefreshIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const WORKS = [
  { name: "Animate Text", category: "Text Animation", component: AnimateText },
  {
    name: "X Logo Spotlight",
    category: "SVG Interaction",
    component: Xanimation,
  },
  {
    name: "Animation Sequences",
    category: "Multi-phase",
    component: AnimationSequences,
  },
  {
    name: "Submit Button",
    category: "Button Animation",
    component: SubmitButton,
  },
  {
    name: "Animate Background",
    category: "Background Effect",
    component: AnimateBackground,
  },
  { name: "Hover Exit", category: "Card Animation", component: HoverExit },
  {
    name: "3D Glow Button",
    category: "3D Interaction",
    component: ButtonEffect,
  },
  {
    name: "Transition Exploration",
    category: "Transition Compare",
    component: TransitionExploration,
  },
  {
    name: "Skewed Buttons",
    category: "Hover Effects",
    component: SkewedButtonSecond,
  },
  { name: "Skewed Button", category: "3D Tilt", component: SkewedButton },
  { name: "Nav Smooth", category: "Navigation", component: NavSmooth },
  {
    name: "Moving Avatar",
    category: "Position Animation",
    component: MovingAvatar,
  },
  { name: "Cards Grid", category: "Layout Animation", component: CardsGrid },
  { name: "Layout Cards", category: "Shared Layout", component: LayoutCards },
  {
    name: "Expanded Buttons",
    category: "Toggle Animation",
    component: ExpendedButtons,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: index * 0.1 }}
      className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4"
    >
      <div className="overflow-hidden rounded-lg">
        <video
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full aspect-video object-cover"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {project.name}
        </h3>
        <div className="flex items-center gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <IconLink className="size-4 text-neutral-500 dark:text-neutral-400" />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <IconBrandGithub className="size-4 text-neutral-500 dark:text-neutral-400" />
            </a>
          )}
        </div>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-[11px]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const PROJECTS = [
  {
    name: "Job Board MVP",
    description:
      "Junior-friendly job opportunities from Hacker News, updated daily.",
    videoUrl:
      "https://pub-d3c342b4d8e242deb0f60d25f55981ac.r2.dev/videos/demos/jobboardmvp/jobboardmvp-demo.mp4",
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
  },
];

const TABS = ["Works", "Projects"] as const;

export const Works = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <div className={cn("m-4 col-span-2 flex flex-col", className)}>
      {/* NavSmooth-style sliding pill tabs */}
      <div className="mb-4 bg-neutral-200 dark:bg-neutral-800 rounded-full p-1 flex w-fit">
        {TABS.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            onMouseEnter={() => setHoveredTab(index)}
            onMouseLeave={() => setHoveredTab(null)}
            className="relative px-4 py-2 text-sm font-medium z-20"
          >
            {(hoveredTab === index || activeTab === index) && (
              <motion.div
                layoutId="work-tab"
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-neutral-100"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span
              className={cn(
                "relative z-20 px-10 py-20 transition-colors duration-200",
                activeTab === index
                  ? "text-neutral-100 text-sm font-medium dark:text-neutral-900"
                  : "text-neutral-500 text-sm font-medium dark:text-neutral-400",
              )}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content with TransitionPanel */}
      <div className="overflow-hidden">
        <TransitionPanel
          activeIndex={activeTab}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {/* Works tab — scrollable card list */}
          <div className="overflow-y-auto scrollbar-none max-h-[calc(100vh-12rem)]">
            <div className="grid grid-cols-1 gap-4 py-2">
              {WORKS.map((work) => (
                <WorkCard key={work.name} {...work} />
              ))}
            </div>
          </div>

          {/* Projects tab */}
          <div className="overflow-y-auto scrollbar-none max-h-[calc(100vh-12rem)]">
            <div className="grid grid-cols-1 gap-4 py-2">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </TransitionPanel>
      </div>
    </div>
  );
};
