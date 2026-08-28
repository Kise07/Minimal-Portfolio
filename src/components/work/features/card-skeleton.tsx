import { cn } from "../../../../lib/utils";

const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-80 flex-col overflow-hidden perspective-distant sm:h-60 md:h-80 p-4 md:p-8 lg:p-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { CardSkeleton };
