import { cn } from "@/lib/utils";

export const HoverWave = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-40 w-full items-center justify-center rounded-xl",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 0.9px 0.9px, rgba(125 125 125) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
};
