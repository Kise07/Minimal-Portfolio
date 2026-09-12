import Image from "next/image";

import { cn } from "@/lib/utils";

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
        className
      )}
    >
      <div className="flex w-full items-start justify-between">
        <div className="my-2 flex flex-col items-center gap-4">
          <Image
            src="/ava.png"
            alt="avatar"
            width={500}
            height={500}
            className="size-30"
          />
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
