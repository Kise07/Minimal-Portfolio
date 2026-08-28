import { cn } from "../../../lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full max-w-xl", className)}>{children}</div>
  );
};
