import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Dots } from "./dot-patterns";

export const UsersLinks = () => {
  return (
    <Dots className="px-4 py-2">
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/kise07">
          <IconBrandX className="size-5 text-neutral-500 hover:text-neutral-900" />
        </Link>
        <Link href="https://linkedin.com/in/kise07">
          <IconBrandLinkedin className="size-5 text-neutral-500 hover:text-neutral-900" />
        </Link>
        <Link href="https://github.com/kise07">
          <IconBrandGithub className="size-5 text-neutral-500 hover:text-neutral-900" />
        </Link>
      </div>
    </Dots>
  );
};
