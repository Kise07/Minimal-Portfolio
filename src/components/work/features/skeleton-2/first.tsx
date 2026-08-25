"use client";

import {
  CogIcon,
  ErrorIcon,
  FileIcon,
  HubspotIcon,
  SalesforceIcon,
  SheetsIcon,
} from "@/components/svgs/svgs";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "../../../../../lib/utils";
import { CardSkeleton } from "../card-skeleton";

export const SkeletonOne = () => {
  type Item = {
    title: string;
    topIcon: React.ReactNode;
    description: string;
    tags: { text: string; icon: React.ReactNode }[];
  };

  // auto scroll to the bottom of the container when a new card is added
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const items = [
    {
      title: "Connect Data",
      topIcon: <FileIcon className="size-4" />,
      description:
        "Link CRMs, helpdesks, and API to give agents secure, rule-based access.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubsspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Define Processing Logic",
      topIcon: <CogIcon className="size-4" />,
      description:
        "Create workflows, decision points, and conditional actions for each task.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubsspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Human-in-the-Loop",
      topIcon: <ErrorIcon className="size-4" />,
      description:
        "Add reviews, approvals and escalations without slowing work.",
      tags: [
        { text: "Salesforce", icon: <SalesforceIcon className="size-3" /> },
        { text: "Hubsspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Google Sheets", icon: <SheetsIcon className="size-3" /> },
      ],
    },
  ];

  // React Logic to show one card at a time, then add the next card every second until all cards are shown
  const [actveCard, setActiveCard] = useState<Item[] | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveCard((prev) => {
        if (!prev) {
          return [items[0]];
        }
        if (prev.length >= items.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }
        return [items[prev.length], ...prev];
      });
    }, 1000);
  };

  useEffect(() => {
    if (isInView) {
      animate();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="relative inset-x-0 mx-auto flex h-full w-full max-w-[20rem] flex-1 flex-col gap-2 rounded-3xl border border-neutral-200 bg-neutral-100 p-2 lg:max-w-sm"
    >
      {actveCard?.map((item) => (
        <Card key={item?.title} {...item} />
      ))}
    </motion.div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
}) => {
  const randomColors = [
    "var(--color-blue-500)",
    "var(--color-green-500)",
    "var(--color-red-500)",
  ];
  const [bgColor, setBgColor] = useState(randomColors[0]);
  useEffect(() => {
    setBgColor(randomColors[Math.floor(Math.random() * randomColors.length)]);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="flex items-start gap-4 rounded-[16px] border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10"
    >
      <div
        className={cn(
          "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full",
        )}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800">{title}</p>
        <p className="text-sm text-balance text-neutral-600 md:text-base">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag.text} text={tag.text} icon={tag.icon} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div>
      {icon}
      <p>{text}</p>
    </div>
  );
};
