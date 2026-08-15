import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { Container } from "../core/container";

export const Navbar = () => {
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
    <Container className="p-4">
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
