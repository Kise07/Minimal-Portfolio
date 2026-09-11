"use client";

import { useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { RefreshIcon } from "../svgs/svgs";
import {
  AnimateBackground,
  AnimateText,
  CardsGrid,
  DotPatterns,
  ExpendedButtons,
  FirstSkeletonOne,
  FirstSkeletonTwo,
  HoverExit,
  InfiniteSliderVertical,
  LayoutCards,
  MagneticButton,
  MovingAvatar,
  NavbarLayout,
  SecondSkeletonOne,
  SkewedButton,
  SkewedButtonSecond,
  StackCards,
  SubmitButton,
  TestSectionHeading,
  TextLoopBasic,
  TransitionExploration,
} from "../work";
import { TransitionPanel } from "../work/minimal/transition-panel";

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
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg">
        <Component key={key} />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {category}
          </span>
          <button
            onClick={() => setKey((k) => k + 1)}
            className="rounded-md p-1 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
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
    name: "Web UI-1",
    category: "Cards Designs",
    component: FirstSkeletonOne,
  },
  {
    name: "Web UI-2",
    category: "Card Hover Effect",
    component: FirstSkeletonTwo,
  },
  {
    name: "Web UI-3",
    category: "Card Hover Effect",
    component: SecondSkeletonOne,
  },
  {
    name: "Section Heading",
    category: "Section Animation",
    component: TestSectionHeading,
  },
  {
    name: "Arc Dock Cards",
    category: "Drag Animation",
    component: StackCards,
  },
  {
    name: "Navbar Layout",
    category: "Navigation",
    component: NavbarLayout,
  },
  {
    name: "Dot Patterns",
    category: "Background Effect",
    component: DotPatterns,
  },
  {
    name: "Infinite Slider",
    category: "Scroll Animation",
    component: InfiniteSliderVertical,
  },
  {
    name: "Magnetic Button",
    category: "Cursor Interaction",
    component: MagneticButton,
  },
  {
    name: "Text Loop",
    category: "Text Animation",
    component: TextLoopBasic,
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

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg">
        <video
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="h-full object-cover"
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {project.name}
        </h3>
      </div>
    </div>
  );
};

const PROJECTS = [
  {
    id: 1,
    name: "Job Board MVP",
    videoUrl:
      "https://pub-d3c342b4d8e242deb0f60d25f55981ac.r2.dev/videos/demos/jobboardmvp/jobboardmvp-demo.mp4",
  },
  {
    id: 2,
    name: "Link in Bio",
    videoUrl:
      "https://pub-d3c342b4d8e242deb0f60d25f55981ac.r2.dev/videos/demos/linkinbio/linkinbio.mp4",
  },
];

const TABS = ["Works", "Projects"] as const;

export const Works = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <div className={cn("col-span-2 m-4 flex flex-col", className)}>
      {/* NavSmooth-style sliding pill tabs */}
      <div className="mb-4 flex w-fit rounded-full bg-neutral-200 p-1 dark:bg-neutral-800">
        {TABS.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            onMouseEnter={() => setHoveredTab(index)}
            onMouseLeave={() => setHoveredTab(null)}
            className="relative z-20 px-4 py-2 text-sm font-medium"
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
                  ? "text-sm font-medium text-neutral-100 dark:text-neutral-900"
                  : "text-sm font-medium text-neutral-500 dark:text-neutral-400"
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
          <div className="max-h-[calc(100vh-12rem)] scrollbar-none overflow-y-auto">
            <div className="grid auto-rows-[500px] grid-cols-1 gap-4 py-2">
              {WORKS.map((work) => (
                <WorkCard key={work.name} {...work} />
              ))}
            </div>
          </div>

          {/* Projects tab */}
          <div className="max-h-[calc(100vh-12rem)] scrollbar-none overflow-y-auto">
            <div className="grid auto-rows-[500px] grid-cols-1 gap-4 py-2">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </TransitionPanel>
      </div>
    </div>
  );
};
