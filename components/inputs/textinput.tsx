import React from "react";

interface ITextInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  required: boolean;
  minLength: number;
  onChangeFunc: (e: string) => void;
}

const TextInput: React.FC<ITextInput> = ({
  type,
  minLength,
  name,
  placeholder,
  value,
  onChangeFunc,
}) => {
  return (
    <input
      aria-label={name}
      type={type}
      minLength={minLength}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeFunc(e.target.value)}
      required
      className="relative bg-white border border-[#c0c2d3] rounded-lg focus:outline-none active:outline-none 
      shadow-[0px_4px_0px_rgba(91,105,135,0.2)] hover:shadow-[0px_2px_0px_rgba(91,105,135,0.2)] text-[#031b4e] 
      cursor-text text-base mb-4 py-[0.55rem] px-[1rem] w-full transition-all duration-2008"
    />
  );
};

export default TextInput;
