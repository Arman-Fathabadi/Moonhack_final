import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[5px]",
};
const variants = {
  outline: {
    white_A700_01: "border-white-A700_01 border border-solid text-white-A700_01",
  },
  fill: {
    gray_900: "bg-gray-900",
    black_900: "bg-black-900 shadow-sm text-white-A700_01",
    gray_900_02: "bg-gray-900_02",
    blue_gray_900: "bg-blue_gray-900 text-white-A700_01",
  },
};
const sizes = {
  sm: "h-[54px] px-[35px] text-base",
  xl: "h-[63px] pl-[17px] text-base",
  xs: "h-[30px] px-[7px]",
  md: "h-[59px] px-[22px] text-base",
  lg: "h-[63px] px-[35px] text-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "blue_gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["sm", "xl", "xs", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700_01", "gray_900", "black_900", "gray_900_02", "blue_gray_900"]),
};

export { Button };
