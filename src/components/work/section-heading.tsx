"use client";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

export const SectionHeadingStyle = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay: number;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "relative mt-4 w-fit max-w-lg text-sm font-normal md:text-sm",
        className,
      )}
    >
      <BackgroundStyle />
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: delay + idx * 0.05,
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={word + idx}
          viewport={{ once: true }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};

const BackgroundStyle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100"
    >
      <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200"></div>
      <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-200"></div>
      <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200"></div>
      <div className="absolute -bottom-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-200"></div>
    </motion.div>
  );
};
