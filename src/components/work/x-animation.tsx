"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export const Xanimation = () => {
  return (
    <div className="flex items-center justify-center gap-10 bg-black p-4">
      <SVGAnimation />
    </div>
  );
};

function SVGAnimation() {
  // Animation starts
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Effects starts using mouse movements
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", onMouse);

    return () => window.removeEventListener("mousemove", onMouse);
  }, [mouseX, mouseY]);

  // motion constrains
  const cx = useSpring(useTransform(mouseX, [0, 1], [80, 400]), {
    stiffness: 100,
    damping: 10,
  });
  const cy = useSpring(useTransform(mouseY, [0, 1], [80, 410]), {
    stiffness: 100,
    damping: 10,
  });

  return (
    // SVG
    <div>
      <motion.svg
        aria-label="X"
        role="img"
        fill="none"
        viewBox="0 0 480 490"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[480px]"
      >
        <defs>
          <motion.radialGradient
            id="myGradient"
            cx={cx}
            cy={cy}
            r="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-white)"></stop>
            <stop offset="1" stopColor="var(--color-white)"></stop>
            <stop
              offset="1"
              stopColor="var(--color-white)"
              stopOpacity="0"
            ></stop>
          </motion.radialGradient>
        </defs>
        <path
          d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
          fill="#222222"
          className="dark:fill-black"
        ></path>
        <path
          d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="3"
          className="dark:stroke-[#222222]"
        ></path>
        {/* light pattern stroke with gradient */}
        <path
          d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
          strokeLinejoin="round"
          strokeWidth="3"
          stroke="url(#myGradient)"
        ></path>
      </motion.svg>
    </div>
  );
}
