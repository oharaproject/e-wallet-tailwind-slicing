"use client";

import React from "react";
import { CustomButton } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function RegisterEmail() {
  return (
    <div className="register-container">
      <Image
        src="/email-sent.svg"
        alt="Email Confirm Illustration"
        width={160}
        height={160}
        priority
        className="h-[160px] w-auto"
      />

      <div className="register-title-container">
        <h1 className="register-title">Konfirmasi Email</h1>
        <p className="register-subtitle">
          Silahkan cek inbox email Anda dan klik link yang kami kirim untuk
          konfirmasi email Anda. Jika belum muncul tunggu beberapa menit atau
          klik tombol dibawah ini
        </p>
      </div>

      <form className="register-form">
        <CustomButton
          variant="outline"
          size="lg"
          title="KIRIM ULANG"
          leftIcon="i-material-symbols-send-rounded text-icon-md"
          containerStyles=""
          handleClick={() => {}}
        />
      </form>

      <p className="mt-3 text-xs text-center font-normal text-neutral-400">
        <Link href="#" className="page-description">
          Keluar
        </Link>
      </p>
    </div>
  );
}
