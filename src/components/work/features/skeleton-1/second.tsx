import {
  IconCheck,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";
import { cn } from "../../../../../lib/utils";

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(30deg) rotateZ(-10deg)",
      }}
      className={cn(
        "group mx-auto my-auto flex h-65 w-full max-w-[55%] flex-col rounded-2xl border border-neutral-300 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
      )}
    >
      <div className="flex items-center gap-3 text-base">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-normal text-black dark:text-neutral-600">
          Job Board - Data Processing
        </p>
      </div>
      <div className="relative mt-4 flex-1 rounded-2xl border border-neutral-200 bg-neutral-200">
        <Pattern />
        <div className="absolute border border-neutral-200 inset-0 h-full w-full translate-x-12 -translate-y-2 scale-110 rounded-2xl bg-white transition-all duration-300 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:scale-100">
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Fetching Data"
            time="10s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Processing Data"
            time="20s"
          />
          <GradientHr />
          <Row
            icon={<IconLoader2 className="size-3 animate-spin stroke-white" />}
            text="Performing Action"
            time="50s"
            variant="warning"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Waiting for Client Rendering"
            time="50s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Success!"
            time="50s"
          />
        </div>
      </div>
    </div>
  );
};

const GradientHr = () => {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
  );
};

const Row = ({
  icon,
  text,
  time,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  variant?: "success" | "warning" | "danger";
}) => {
  return (
    <div className={cn("flex items-center justify-between px-4 py-2")}>
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex size-4 items-center justify-center rounded-full",
            variant === "success" && "bg-green-500",
            variant === "warning" && "bg-yellow-500",
            variant === "danger" && "bg-red-500",
          )}
        >
          {icon}
        </div>
        <p className="text-xs font-medium text-neutral-500 md:text-sm">
          {text}
        </p>
        <div className="flex items-center gap-1 text-neutral-400">
          <IconRipple className={cn("size-3")} />
          <p className="text-[10px] font-bold">{time}</p>
        </div>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  );
};
