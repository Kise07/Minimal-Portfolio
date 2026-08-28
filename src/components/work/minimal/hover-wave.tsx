import { cn } from "../../../../lib/utils";

export const HoverWave = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-40 w-full rounded-xl flex items-center justify-center",
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 0.9px 0.9px, rgba(125 125 125) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
};
