"use client";
import { useMotionValue, animate, motion } from "motion/react";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { cn } from "../../../../lib/utils";

export function InfiniteSliderVertical() {
  return (
    <div className="flex h-[350px] space-x-4">
      <InfiniteSlider direction="vertical">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
          alt="Dean blunt - Black Metal 2"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
          alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
          alt="Yung Lean - Stardust"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
          alt="A$AP Rocky - Tailor Swif"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
          alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
          className="aspect-square w-[120px] rounded-[4px]"
        />
      </InfiniteSlider>
      <InfiniteSlider direction="vertical" reverse>
        <img
          src="https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"
          alt="DAYS BEFORE RODEO - Travis Scott"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3"
          alt="You're in My System - TORYONTHEBEAT"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655"
          alt="You can't tell me - People Make the World Go Round"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2"
          alt="ye - Kanye West"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350"
          alt="Slime Season 3 - Young Thug"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401"
          alt="SWAG - 8ruki"
          className="aspect-square w-[120px] rounded-[4px]"
        />
      </InfiniteSlider>
    </div>
  );
}

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [isHovering, setIsHovering] = useState(false);
  const currentSpeed = isHovering && speedOnHover ? speedOnHover : speed;
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setIsHovering(true);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setIsHovering(false);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
