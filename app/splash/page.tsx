import React from "react";
import Image from "next/image";

const Splash = () => {
  return (
    <div className="container mx-auto max-w-[768px] h-screen bg-brands-light-green flex flex-col items-center justify-center">
      <Image
        src="/logo-white.svg"
        alt="Kusaku Logo"
        width={160}
        height={160}
        className="h-[160px] animate-fadeIn"
        priority
      />

      <h1 className="font-sans absolute bottom-9 text-3xl font-bold uppercase text-[#3ed6b8] animate-fadeIn">
        Kusaku
      </h1>
    </div>
  );
};

export default Splash;
