import React from "react";

interface InputProps {
  id: string;
  placeholder: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({ id, placeholder, value, onChange }) => {
  return (
    <div className="border-prime-blue relative rounded-lg border-2 bg-white px-3 pt-6 pb-2">
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="peer w-full border-none bg-transparent text-xl outline-none placeholder:text-transparent"
      />
      <label
        htmlFor={id}
        className="absolute left-3 top-1 text-sm font-normal text-slate-900 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xl peer-placeholder-shown:font-medium peer-placeholder-shown:text-slate-600 peer-focus:top-1 peer-focus:text-sm peer-focus:font-normal peer-focus:text-slate-900"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
