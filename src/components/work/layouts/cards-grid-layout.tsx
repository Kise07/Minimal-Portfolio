"use client";

import { type RefObject, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

export const CardsGrid = () => {
  const avatars = [
    {
      title: "Tyler Durden",
      description: "Founder of Aceternity",
      src: "https://plus.unsplash.com/premium_photo-1732757787056-bb8a19f1c855?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Alex Thapa",
      description: "Co-Founder of Open AI",
      src: "https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sam Devarkonda",
      description: "Co-Founder of Google",
      src: "https://plus.unsplash.com/premium_photo-1732757787045-d903f2e88b08?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Pitbul Yadav",
      description: "Co-Founder of Microsoft",
      src: "https://plus.unsplash.com/premium_photo-1732757787074-0f95bf19cf73?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [active, setActive] = useState<(typeof avatars)[number] | null>(null);
  const activeCardRef = useRef<HTMLDivElement>(null);

  const isActive = (item: (typeof avatars)[number]) => active?.src === item.src;

  useCloseOnOutsideClickAndEscape({
    enabled: active !== null,
    ref: activeCardRef,
    onClose: () => setActive(null),
  });

  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div className="relative mx-auto w-full max-w-3xl">
        <AnimatePresence mode="popLayout">
          {active && (
            <motion.div
              ref={activeCardRef}
              key={active?.src}
              layoutId={`container-${active?.src}`}
              className="absolute inset-0 -top-20 mx-auto flex size-72 flex-col items-start overflow-hidden rounded-2xl bg-neutral-50 shadow-sm ring-1 shadow-black/10 ring-black/10"
              style={{ zIndex: 100 }}
            >
              <motion.div
                layoutId={`image-${active?.src}`}
                className="h-3/4 w-full overflow-hidden rounded-b-xl object-cover"
              >
                <Image
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <motion.div
                className="p-4"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
              >
                <p className="text-left text-sm font-medium text-neutral-700">
                  {active.title}
                </p>
                <p className="text-left text-xs text-neutral-500">
                  {active.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {avatars.map((item) => (
            <motion.button
              layoutId={`container-${item.src}`}
              key={item.src}
              onClick={() => setActive(item)}
              type="button"
              className="aspect-square w-full overflow-hidden rounded-xl object-cover shadow-sm ring-1 shadow-black/10 ring-black/10"
              style={{
                zIndex: isActive(item) ? 90 : 1,
              }}
            >
              <motion.div
                layoutId={`image-${item.src}`}
                className="h-full w-full rounded-xl object-cover"
              >
                <Image
                  width={500}
                  height={500}
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

function useCloseOnOutsideClickAndEscape({
  enabled,
  ref,
  onClose,
}: {
  enabled: boolean;
  ref: RefObject<HTMLElement | null>;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (ref.current?.contains(target)) return;

      onClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, onClose, ref]);
}
