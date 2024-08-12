"use client";

import type { FC } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Switcher: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="rounded-full p-2 transition-colors hover:bg-black/5 hover:dark:bg-white/5"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default Switcher;
