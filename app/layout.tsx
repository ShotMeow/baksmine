import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "@/styles/globals.css";
import type { FC, PropsWithChildren } from "react";
import Header from "@/components/Header";
import { ThemeProvider } from "@/features/theme";
import clsx from "clsx";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Приватный Minecraft сервер - BAKSMINE",
  description: "Приватный сервер для комфортной игры",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={clsx(inter.variable, montserrat.variable)}>
        <ThemeProvider>
          <Header />
          {children}
          <Menu className="lg:hidden" />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
