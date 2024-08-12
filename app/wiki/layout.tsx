import type {FC, PropsWithChildren} from 'react';
import type {Metadata} from "next";
import WikiAside from "@/components/WikiAside";

export const metadata: Metadata = {
    title: "BAKSMINE - Wiki",
    description: "Приватный сервер для комфортной игры",
};

const Layout: FC<PropsWithChildren> = ({children}) => {
    return <div className="container mt-24 grid grid-cols-5">
        <WikiAside/>
        {children}
    </div>;
};

export default Layout;