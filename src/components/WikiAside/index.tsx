"use client";
import { FC, useState } from "react";
import { featuresItems, wikiItems } from "@/constants/nav";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

const WikiAside: FC = () => {
  const [asideShown, setAsideShown] = useState<boolean>(false);
  const pathname = usePathname();

  const handleClose = () => {
    setAsideShown(false);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleOpen = () => {
    setAsideShown(true);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <aside className="col-span-1 max-lg:hidden">
        <ul className="text-sm">
          {wikiItems.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx(
                  "inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5",
                  {
                    "text-purple-600 font-medium": pathname === item.href,
                  },
                )}
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 text-sm">
          <h2 className="mb-2 text-lg font-semibold">Особенности сервера</h2>
          {featuresItems.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx(
                  "inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5",
                  {
                    "text-purple-600 font-medium": pathname === item.href,
                  },
                )}
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="relative col-span-full mb-4 lg:hidden">
        <button
          onClick={handleOpen}
          className="relative flex w-full items-center justify-center gap-2 rounded-md bg-black/5 px-4 py-3 text-center transition-colors hover:bg-white/10 dark:bg-white/5"
        >
          <Menu /> Навигация
        </button>
        <div
          onClick={handleClose}
          className={clsx(
            "fixed inset-0 z-30 bg-black/40 duration-500 dark:bg-black/80",
            {
              "pointer-events-none opacity-0": !asideShown,
            },
          )}
        >
          <div
            className={clsx(
              "absolute z-10 rounded-md bg-white px-8 py-4 backdrop-blur-lg duration-500 dark:bg-zinc-950 max-sm:inset-6 max-sm:w-full sm:inset-y-6 sm:right-6",
              {
                "translate-x-96": !asideShown,
              },
            )}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Навигация</h3>
              <button onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
            <ul className="text-base">
              {wikiItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className={clsx(
                      "inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5",
                      {
                        "text-purple-600 font-medium": pathname === item.href,
                      },
                    )}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4">
              <h2 className="mb-2 text-lg font-semibold">
                Особенности сервера
              </h2>
              {featuresItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className={clsx(
                      "inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5",
                      {
                        "text-purple-600 font-medium": pathname === item.href,
                      },
                    )}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WikiAside;
