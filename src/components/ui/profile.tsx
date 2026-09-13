import Image from "next/image";

import { cn } from "@/lib/utils";

import { Heading } from "../core/heading";
import { UsersLinks } from "../work/minimal/links";
import Flipper from "../work/minimal/text-flipper";
import { TabsTransitionPanel } from "../work/minimal/transition-panel";
import { ModeToggle } from "./theme-toggle";

export const Profile = ({ className }: { className?: string }) => {
  return (
    <section className={cn("m-6", className)}>
      {/* New Idea */}
      <div
        className="mb-8 grid gap-4"
        style={{
          gridTemplateAreas: `
          "avatar toggle"
          "avatar links"
          `,
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {/* Avatar area - left, spans 2 rows */}
        <div
          style={{ gridArea: "avatar" }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src="/ava.png"
            alt="avatar"
            width={500}
            height={500}
            className="size-20 md:size-30"
          />
          <Heading>Shabaz Ansari</Heading>
        </div>

        {/* Toggle area - top right */}
        <div
          style={{ gridArea: "toggle" }}
          className="flex items-start justify-end"
        >
          <ModeToggle />
        </div>

        {/* Links area - bottom right */}
        <div
          style={{ gridArea: "links" }}
          className="flex items-center justify-end"
        >
          <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Connect with me <UsersLinks />
          </span>
        </div>
      </div>
      {/* New Implementation */}
      <TabsTransitionPanel />
    </section>
  );
};
