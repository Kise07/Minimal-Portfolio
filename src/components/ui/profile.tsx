import { cn } from "../../../lib/utils";
import { Heading } from "../core/heading";
import { UsersLinks } from "../work/minimal/links";
import Flipper from "../work/minimal/text-flipper";
import { TabsTransitionPanel } from "../work/minimal/transition-panel";
import { ModeToggle } from "./theme-toggle";

export const Profile = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "m-6 flex flex-col items-baseline justify-start gap-4",
        className,
      )}
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-center gap-4">
          <img src="/ava.png" alt="avatar" className="size-30" />
          <span>
            Connect with me <UsersLinks />
          </span>
        </div>
        <ModeToggle />
      </div>
      <Heading>Shabaz Ansari</Heading>
      <Flipper />
      <TabsTransitionPanel />
    </section>
  );
};
