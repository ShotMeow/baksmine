"use client";

import type {FC, HTMLAttributes} from "react";
import {navItems} from "@/constants/nav";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const Menu: FC<Props> = ({className, ...props}) => {
    const pathname = usePathname();

    return (
        <nav
            className={clsx("fixed bottom-4 flex w-full justify-center", className)}
            {...props}
        >
            <ul className="mx-4 flex items-center gap-0 overflow-y-auto rounded-full bg-black/10 p-2 backdrop-blur-lg">
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
    );
};

export default Menu;
