import type {FC} from "react";
import WikiProseBlock from "@/components/WikiProseBlock";

const Wiki: FC = () => {
    return <WikiProseBlock>
        <h1>Введение</h1>
        <p>Это вики приватного сервера BAKSMINE. В вики вы найдете гайды и ответы на ваши вопросы, связанные с
            сервером.</p>
    </WikiProseBlock>
};

export default Wiki;
