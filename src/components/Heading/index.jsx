import React from "react";

const sizes = {
  s: "text-4xl font-extrabold md:text-[34px] sm:text-[32px]",
  md: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  xs: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  lg: "text-7xl font-bold md:text-5xl",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700_01 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
