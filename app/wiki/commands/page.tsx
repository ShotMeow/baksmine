import type { FC } from "react";
import WikiProseBlock from "@/components/WikiProseBlock";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import Link from "next/link";
import { LinkIcon, TableOfContents } from "lucide-react";

const Commands: FC = () => {
  return (
    <>
      <WikiProseBlock>
        <h1>Команды</h1>
        <section id="game-person" className="mb-4">
          <h2 className="group relative m-0 flex items-center">
            <Link
              className="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-100"
              href="#game-person"
            >
              <LinkIcon size={18} className="mt-1" />
            </Link>
            Игровой персонаж
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Команда</TableHead>
                <TableHead className="min-w-60">Описание</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">/sit</TableCell>
                <TableCell>
                  Сесть на любую поверхность <br />
                  <span className="text-sm text-zinc-500">
                    чтобы сесть на лестницу, достаточно нажать по ней{" "}
                    <kbd>ПКМ</kbd>
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">/crawl</TableCell>
                <TableCell>Войти в режим перемещения ползком</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">/lay</TableCell>
                <TableCell>
                  Лечь на спину <br />
                  <span className="text-sm text-zinc-500">
                    нельзя перемещаться
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">/bellyflop</TableCell>
                <TableCell>
                  Лечь на живот <br />
                  <span className="text-sm text-zinc-500">
                    нельзя перемещаться
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">/spin</TableCell>
                <TableCell>
                  Начать крутиться <br />
                  <span className="text-sm text-zinc-500">
                    нельзя перемещаться
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
        <section id="chat">
          <h2 className="group relative m-0 flex items-center">
            <Link
              className="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-100"
              href="#chat"
            >
              <LinkIcon size={18} className="mt-1" />
            </Link>
            Чат
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Команда</TableHead>
                <TableHead className="min-w-60">Описание</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">[Сообщение]</TableCell>
                <TableCell>
                  Написать сообщение в <i>локальный чат</i> <br />
                  <span className="text-sm text-zinc-500">
                    дистанция 40 блоков
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-nowrap font-bold">
                  <b>!</b> [Сообщение]
                </TableCell>
                <TableCell>
                  Написать сообщение в <i>глобальный чат</i> <br />
                  <span className="text-sm text-zinc-500">на весь сервер</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-nowrap font-bold">
                  <b>#</b> [Сообщение]
                </TableCell>
                <TableCell>
                  Написать сообщение в <i>чат модерации</i> <br />
                  <span className="text-sm text-zinc-500">
                    не доступно обычным игрокам
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">
                  <kbd>Alt</kbd>
                </TableCell>
                <TableCell>
                  Активировать <i>голосовой чат</i> (Требуется{" "}
                  <Link href="/wiki/voice">PlasmoVoice</Link>)<br />
                  <span className="text-sm text-zinc-500">
                    слышат только установившие PlasmoVoice
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </WikiProseBlock>
      <aside className="max-xl:hidden">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <TableOfContents size={18} className="mt-0.5" />
          Содержание
        </h3>
        <ul className="mt-4">
          <li>
            <Link
              className="inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5"
              href="#game-person"
            >
              Игровой персонаж
            </Link>
          </li>
          <li>
            <Link
              className="inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5"
              href="#chat"
            >
              Чат
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Commands;
