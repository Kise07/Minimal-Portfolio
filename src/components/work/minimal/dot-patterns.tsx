import { cn } from "@/lib/utils";

export const DotPatterns = () => {
  return (
    <Dots className="h-48 w-full rounded-full bg-neutral-900 text-neutral-100 dark:bg-neutral-700">
      <span className="rounded-full p-2 transition-all duration-300 hover:scale-95 hover:outline active:scale-95 active:outline">
        Dot Patterns
      </span>
    </Dots>
  );
};

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
        "flex items-center justify-center rounded-xl dark:bg-neutral-900",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 0.9px 0.9px, rgba(115,115,115) 0.5px, transparent 0)`,
        backgroundSize: "5px 5px",
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};
