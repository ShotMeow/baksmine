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
    url: "8fa8259fbe7033c335be97a191aec7a0d1f1b83c.webp",
    label: "Светящиеся спруты под водой испускают свет",
  },
  {
    url: "d6a430b85d60290abc46ba6e317c7323531b892f.webp",
    label: "Выброшенный факел светится",
  },
  {
    url: "e34f7e148ad616695d3a5a92cf46a7314d7aaf3c.webp",
    label: "Красный факел слабо освещает местность вокруг",
  },
];

const DynamicLight: FC = () => {
  return (
    <WikiProseBlock>
      <h1>Динамическое освещение</h1>
      <p>
        Для более иммерсивного погружение в мир майнкрафта, светящиеся предметы
        будут излучать свет, как и должны.
      </p>
      <p>
        Мощность света зависит от внешних факторов и самого предмета, например{" "}
        <b>святящиеся спруты</b> излучают свет только под водой, а{" "}
        <b>слабозачарованные предметы</b> лишь немного осветят местность вокруг.
      </p>
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.url}>
              <figure>
                <Image
                  className="rounded-lg"
                  src={`/resources/dynamic-light/${image.url}`}
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

export default DynamicLight;
