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
        "dark:bg-neutral-900 rounded-xl flex items-center justify-center",
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 0.9px 0.9px, rgba(115,115,115) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};
