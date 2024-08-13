import type { FC } from "react";
import WikiProseBlock from "@/components/WikiProseBlock";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import Image from "next/image";
import { LinkIcon, TableOfContents } from "lucide-react";

const images = [
  {
    url: "settings.webp",
    label: "Меню модификации",
  },
  {
    url: "icons.webp",
    label: "Значения иконок модификации",
  },
  {
    url: "player-icons.webp",
    label: "Значения иконок над игроками",
  },
];

const Voice: FC = () => {
  return (
    <>
      <WikiProseBlock>
        <h1>Голосовой чат</h1>
        <p>
          Мы добавили голосовой чат в игру с помощью модификации{" "}
          <b>PlasmoVoice</b>.
        </p>
        <section id="how-install">
          <h2 className="group relative flex items-center">
            <Link
              className="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-100"
              href="#how-install"
            >
              <LinkIcon size={18} className="mt-1" />
            </Link>
            Как установить
          </h2>
          <ol>
            <li>
              Нужно установить ядро для модификаций (Крайне рекомендуем{" "}
              <Link href="https://fabricmc.net/use/installer/" target="_blank">
                Fabric
              </Link>
              )
            </li>
            <li>
              <i>(При выборе Fabric)</i> Установить{" "}
              <Link
                href="https://www.curseforge.com/minecraft/mc-mods/fabric-api"
                target="_blank"
              >
                FabricAPI
              </Link>{" "}
              в папку <span className="underline">.minecraft/mods</span>
            </li>
            <li>
              Дальше нужно установить мод{" "}
              <Link
                href="https://modrinth.com/mod/plasmo-voice"
                target="_blank"
              >
                PlasmoVoice
              </Link>
              , подходящий под версию и ядро вашей игры.
            </li>
          </ol>
        </section>
        <section id="how-use">
          <h2 className="group relative flex items-center">
            <Link
              className="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-100"
              href="#how-use"
            >
              <LinkIcon size={18} className="mt-1" />
            </Link>
            Как пользоваться
          </h2>
          <p>
            Нажмите на клавишу <kbd>V</kbd> (английскую) по умолчанию, чтобы
            открыть меню мода
          </p>
          <Carousel>
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.url}>
                  <figure>
                    <Image
                      className="rounded-lg"
                      src={`/resources/voice/${image.url}`}
                      alt={image.label}
                      width={1920}
                      height={1080}
                    />
                    <figcaption>{image.label}</figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p>
            Чтобы общаться в игре, нажмите на <kbd>Alt</kbd>
          </p>
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
              href="#how-install"
            >
              Как установить
            </Link>
          </li>
          <li>
            <Link
              className="inline-block w-full rounded-md px-4 py-2 transition-colors hover:bg-white/5"
              href="#how-use"
            >
              Как пользоваться
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Voice;
