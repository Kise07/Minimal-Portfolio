"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const SWITCH = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={SWITCH}
      className="size-4 flex items-center justify-center relative border border-dashed rounded-sm border-neutral-500 p-1.5 dark:border-neutral-100"
    >
      <SunIcon
        size={14}
        className="rotate-0 absolute inset-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0"
      />
      <MoonIcon
        size={14}
        className="rotate-90 absolute inset-0 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};
