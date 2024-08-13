import type { FC } from "react";
import WikiProseBlock from "@/components/WikiProseBlock";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import Image from "next/image";

const images = [
  {
    url: "6fb408e020e6a2ee420f7b6e9cf698d1e9b90ecc.webp",
    label: "Переработанные столы для крафта",
  },
  {
    url: "9d8b13e1893ba1545640ea9ea90d9aff2f492c3e.webp",
    label: "Переработанные хранилища",
  },
  {
    url: "7021578cab7f051b298fba578b4ce965287c9d9b.webp",
    label: "Переработанная книга рецептов",
  },
  {
    url: "98264653449918fac95f4e6604527a9eb97bcdba.webp",
    label: "Переработанные шалкеры",
  },
  {
    url: "f4c2192393020d194cbf48f675c8c5c7ccd30f01.webp",
    label: "Переработанный хотбар",
  },
];

const Hud: FC = () => {
  return (
    <WikiProseBlock>
      <h1>Переработанный HUD</h1>
      <p>
        Мы полностью изменили HUD игры. Теперь каждая часть интерфейса
        соответствует её содержанию.
      </p>
      <p>
        Например окно крафта выглядит соответствующе предмету, который вы
        используете для крафта. А меню шалкера имеет цвет блока в игре.
      </p>
        <p>В качестве бонуса, мы разнообразили скучный интерфейс игры минималистичными иконнка. Они будут везде: от меню настроек до игрового инвентаря.</p>
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.url}>
              <figure>
                <Image
                  className="rounded-lg"
                  src={`/resources/hud/${image.url}`}
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
    </WikiProseBlock>
  );
};

export default Hud;
