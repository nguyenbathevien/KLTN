import React from "react";

const Label = ({ children, htmlFor }) => (
  <label
    className="block font-semibold mb-3 text-gray-700 text-lg text-left"
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export default Label;
