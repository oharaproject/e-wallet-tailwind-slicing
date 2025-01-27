"use client";

import React from "react";
import { CustomButton } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="container mx-auto max-w-[768px] h-screen bg-green-50 flex flex-col items-center justify-center px-4">
      <Image
        src="/email-sent.svg"
        alt="Email Confirm Illustration"
        width={160}
        height={160}
        priority
        className="h-[160px] w-auto"
      />

      <div className="mb-5 mt-8 flex flex-col items-center">
        <h1 className="text-lg font-semibold text-gray-900 text-center">
          Konfirmasi Email
        </h1>
        <p className="text-xs font-medium text-gray-400 text-center">
          Silahkan cek inbox email Anda dan klik link yang kami kirim untuk
          konfirmasi email Anda. Jika belum muncul tunggu beberapa menit atau
          klik tombol dibawah ini
        </p>
      </div>

      <form className="flex flex-col gap-4 w-full">
        <CustomButton
          variant="outline"
          size="lg"
          title="KIRIM ULANG"
          leftIcon="i-material-symbols-send-rounded text-icon-md"
          handleClick={() => {}}
        />
      </form>

      <p className="mt-3 text-xs text-center font-normal text-neutral-400">
        <Link
          href="#"
          className="text-brands-light-green font-semibold hover:text-brands-light-green/70 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Keluar
        </Link>
      </p>
    </div>
  );
}
