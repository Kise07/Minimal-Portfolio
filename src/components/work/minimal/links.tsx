"use client";
import Link from "next/link";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export const Links = [
  {
    href: "https://x.com/sebas_azmi07",
    icon: IconBrandX,
    label: "X",
  },
  {
    href: "https://linkedin.com/in/kise07",
    icon: IconBrandLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/kise07",
    icon: IconBrandGithub,
    label: "GitHub",
  },
];

const motionStyles = { rotate: 10, x: -5, y: 5 };
export const UsersLinks = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Links.map((link) => (
        <Link key={link.href} href={link.href} target="_blank" rel="noreferrer">
          <motion.button
            whileHover={motionStyles}
            whileTap={motionStyles}
            className="relative isolate flex h-8 items-center rounded-xl bg-slate-900/1 px-2 font-medium whitespace-nowrap shadow-[0_1px_1px_-0.5px,0_2px_2px_-1px,0_4px_4px_-2px,0_8px_8px_-4px] ring-[0.5px] inset-shadow-[0_1.5px_1px_theme(colors.white/90%),0_-1.5px_1px_theme(colors.white/90%),0_6px_6px_-3px_theme(colors.slate.900/8%),0_-4px_4px_-2px_theme(colors.slate.900/10%)] shadow-slate-900/6 ring-slate-900/12 backdrop-blur-lg transition-colors before:absolute before:inset-x-2 before:bottom-0 before:-z-1 before:h-2 before:translate-y-1/2 before:rounded-[inherit] before:bg-gradient-to-r before:from-sky-200 before:via-pink-200 before:to-orange-200 before:blur hover:bg-white"
          >
            <link.icon className="size-5" />
          </motion.button>
        </Link>
      ))}
    </div>
  );
};
