"use client";
import React from "react";
const Navbar = () => {
  return (
    <div className="flex justify-evenly bg-white">
      <button className="group flex w-full flex-col items-center p-3 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400">
        <span className="i-material-symbols-home-outline-rounded text-icon-md inline group-hover:hidden"></span>
        <span className="i-material-symbols-home-rounded text-icon-md hidden group-hover:inline"></span>
        <span className="text-xs font-semibold">Beranda</span>
      </button>
      <button className="group flex w-full flex-col items-center p-3 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400">
        <span className="i-material-symbols-receipt-outline-rounded text-icon-md inline group-hover:hidden"></span>
        <span className="i-material-symbols-receipt-rounded text-icon-md hidden group-hover:inline"></span>
        <span className="text-xs font-semibold">Riwayat</span>
      </button>
      <button className="group flex w-full flex-col items-center p-3 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400">
        <span className="i-material-symbols-person-outline-rounded text-icon-md inline group-hover:hidden"></span>
        <span className="i-material-symbols-person-rounded text-icon-md hidden group-hover:inline"></span>
        <span className="text-xs font-semibold">Akun</span>
      </button>
    </div>
  );
};

export default Navbar;
