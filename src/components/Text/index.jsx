import React from "react";

const sizes = {
  "5xl": "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  "6xl": "text-[34px] font-medium md:text-[32px] sm:text-3xl",
  xs: "text-xs font-medium",
  lg: "text-[15px] font-normal",
  "7xl": "text-[40px] font-thin md:text-[38px] sm:text-4xl",
  "8xl": "text-[115px] font-medium md:text-5xl",
  s: "text-[13px] font-medium",
  "2xl": "text-[17px] font-medium",
  "3xl": "text-lg font-medium",
  "4xl": "text-[26px] font-normal md:text-2xl sm:text-[22px]",
  xl: "text-base font-normal",
  md: "text-sm font-thin",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
