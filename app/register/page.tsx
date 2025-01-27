"use client";

import React, { useState } from "react";
import { CustomButton, CustomInput } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    setIsEmailInvalid(!/^\S+@\S+\.\S+$/.test(value));
  };

  return (
    <div className="container mx-auto max-w-[768px] h-screen bg-green-50 flex flex-col items-center justify-center px-4">
      <Image
        src="/logo-green.svg"
        alt="Kusaku Logo"
        width={160}
        height={160}
        priority
        className="h-[160px] w-auto"
      />

      <div className="mb-5 mt-8 flex flex-col items-center">
        <h1 className="text-lg font-semibold text-gray-900 text-center">
          Buat Akun Baru
        </h1>
        <p className="text-xs font-medium text-gray-400 text-center">
          Hanya beberapa langkah untuk buat akun baru Anda
        </p>
      </div>

      <form className="flex flex-col gap-4 w-full">
        <div className="mb-2">
          <CustomInput
            id="name"
            type="text"
            label=""
            placeholder="Nama"
            leftIcon="i-material-symbols-person-rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <CustomInput
            id="email"
            type="email"
            label=""
            placeholder="Email"
            leftIcon="i-material-symbols-mail-rounded"
            value={email}
            isInvalid={isEmailInvalid}
            onChange={handleEmailChange}
          />
        </div>
        <CustomButton
          variant="primary"
          size="lg"
          title="Lanjutkan"
          rightIcon="i-material-symbols-chevron-right-rounded"
          containerStyles=""
          handleClick={() => {}}
        />

        <p className="mt-3 text-xs text-center text-gray-400">
          Sudah punya akun?{" "}
          <Link
            href="#"
            className="text-brands-light-green font-semibold hover:text-brands-light-green/70 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Masuk dengan akun saya
          </Link>
        </p>
      </form>
    </div>
  );
}
