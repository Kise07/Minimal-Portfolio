import Link from "next/link";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export const UsersLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link href="https://x.com/sebas_azmi07">
        <IconBrandX className="size-5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" />
      </Link>
      <Link href="https://linkedin.com/in/kise07">
        <IconBrandLinkedin className="size-5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" />
      </Link>
      <Link href="https://github.com/kise07">
        <IconBrandGithub className="size-5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" />
      </Link>
    </div>
  );
};
