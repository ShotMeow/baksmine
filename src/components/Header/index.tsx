import type { FC } from "react";
import Logo from "@/assets/icons/brand.svg";
import Link from "next/link";
import { navItems } from "@/constants/nav";
import { Switcher } from "@/features/theme";
import { LogIn } from "lucide-react";
import Button from "@/features/theme/components/Button";

const Header: FC = () => {
  return (
    <header className="fixed top-0 z-10 w-full backdrop-blur-lg">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="absolute left-1/2 -translate-x-1/2 max-lg:hidden">
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
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Switcher />
          <Button className="px-4 py-2 transition-colors hover:bg-black/5 hover:dark:bg-white/5">
            <LogIn />
            Авторизоваться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
