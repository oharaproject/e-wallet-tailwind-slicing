"use client";
import React from "react";

const Appbar = () => {
  return (
    <div>
      <div className="flex items-center gap-5 bg-white p-4 text-gray-900">
        <button
          onClick={() => window.history.back()}
          className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <span className="i-material-symbols-arrow-left-alt-rounded text-icon-md block"></span>
        </button>
        <p className="text-lg font-semibold">Untitled</p>
      </div>
    </div>
  );
};

export default Appbar;
