"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};

export default ThemeProvider;
