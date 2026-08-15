import { cn } from "../../../lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-2xl bg-white dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
