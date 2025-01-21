import React from "react";

const Button = ({ styles }) => {
  return (
    <a href="https://app.vontobel-financials.pro/intro"
      type="button"
      className={`py-4    px-6 bg-blue-gradient  font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
    >
      Get Started{" "}
    </a>
  );
};

export default Button;
