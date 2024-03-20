import React from "react";

const Input = ({
  type,
  value,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
