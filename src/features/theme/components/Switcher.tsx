"use client";

import type { FC } from "react";
import { useTheme } from "next-themes";
import { Check, LaptopMinimal, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import clsx from "clsx";

const Switcher: FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full p-2 transition-colors hover:bg-black/5 hover:dark:bg-white/5">
        {theme === "dark" || (theme === "system" && systemTheme === "dark") ? (
          <Moon />
        ) : (
          <Sun />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={clsx(
            "flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 text-base hover:bg-black/5 dark:hover:bg-white/5",
            {
              "border border-zinc-300 dark:border-zinc-800 bg-black/5 dark:bg-white/5":
                theme === "light",
            },
          )}
        >
          <span className="flex items-center gap-2">
            <Sun /> Светлая
          </span>
          {theme === "light" && <Check size={16} />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={clsx(
            "flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 text-base hover:bg-black/5 dark:hover:bg-white/5",
            {
              "border border-zinc-300 dark:border-zinc-800 bg-black/5 dark:bg-white/5":
                theme === "dark",
            },
          )}
        >
          <span className="flex items-center gap-2">
            <Moon /> Темная
          </span>
          {theme === "dark" && <Check size={16} />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={clsx(
            "flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 text-base hover:bg-black/5 dark:hover:bg-white/5",
            {
              "border border-zinc-300 dark:border-zinc-800 bg-black/5 dark:bg-white/5":
                theme === "system",
            },
          )}
        >
          <span className="flex items-center gap-2">
            <LaptopMinimal /> Системная
          </span>
          {theme === "system" && <Check size={16} />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Switcher;
