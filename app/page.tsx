"use client";
import type { FC } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Gamepad } from "lucide-react";
import { Button } from "@/components/MovingBorder";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

const Home: FC = () => {
  return (
    <main className="container flex h-screen flex-col items-center justify-center text-center">
      <AuroraBackground className="absolute inset-x-0 top-0 -z-50 animate-show" />
      <h1 className="font-montserrat text-3xl font-bold sm:text-6xl lg:text-8xl">
        <TextGenerateEffect words={"BAKSMINE"} duration={2} />
      </h1>
      <TextGenerateEffect
        className="relative mt-4 text-lg dark:text-zinc-300 sm:text-xl md:mt-10"
        words={
          "Приватный сервер для классического выживания в комфортной атмосфере."
        }
      />
      <div className="mt-10 md:mt-20">
        <Button>
          <Gamepad />
          Купить проходку
        </Button>
      </div>
    </main>
  );
};

export default Home;
