import Image from "next/image";

import { cn } from "@/lib/utils";

import { Heading } from "../core/heading";
import { IntroLines } from "../work/minimal/intro-lines";
import { UsersLinks } from "../work/minimal/links";
import { TechStack } from "../work/minimal/tech-stack";
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
        {/* 1. Avatar area - left, spans 2 rows */}
        <div
          style={{ gridArea: "avatar" }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src="https://pub-d3c342b4d8e242deb0f60d25f55981ac.r2.dev/images/png/avatar_variations_16_png/avatar_06.png"
            alt="avatar"
            width={500}
            height={500}
            className="size-20 rounded-2xl"
          />
          {/* 2. Name - identity */}
          <Heading>Shabaz Ansari</Heading>
        </div>

        {/* 3. Toggle area - top right */}
        <div
          style={{ gridArea: "toggle" }}
          className="flex items-start justify-end"
        >
          <ModeToggle />
        </div>

        {/* 4. Links area - bottom right */}
        <div
          style={{ gridArea: "links" }}
          className="flex items-center justify-end"
        >
          <span className="text-sm font-medium text-neutral-500 dark:text-neutral-200">
            Connect with me <UsersLinks />
          </span>
        </div>
      </div>

      {/* 5. Intro - short description */}
      <IntroLines className="mb-2" />

      {/* 6. Tech Stack - keywords for recruiters */}
      <TechStack />

      {/* 7. New Implementation */}
      <TabsTransitionPanel />
    </section>
  );
};
