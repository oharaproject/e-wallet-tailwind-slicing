import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  variant,
  size,
  title,
  leftIcon,
  rightIcon,
  iconSize,
  containerStyles,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  const iconSizeClass = iconSize ? `text-icon-${iconSize}` : "text-icon-md";
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`custom-btn btn-${variant} btn-${size} ${containerStyles}`}
      onClick={handleClick}
    >
      {leftIcon && <span className={`${iconSizeClass} ${leftIcon}`}></span>}
      <span>{title}</span>
      {rightIcon && <span className={`${iconSizeClass} ${rightIcon}`}></span>}
    </button>
  );
};

export default CustomButton;
