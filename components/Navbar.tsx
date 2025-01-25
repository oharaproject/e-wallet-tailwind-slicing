"use client";
import React from "react";
import Appbar from "./Appbar";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <div>
      <Appbar />

      <div className="h-8"></div>

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

      <div className="h-8"></div>

      <h1 className="text-center text-2xl text-gray-900 mb-4">
        Button Primary
      </h1>
      <div className="flex gap-5 justify-center">
        <CustomButton
          variant="primary"
          size="lg"
          iconSize="md"
          title="My Button"
          leftIcon="i-material-symbols-download-rounded"
          rightIcon="i-material-symbols-download-rounded"
          handleClick={() => console.log("Button Clicked")}
        />
        <CustomButton
          variant="primary"
          size="sm"
          iconSize="sm"
          title="My Button"
          leftIcon="i-material-symbols-download-rounded"
          rightIcon="i-material-symbols-download-rounded"
          handleClick={() => console.log("Button Clicked")}
        />
      </div>

      <div className="h-8"></div>

      <h1 className="text-center text-2xl text-gray-900 mb-4">
        Button Outline
      </h1>
      <div className="flex gap-5 justify-center">
        <CustomButton
          variant="outline"
          size="lg"
          iconSize="md"
          title="My Button"
          leftIcon="i-material-symbols-download-rounded"
          rightIcon="i-material-symbols-download-rounded"
          handleClick={() => console.log("Button Clicked")}
        />
        <CustomButton
          variant="outline"
          size="sm"
          iconSize="sm"
          title="My Button"
          leftIcon="i-material-symbols-download-rounded"
          rightIcon="i-material-symbols-download-rounded"
          handleClick={() => console.log("Button Clicked")}
        />
      </div>

      <h1 className="text-center text-2xl text-gray-900 mt-6 mb-4">
        Button Secondary
      </h1>
      <div className="flex gap-5 justify-center">
        <CustomButton
          variant="secondary"
          size="lg"
          iconSize="md"
          title="My Button"
          leftIcon="i-material-symbols-download-rounded"
          rightIcon="i-material-symbols-download-rounded"
          handleClick={() => console.log("Button Clicked")}
        />
        <CustomButton
          variant="secondary"
          size="sm"
          iconSize="sm"
          title="My Button"
          leftIcon="i-material-symbols-download-rounded"
          rightIcon="i-material-symbols-download-rounded"
          handleClick={() => console.log("Button Clicked")}
        />
      </div>
    </div>
  );
};

export default Navbar;
