"use client";
import { motion } from "motion/react";

import { Greetings, Role } from "./text-loop";

export const IntroLines = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true }}
      className={"text-sm text-neutral-600 dark:text-neutral-400 " + className}
    >
      {" "}
      <Greetings className="mb-4" />
      <div>
        <span className="tracking-wide text-pretty md:text-balance">
          I&apos;m a{" "}
          <Role className="mx-2 rounded-md px-2 py-0.5 text-sm shadow-sm ring-1 shadow-black/50 ring-black/10 sm:order-last sm:mx-0 sm:mb-0 dark:shadow-white/50 dark:ring-white/10" />{" "}
          .
          <br />I enjoy taking an idea, breaking it down, and turning it into
          something people can use.
          <p>
            Most of my time goes into building for the web, learning new
            technologies, and experimenting with interfaces, motion, and
            interactions.
            <br />
            This is a collection of the things I&apos;ve built, learned, and
            enjoyed along the way.
          </p>
        </span>
      </div>
    </motion.div>
  );
};
