import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { Container } from "../core/container";
import { cn } from "../../../lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ];

  return (
    <Container className={cn("p-4", className)}>
      <nav>
        {/* // logo and nav lists */}
        <div className="flex items-center justify-between text-neutral-900 dark:text-neutral-100">
          <div className="flex items-baseline gap-4">
            {navItems.map((item) => {
              return (
                <Link key={item.title} href={item.href}>
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
          <ModeToggle />
        </div>
      </nav>
    </Container>
  );
};
