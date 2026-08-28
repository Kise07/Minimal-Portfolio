import { cn } from "../../../lib/utils";

export const Works = ({ className }: { className?: string }) => {
  return <div className={cn("col-span-2 text-3xl", className)}>Work</div>;
};
