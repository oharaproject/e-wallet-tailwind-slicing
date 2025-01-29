"use client";

import React, { useState } from "react";
import { CustomButton, CustomInput } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    setIsEmailInvalid(!/^\S+@\S+\.\S+$/.test(value));
  };

  return (
    <div className="register-container">
      <Image
        src="/fingerprint.svg"
        alt="Finger Print Illustration"
        width={160}
        height={160}
        priority
        className="h-[160px] w-auto"
      />

      <div className="register-title-container">
        <h1 className="register-title">Buat 6 Digit Pin</h1>
        <p className="register-subtitle">
          Buatlah 6 digit PIN untuk masuk lebih aman
        </p>
      </div>

      <form className="register-form">
        <div className="mb-2">
          <CustomInput
            id="password"
            type="password"
            label="Masukan Pasword"
            placeholder="6 Digit PIN"
            leftIcon="i-material-symbols-security-rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <CustomInput
            id="password"
            type="password"
            label=""
            placeholder="Konfirmasi Ulang PIN"
            leftIcon="i-material-symbols-security-rounded"
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
          Dengan masuk atau daftar, Anda sudah setuju dengan{" "}
          <Link href="#" className="page-description">
            Ketentuan layanan{" "}
          </Link>
          dan{" "}
          <Link href="#" className="page-description">
            Kebijakan Privasi{" "}
          </Link>
          KUSAKU
        </p>
      </form>
    </div>
  );
}
