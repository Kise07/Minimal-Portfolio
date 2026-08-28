import { cn } from "../../../../lib/utils";

export const Dots = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-40 w-full bg-neutral-900 rounded-xl flex items-center justify-center",
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 0.9px 0.9px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};
