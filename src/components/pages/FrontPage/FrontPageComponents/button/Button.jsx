import { Button as ReakitButton } from "reakit/Button";
import cx from "classnames";

export const Button = ({
  size = "md",
  as = "button",
  color = "main",
  ...props
}) => {
  return (
    <ReakitButton
      {...props}
      as={as}
      className={cx(
        "inline-flex items-center hover:opacity-80 duration-100 transition",
        "font-medium rounded-lg h-10 outline-none focus:outline-none",
        {
          "h-10 px-4 text-base": size === "md",
          "h-14 px-8 text-xl": size === "lg",
          "bg-black text-white": color === "main",
          "bg-white text-black": color === "ghost",
          "bg-white text-black border shadow-sm": color === "alt",
        }
      )}
    />
  );
};
