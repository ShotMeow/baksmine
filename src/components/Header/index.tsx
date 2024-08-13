"use client";
import { FC, useEffect, useRef, useState } from "react";
import Logo from "@/assets/icons/brand.svg";
import Link from "next/link";
import { navItems } from "@/constants/nav";
import { Switcher } from "@/features/theme";
import clsx from "clsx";

const Header: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={clsx("fixed top-0 z-10 w-full border-b duration-300", {
          "dark:bg-zinc-900/0 border-transparent": isIntersecting,
          "dark:bg-zinc-900/20 border-zinc-200 dark:border-zinc-800 backdrop-blur":
            !isIntersecting,
        })}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="absolute left-1/2 -translate-x-1/2 max-xl:hidden">
            <ul className="flex items-center gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="rounded-full px-6 py-3 font-medium transition-colors hover:bg-black/5 hover:dark:bg-white/5"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="rounded-full px-6 py-3 font-medium transition-colors hover:bg-black/5 hover:dark:bg-white/5"
                  href="http://51.195.14.232:25697"
                  target="_blank"
                >
                  Карта
                </Link>
              </li>
            </ul>
          </nav>
          <Switcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
