"use client";
import React from "react";
const Navbar = () => {
  return (
    <div className="flex justify-evenly bg-white">
      <button className="group btn-navbar ">
        <span className="icon-beranda-first icon-navbar-first"></span>
        <span className="icon-beranda-second icon-navbar-second"></span>
        <span className="text-xs font-semibold">Beranda</span>
      </button>
      <button className="group btn-navbar">
        <span className="icon-history-first icon-navbar-first"></span>
        <span className="icon-history-second icon-navbar-second"></span>
        <span className="text-xs font-semibold">Riwayat</span>
      </button>
      <button className="group btn-navbar">
        <span className="icon-account-first icon-navbar-first"></span>
        <span className="icon-account-second icon-navbar-second"></span>
        <span className="text-xs font-semibold">Akun</span>
      </button>
    </div>
  );
};

export default Navbar;
