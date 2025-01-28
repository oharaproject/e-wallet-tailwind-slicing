"use client";
import React from "react";
import { AppbarProps } from "@/types";

const Appbar = ({ title }: AppbarProps) => {
  return (
    <div>
      <div className="appbar-container">
        <button onClick={() => window.history.back()} className="btn-appbar">
          <span className="icon-appbar"></span>
        </button>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Appbar;
