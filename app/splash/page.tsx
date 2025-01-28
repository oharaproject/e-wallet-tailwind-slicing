import React from "react";
import Image from "next/image";

const Splash = () => {
  return (
    <div className="splash-container">
      <Image
        src="/logo-white.svg"
        alt="Kusaku Logo"
        width={160}
        height={160}
        className="h-[160px] animate-fadeIn"
        priority
      />

      <h1 className="splash-title">Kusaku</h1>
    </div>
  );
};

export default Splash;
