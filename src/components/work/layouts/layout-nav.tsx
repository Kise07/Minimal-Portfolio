"use client";
import { useState } from "react";

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
            onClick={() => setActiveLink(item.href)}
            className="relative rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-950"
          >
            {isActiva(item.href) ? <span /> : null}
            <span className="relative z-20">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
