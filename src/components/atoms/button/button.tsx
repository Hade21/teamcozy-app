import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  model: "circle" | "rounded";
  type?: "button" | "submit";
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  model,
  type,
  disabled,
  ...props
}) => {
  const circle: string =
    "px-8 py-3 text-base lg:text-xl text-white font-normal rounded-full bg-sky-500";
  const rounded: string =
    "px-8 py-3 text-base lg:text-xl text-white font-normal rounded-lg bg-sky-500";
  const disabledRounded: string =
    "px-8 py-3 text-base lg:text-xl text-white font-normal rounded-lg bg-sky-300";
  const disabledCircle: string =
    "px-8 py-3 text-base lg:text-xl text-white font-normal rounded-full bg-sky-300";

  return (
    <button
      {...props}
      className={
        model === "circle"
          ? disabled
            ? disabledCircle
            : circle
          : disabled
          ? disabledRounded
          : rounded
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
