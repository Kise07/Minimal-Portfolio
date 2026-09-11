import { cn } from "@/lib/utils";

export const ScalesY = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "w-full overflow-x-hidden border-y border-y-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]",
          "relative left-1/2 w-screen -translate-x-1/2",
          className
        )}
      ></div>
    </>
  );
};
