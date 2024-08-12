"use client";
import type { FC } from "react";
import { AuroraBackground } from "@/features/theme/components/AuroraBackground";
import { Gamepad } from "lucide-react";
import { Button } from "@/features/theme/components/MovingBorder";
import { TextGenerateEffect } from "@/features/theme/components/TextGenerateEffect";

const Home: FC = () => {
  return (
    <main className="container flex h-screen flex-col items-center justify-center text-center">
      <AuroraBackground className="absolute inset-x-0 top-0 -z-50 dark:opacity-50" />
      <h1 className="font-montserrat text-8xl font-bold">
        <TextGenerateEffect words={"BAKSMINE"} duration={2} />
      </h1>
      <p className="relative mt-10 text-xl dark:text-zinc-300">
        <TextGenerateEffect
          words={
            "Приватный сервер для классического выживания в комфортной атмосфере."
          }
        />
      </p>
      <div className="mt-20 flex items-center gap-8">
        <Button className="animate-pulse hover:animate-none">
          <Gamepad />
          Купить проходку
        </Button>
      </div>
    </main>
  );
};

export default Home;
