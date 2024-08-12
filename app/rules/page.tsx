import type {FC} from "react";
import type {Metadata} from "next";
import {TextGenerateEffect} from "@/features/theme/components/TextGenerateEffect";

export const metadata: Metadata = {
    title: "BAKSMINE - Правила",
    description: "Приватный сервер для комфортной игры",
};

const Rules: FC = () => {
    return (
        <main className="flex h-screen items-center justify-center">
            <h1 className="text-center text-3xl">
                <TextGenerateEffect words={"Раздел находится в разработке..."}/>
            </h1>
        </main>
    );
};

export default Rules;
