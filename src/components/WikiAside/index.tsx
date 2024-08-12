"use client";
import type {FC} from 'react';
import {featuresItems, wikiItems} from "@/constants/nav";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

const WikiAside: FC = () => {
    const pathname = usePathname();
    return (
        <aside>
            <ul className="text-sm">
                {wikiItems.map((item) => <li key={item.href}>
                    <Link
                        className={clsx("inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5", {
                            "text-purple-600 font-medium": pathname === item.href
                        })}
                        href={item.href}>{item.title}</Link>
                </li>)}
            </ul>
            <ul className="mt-4 text-sm">
                <h2 className="mb-2 text-lg font-semibold">Особенности сервера</h2>
                {featuresItems.map((item) => <li key={item.href}>
                    <Link
                        className={clsx("inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5", {
                            "text-purple-600 font-medium": pathname === item.href
                        })}
                        href={item.href}>{item.title}</Link>
                </li>)}
            </ul>
        </aside>
    );
};

export default WikiAside;