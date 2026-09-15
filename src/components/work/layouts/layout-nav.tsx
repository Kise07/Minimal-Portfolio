"use client";
import { useState } from "react";

import { cn } from "@/lib/utils";

export const NavbarLayout = () => {
  const links = [
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
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Services",
      href: "/services",
    },
  ];

  const [isActive, setIsActive] = useState<string | null>(null);

  return (
    <div>
      <nav>
        {links.map((item) => (
          <button
            key={item.href}
            type="button"
            onClick={() => setIsActive(item.href)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
              "transition-all duration-300 hover:scale-95 active:scale-95 active:hover:text-neutral-900 active:dark:hover:text-neutral-100"
            )}
          >
            {isActive === item.href ? <span /> : null}
            <span className="relative z-20">{item.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
