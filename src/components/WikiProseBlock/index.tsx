import type {FC, PropsWithChildren} from 'react';

const WikiProseBlock: FC<PropsWithChildren> = ({children}) => {
    return (
        <main className="prose prose-zinc col-span-4 mx-20 mb-20 dark:prose-invert">
            {children}
        </main>
    );
};

export default WikiProseBlock;