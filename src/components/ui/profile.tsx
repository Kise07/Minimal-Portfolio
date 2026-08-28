import { cn } from "../../../lib/utils";
import { Heading } from "../core/heading";
import { HoverWave } from "../work/minimal/hover-wave";
import { ModeToggle } from "./theme-toggle";

export const Profile = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "m-4 flex flex-col items-baseline justify-start gap-4",
        className,
      )}
    >
      <div className="flex items-start justify-between w-full">
        <img src="/ava.png" alt="avatar" className="size-30" />
        <ModeToggle />
      </div>
      <Heading>Shabaz Ansari</Heading>
      <HoverWave />
    </section>
  );
};
