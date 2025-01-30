"use client";
import { useState } from "react";
import React from "react";
import { Appbar, CustomInput, CustomButton, Navbar } from "@/components";
import Link from "next/link";

const AVAILABLE_BALANCE = 20000000;
const CORRECT_PIN = "123456";

export default function Withdrawal() {
  const [formData, setFormData] = useState({
    nominal: "",
    confirmPin: "",
  });

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nominal = parseInt(formData.nominal.replace(/\D/g, ""), 10);
    const remainingBalance = AVAILABLE_BALANCE - nominal;

    if (!formData.nominal || !formData.confirmPin) {
      alert("⚠ Harap isi semua bidang sebelum melanjutkan!");
      return;
    }

    if (isNaN(nominal) || nominal <= 0) {
      alert("⚠ Masukkan jumlah nominal yang valid!");
      return;
    }

    if (remainingBalance < 50000) {
      alert("⚠ Saldo setelah penarikan tidak boleh kurang dari Rp. 50.000!");
      return;
    }

    if (formData.confirmPin !== CORRECT_PIN) {
      alert("⚠ PIN yang Anda masukkan salah!");
      return;
    }

    alert(
      `✅ Permintaan penarikan sebesar Rp. ${nominal.toLocaleString(
        "id-ID"
      )} telah diproses.`
    );
  };

  return (
    <div className="transaction-container relative">
      <Appbar title="Buat Penarikan Saldo" />

      <div className="mt-[40px] flex flex-col w-full gap-6 p-4 flex-w relative">
        <form
          onSubmit={handleSubmit}
          className="rounded-[20px] bg-white p-6 shadow-md space-y-8"
        >
          <CustomInput
            id="nominal"
            type="text"
            label="NOMINAL"
            placeholder="Tersedia: Rp. 20.000.000"
            leftIcon="i-material-symbols-account-balance-wallet"
            value={formData.nominal}
            onChange={(e) => handleChange("nominal", e.target.value)}
          />

          <CustomInput
            id="confirmPin"
            type="text"
            label="PIN"
            placeholder="Masukan 6 Digit PIN"
            leftIcon="i-material-symbols-security-rounded"
            value={formData.confirmPin}
            onChange={(e) => handleChange("confirmPin", e.target.value)}
          />

          <CustomButton
            type="submit"
            variant="primary"
            size="lg"
            iconSize="md"
            title="Proses Permintaan"
            leftIcon="i-material-symbols-save-rounded"
            containerStyles="w-full"
          />

          <p className="mt-3 text-xs text-center text-gray-400">
            Proses pencairan maks 2 hari kerja.{" "}
            <Link href="#" className="page-description">
              Hubungi Pusat Bantuan
            </Link>{" "}
            jika ada kendala.
          </p>
        </form>

        <div className="navbar-container">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
