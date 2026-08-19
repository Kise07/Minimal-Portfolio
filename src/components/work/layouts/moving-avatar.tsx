"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const positions = [
  { left: "12%", top: "18%" },
  { left: "72%", top: "12%" },
  { left: "58%", top: "68%" },
  { left: "18%", top: "74%" },
  { left: "44%", top: "38%" },
];

export const MovingAvatar = () => {
  const [position, setPosition] = useState(positions[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPosition(positions[Math.floor(Math.random() * positions.length)]);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[url('https://assets.aceternity.com/acelearn/world-map.webp')] bg-cover bg-center bg-no-repeat">
      <motion.img
        layoutId="moving-avatar"
        animate={position}
        transition={{
          type: "spring",
          visualDuration: 0.7,
          bounce: 0.1,
        }}
        src="https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="avatar"
        className="absolute size-10 rounded-full shadow-sm shadow-black/10 ring-7 ring-black/10"
      />
    </div>
  );
};
