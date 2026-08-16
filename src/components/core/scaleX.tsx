import { cn } from "../../../lib/utils";

export const ScaleX = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "absolute top-0 right-0 h-full border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed",
          className,
        )}
      ></div>
      <div
        className={cn(
          "absolute top-0 left-0 h-full border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed",
          className,
        )}
      ></div>
    </>
  );
};
