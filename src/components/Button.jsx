import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[30px] outline-none ${styles}`}>
    Start Now
  </button>
);

export default Button;