import { cn } from "../../../../lib/utils";

export const DotPatterns = () => {
  return (
    <Dots className="w-full h-48 rounded-full text-neutral-100 bg-neutral-900 dark:bg-neutral-700">
      <span className="hover:ring-2 p-2 rounded-full">Dot Patterns</span></Dots>
  )
}

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
