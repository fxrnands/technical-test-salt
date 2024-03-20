import React from "react";

const Button = ({ className, children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
