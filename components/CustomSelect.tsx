import React from "react";
import { CustomSelectProps } from "@/types";

export function CustomSelect({ options, id }: CustomSelectProps) {
  return (
    <select
      id={id}
      className="w-full rounded-2xl border border-gray-400 bg-white p-3 ps-12 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      {options.map((option) => (
        <option key={option} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  );
}
