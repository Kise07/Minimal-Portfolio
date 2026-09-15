import { useState } from "react";

import { RefreshIcon } from "../svgs/svgs";
import {
  AnimateBackground,
  AnimateText,
  CardsGrid,
  DotPatterns,
  ExpendedButtons,
  FirstSkeletonTwo,
  HoverExit,
  InfiniteSliderVertical,
  MagneticButtonDemo,
  MovingAvatar,
  NavbarLayout,
  SecondSkeletonOne,
  SkewedButton,
  SkewedButtonSecond,
  StackCards,
  SubmitButton,
  TestSectionHeading,
  TextLoopBasic,
  TransitionExploration,
} from "../work";

export const WorkCard = ({
  name,
  category,
  component: Component,
}: {
  name: string;
  category: string;
  component: React.ComponentType;
}) => {
  const [key, setKey] = useState(0);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-2 select-none dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg">
        <Component key={key} />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {category}
          </span>
          <button
            onClick={() => setKey((k) => k + 1)}
            className="rounded-md p-1 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
            aria-label={`Refresh ${name}`}
          >
            <RefreshIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export const WORKS = [
  { name: "Animate Text", category: "Text Animation", component: AnimateText },
  {
    name: "Web UI-1",
    category: "Card Hover Effect",
    component: FirstSkeletonTwo,
  },
  {
    name: "Web UI-2",
    category: "Card Auto Effect",
    component: SecondSkeletonOne,
  },
  {
    name: "Section Heading",
    category: "Section Animation",
    component: TestSectionHeading,
  },
  {
    name: "Arc Dock Cards",
    category: "Drag Animation",
    component: StackCards,
  },
  {
    name: "Navbar Layout",
    category: "Navigation",
    component: NavbarLayout,
  },
  {
    name: "Dot Patterns",
    category: "Background Effect",
    component: DotPatterns,
  },
  {
    name: "Infinite Slider",
    category: "Scroll Animation",
    component: InfiniteSliderVertical,
  },
  {
    name: "Magnetic Button",
    category: "Cursor Interaction",
    component: MagneticButtonDemo,
  },
  {
    name: "Text Loop",
    category: "Text Animation",
    component: TextLoopBasic,
  },
  {
    name: "Submit Button",
    category: "Button Animation",
    component: SubmitButton,
  },
  {
    name: "Animate Background",
    category: "Background Effect",
    component: AnimateBackground,
  },
  { name: "Hover Exit", category: "Card Animation", component: HoverExit },
  {
    name: "Transition Exploration",
    category: "Transition Compare",
    component: TransitionExploration,
  },
  {
    name: "Skewed Buttons",
    category: "Hover Effects",
    component: SkewedButtonSecond,
  },
  { name: "Skewed Button", category: "3D Tilt", component: SkewedButton },
  {
    name: "Moving Avatar",
    category: "Position Animation",
    component: MovingAvatar,
  },
  { name: "Cards Grid", category: "Layout Animation", component: CardsGrid },
  {
    name: "Expanded Buttons",
    category: "Toggle Animation",
    component: ExpendedButtons,
  },
];
