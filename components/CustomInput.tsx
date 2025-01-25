import React from "react";
import { CustomInputProps } from "@/types";

const CustomInput = ({
  id,
  type,
  label,
  placeholder,
  hint,
  value,
  isInvalid = false,
  leftIcon,
  rightIcon,
  disabled = false,
  onChange,
}: CustomInputProps) => {
  const inputStateClass = isInvalid ? "input-invalid" : "input-default";
  const iconStateClass = isInvalid ? "icon-invalid" : "icon-default";

  return (
    <div>
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`custom-input ${inputStateClass} ps-12 pe-12`}
        />

        {leftIcon && (
          <span
            className={`text-icon-md absolute inset-y-0 start-0 flex items-center ps-4 ${iconStateClass}`}
          >
            <i className={`${leftIcon}`}></i>
          </span>
        )}

        {rightIcon && (
          <span
            className={`text-icon-md absolute inset-y-0 end-0 flex items-center pe-4 ${iconStateClass}`}
          >
            <i className={`${rightIcon}`}></i>
          </span>
        )}
      </div>

      {hint && <p className="input-hint">{hint}</p>}
    </div>
  );
};

export default CustomInput;
