import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  model: "circle" | "rounded";
  type?: "button" | "submit";
}
const Button: React.FC<ButtonProps> = ({ children, model, type, ...props }) => {
  const circle: string =
    "px-8 py-3 text-base lg:text-xl text-white font-normal rounded-full bg-sky-500";
  const rounded: string =
    "px-8 py-3 text-base lg:text-xl text-white font-normal rounded-lg bg-sky-500";
  return (
    <button {...props} className={model === "circle" ? circle : rounded}>
      {children}
    </button>
  );
};

export default Button;
