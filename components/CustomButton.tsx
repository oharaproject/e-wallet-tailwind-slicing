"use client";
import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  type = "button",
  variant,
  size,
  title,
  leftIcon,
  rightIcon,
  iconSize,
  containerStyles,
  isDisabled,
  handleClick,
  onClick,
}: CustomButtonProps) => {
  const iconSizeClass = iconSize ? `text-icon-${iconSize}` : "text-icon-md";
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`custom-btn btn-${variant} btn-${size} ${containerStyles}`}
      onClick={() => {
        if (handleClick) handleClick();
        if (onClick) onClick();
      }}
    >
      {leftIcon && <span className={`${iconSizeClass} ${leftIcon}`}></span>}
      <span>{title}</span>
      {rightIcon && <span className={`${iconSizeClass} ${rightIcon}`}></span>}
    </button>
  );
};

export default CustomButton;
