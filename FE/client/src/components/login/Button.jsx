import React from "react";

const Button = ({ children, ...props }) => (
  <button
    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg w-full text-lg hover:opacity-90 transition shadow-md"
    {...props}
  >
    {children}
  </button>
);

export default Button;
