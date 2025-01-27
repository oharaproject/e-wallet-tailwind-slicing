"use client";
import React from "react";
import { AppbarProps } from "@/types";

const Appbar = ({ title }: AppbarProps) => {
  return (
    <div>
      <div className="flex fixed top-0 left-0 z-10 w-full items-center gap-5 bg-white p-4 text-gray-900">
        <button
          onClick={() => window.history.back()}
          className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <span className="i-material-symbols-arrow-left-alt-rounded text-icon-md block"></span>
        </button>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Appbar;
