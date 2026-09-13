"use client";

import { useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { MagneticButton } from "../work";
import { TransitionPanel } from "../work/minimal/transition-panel";
import { ProjectCard, PROJECTS } from "./project-card";
import { ResumeViewer } from "./resume-viewer";
import { WorkCard, WORKS } from "./work-card";

const TABS = ["Works", "Projects"] as const;

export const Works = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [showResume, setShowResume] = useState(false);

  return (
    <div className={cn("col-span-2 m-4 flex flex-col", className)}>
      {/* Header: tabs left, Resume button right */}
      <div className="mb-4 flex items-center justify-between">
        {/* Sliding pill tabs */}
        <div className="flex w-fit rounded-xl bg-neutral-200 p-1 dark:bg-neutral-800">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(index);
                setShowResume(false);
              }}
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative z-20 rounded-xl p-1 text-sm md:px-4 md:py-2 md:font-medium"
            >
              {(hoveredTab === index || activeTab === index) && (
                <motion.div
                  layoutId="work-tab"
                  className="absolute inset-0 rounded-xl bg-neutral-900 dark:bg-neutral-100"
                  style={{ opacity: showResume ? 0 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span
                className={cn(
                  "relative z-20 px-10 transition-colors duration-200",
                  activeTab === index && !showResume
                    ? "text-sm font-medium text-neutral-100 dark:text-neutral-900"
                    : "text-sm font-medium text-neutral-500 dark:text-neutral-400"
                )}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Resume button */}
        <MagneticButton
          onClick={() => setShowResume(true)}
          active={showResume}
          className="px-4 py-2"
        >
          Resume
        </MagneticButton>
      </div>

      {/* Content */}
      <div className="overflow-hidden">
        {showResume ? (
          <div className="h-[calc(100vh-12rem)]">
            <ResumeViewer />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};
