import type { FC } from "react";
import { AuroraBackground } from "@/features/theme/components/AuroraBackground";
import Button from "@/features/theme/components/Button";

const Home: FC = () => {
  return (
    <main className="container flex h-screen flex-col items-center justify-center text-center">
      <AuroraBackground className="absolute inset-x-0 top-0 -z-50 dark:opacity-50" />
      <h1 className="font-montserrat text-5xl font-bold">BAKSMINE</h1>
      <p className="relative mt-10 text-xl dark:text-zinc-300">
        Приватный сервер для классического выживания <br /> в комфортной
        атмосфере.
      </p>
      <div className="mt-20 flex items-center gap-8">
        <Button primary>Купить проходку</Button>
        <span className="font-bold">100 рублей</span>
      </div>
    </main>
  );
};

export default Home;
