"use client";
import { useState } from "react";

import Link from "next/link";

import { motion } from "motion/react";

export const NavSmooth = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="py-40">
      <nav className="mx-auto flex max-w-xl rounded-full bg-gray-100 px-2 py-1">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="group relative w-full py-3 text-center text-xs text-neutral-500"
            href={item.href}
            key={item.title}
          >
            <span className="relative z-20 text-neutral-500 group-hover:text-neutral-400">
              {item.title}
            </span>
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 h-full w-full rounded-full bg-black"
              ></motion.div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};
