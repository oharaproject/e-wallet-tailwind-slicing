"use client";
import React from "react";
import { CustomSelectProps } from "@/types";

const CustomSelect = ({
  id,
  label,
  placeholder,
  value,
  options,
  leftIcon,
  onChange,
}: CustomSelectProps) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <label
        htmlFor={id}
        className="ps-4 text-sm font-medium uppercase text-gray-900"
      >
        {label}
      </label>
      <div className="relative">
        {leftIcon && (
          <div className="text-icon-md absolute inset-y-0 start-0 flex items-center ps-4 text-gray-400">
            <span className={leftIcon}></span>
          </div>
        )}

        {value === "" && (
          <div className="absolute inset-y-0 start-12 flex items-center text-gray-400 pointer-events-none text-sm">
            {placeholder}
          </div>
        )}
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="peer w-full appearance-none rounded-2xl border border-gray-400 bg-white p-3 ps-12 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="" disabled></option>
          {options.map((option, index) => (
            <option key={index} value={option} className="text-gray-400">
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 end-0 flex items-center pe-4 text-gray-400">
          <span className="i-material-symbols-keyboard-arrow-down-rounded"></span>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
