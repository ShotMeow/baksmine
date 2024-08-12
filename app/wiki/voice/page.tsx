import type {FC} from 'react';
import WikiProseBlock from "@/components/WikiProseBlock";
import Link from "next/link";

const Voice: FC = () => {
    return (
        <WikiProseBlock>
            <h1>Голосовой чат</h1>
            <p>Мы добавили голосовой чат в игру с помощью модификации <b>PlasmoVoice</b>.</p>
            <h2>Как установить</h2>
            <ol>
                <li>Нужно установить ядро для модификаций (Крайне рекомендуем <Link
                    href="https://fabricmc.net/use/installer/"
                    target="_blank">Fabric</Link>)

                </li>
                <li><i>(При выборе Fabric)</i> Установить <Link
                    href="https://www.curseforge.com/minecraft/mc-mods/fabric-api"
                    target="_blank">FabricAPI</Link> в папку <span
                    className="underline">.minecraft/mods</span></li>
                <li>Дальше нужно установить мод <Link href="https://modrinth.com/mod/plasmo-voice"
                                                      target="_blank">PlasmoVoice</Link>, подходящий под версию и ядро
                    вашей игры.
                </li>
            </ol>
            <h2>Как пользоваться</h2>
            <p>Нажмите на клавишу <kbd>V</kbd> (английскую) по умолчанию, чтобы открыть меню мода</p>
            <img
                src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Fmods%2Fvoice%2Fmic.png&w=1080&q=75"
                alt="Изображение меню модификации"/>
            <p>Чтобы общаться в игре, нажмите на <kbd>Alt</kbd></p>
            <h2>Значение иконок в игре</h2>
            <figure>
                <img
                    src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Fmods%2Fvoice%2Fhud_icons.png&w=1080&q=75"
                    alt="Значения иконок модификации"/>
                <figcaption>Значение иконок в HUD</figcaption>
            </figure>
            <figure>
                <img
                    src="https://plasmorp.com/_next/image?url=%2Fapi%2Fwiki%2Fassets%2Fmods%2Fvoice%2Fplayer_icons.png&w=1080&q=75"
                    alt=""/>
                <figcaption>Значение иконок над игроками</figcaption>
            </figure>
        </WikiProseBlock>
    );
};

export default Voice;