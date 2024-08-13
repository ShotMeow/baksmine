import type { FC, PropsWithChildren } from "react";

const WikiProseBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="prose prose-zinc col-span-full mb-20 max-w-none dark:prose-invert lg:col-span-4 lg:mx-20 xl:col-span-3">
      {children}
    </main>
  );
};

export default WikiProseBlock;
