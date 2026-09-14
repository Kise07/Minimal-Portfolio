import StackedItems from "./stacked-hover-items";

export const TechStack = () => {
  return (
    <div className="mb-4 flex w-full flex-row items-center justify-center gap-4 overflow-hidden rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-50 p-2 font-mono text-neutral-800 shadow-lg ring-1 ring-blue-200 dark:from-neutral-900 dark:to-neutral-800 dark:text-neutral-300 dark:ring-0">
      <p className="flex h-10 items-center justify-center rounded-[5px] border bg-neutral-100 px-2 text-xs text-neutral-600 shadow-lg dark:bg-[rgba(248,248,248,0.01)] dark:text-neutral-400">
        Tech Stack
      </p>
      <StackedItems />
    </div>
  );
};
