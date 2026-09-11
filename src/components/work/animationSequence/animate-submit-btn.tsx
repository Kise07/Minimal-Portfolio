"use client";

import { type AnimationSequence, useAnimate } from "motion/react";

export const SubmitButton = () => {
  const [scope, animate] = useAnimate();

  const sequence: AnimationSequence = [
    // exit submit text
    [".first", { opacity: 0, filter: "blur(10px)" }, { duration: 0.5 }],
    // animate width of button
    ["button", { width: ["8rem", "14rem"] }],
    // enter second text
    [
      ".second",
      { opacity: 1, filter: "blur(0px)", y: [-40, 0] },
      { duration: 0.5 },
    ],
    // exit second text
    [".second", { opacity: 0 }, { duration: 0.2, at: "+2" }],
    // animate width of button
    ["button", { width: "2.5rem", height: ["2.5rem", "2.5rem"] }],
    // animate bg of button
    ["button", { backgroundColor: "var(--color-green-500)" }, { at: "-0.2" }],
    // animate opacity of checkmark
    ["svg", { opacity: [0, 1] }],
    // animate path length of checkmark
    ["path", { pathLength: [0, 1] }, { at: "-0.2" }],
  ];

  const handleSubmit = () => {
    animate(sequence);
  };

  return (
    <div ref={scope} className="flex h-dvh w-full items-center justify-center">
      <button
        onClick={handleSubmit}
        style={{ width: "8rem" }}
        className="relative flex h-10 w-32 items-center justify-center overflow-hidden rounded-full bg-blue-500 px-4 py-2"
      >
        <span className="first absolute inset-0 m-auto flex h-full w-full items-center justify-center font-medium text-white opacity-100 text-shadow-md">
          Submit
        </span>
        <span className="second pointer-events-none absolute inset-0 flex h-full w-56 items-center justify-center font-medium whitespace-nowrap text-white opacity-0 blur-[10px] text-shadow-md">
          Submitting your form...
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 m-auto text-white opacity-0"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </button>
    </div>
  );
};
