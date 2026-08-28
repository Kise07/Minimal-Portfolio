import { cn } from "../../../lib/utils";
import { Heading } from "../core/heading";
import { Dots } from "../work/minimal/dot-patterns";
import { ModeToggle } from "./theme-toggle";

export const Profile = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "mt-10 px-4 flex flex-col items-baseline justify-start gap-4",
        className,
      )}
    >
      <div className="flex items-center justify-between w-full">
        <Heading>Shabaz Ansari</Heading>
        <ModeToggle />
      </div>
      <Dots />
    </section>
  );
};
