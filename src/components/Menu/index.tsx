"use client";

import { FC, HTMLAttributes, useEffect, useState } from "react";
import { navItems } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Map } from "lucide-react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Menu: FC<Props> = ({ className, ...props }) => {
  const [hide, setHide] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setHide(isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "fixed bottom-4 flex w-full justify-center transition-transform duration-500",
        {
          "translate-y-60": hide,
          "translate-y-0": !hide,
        },
        className,
      )}
      {...props}
    >
      <ul className="relative mx-4 flex items-center gap-0 rounded-full bg-black/10 p-2 backdrop-blur-lg">
        {navItems.map((item) => (
          <li className="shrink-0" key={item.href}>
            <Link
              className={clsx("inline-block rounded-full px-4 py-2", {
                "bg-gradient-to-r from-purple-900/50 to-purple-950/50 text-white":
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/"),
              })}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <Link
          className="absolute -top-14 right-0 z-10 flex items-center gap-2 rounded-full bg-black/10 px-6 py-3 backdrop-blur-lg transition-colors hover:bg-black/5 hover:dark:bg-white/5"
          href="http://51.195.14.232:25697"
          target="_blank"
        >
          <Map />
          Карта
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
