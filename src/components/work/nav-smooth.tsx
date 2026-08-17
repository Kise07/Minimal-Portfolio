"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

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
      <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="w-full relative group py-3 text-center text-xs text-neutral-500"
            href={item.href}
            key={item.title}
          >
            <span className="relative group-hover:text-neutral-400 text-neutral-500 z-20">
              {item.title}
            </span>
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-full h-full w-full bg-black"
              ></motion.div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};
