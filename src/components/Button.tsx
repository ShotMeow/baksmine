import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({
  className,
  primary,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 rounded-md",
        {
          "bg-purple text-white px-8 py-3": primary,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
