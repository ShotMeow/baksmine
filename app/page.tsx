"use client";
import type {FC} from "react";
import {AuroraBackground} from "@/features/theme/components/AuroraBackground";
import {Gamepad} from "lucide-react";
import {Button} from "@/features/theme/components/MovingBorder";
import {TextGenerateEffect} from "@/features/theme/components/TextGenerateEffect";

const Home: FC = () => {
    return (
        <main className="container flex h-screen flex-col items-center justify-center text-center">
            <AuroraBackground className="absolute inset-x-0 top-0 -z-50 animate-show"/>
            <h1 className="font-montserrat text-3xl font-bold sm:text-6xl lg:text-8xl">
                <TextGenerateEffect words={"BAKSMINE"} duration={2}/>
            </h1>
            <p className="relative mt-4 text-lg sm:text-xl md:mt-10 dark:text-zinc-300">
                <TextGenerateEffect
                    words={
                        "Приватный сервер для классического выживания в комфортной атмосфере."
                    }
                />
            </p>
            <div className="mt-10 flex animate-show items-center gap-8 md:mt-20">
                <Button>
                    <Gamepad/>
                    Купить проходку
                </Button>
            </div>
        </main>
    );
};

export default Home;
