"use client";
import React from "react";
const Navbar = () => {
  return (
    <div className="flex justify-evenly bg-white">
      <button className="group btn-beranda ">
        <span className="icon-beranda-first icon-beranda-first-style"></span>
        <span className="icon-beranda-second icon-beranda-second-style"></span>
        <span className="text-xs font-semibold">Beranda</span>
      </button>
      <button className="group btn-history">
        <span className="icon-history-first icon-history-first-style"></span>
        <span className="icon-history-second icon-history-second-style"></span>
        <span className="text-xs font-semibold">Riwayat</span>
      </button>
      <button className="group btn-account">
        <span className="icon-account-first icon-account-first-style"></span>
        <span className="icon-account-second icon-account-second-style"></span>
        <span className="text-xs font-semibold">Akun</span>
      </button>
    </div>
  );
};

export default Navbar;
