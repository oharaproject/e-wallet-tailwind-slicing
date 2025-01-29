"use client";
import { useState } from "react";
import { Appbar, CustomInput, CustomButton, Navbar } from "@/components";
import Image from "next/image";
import { accountSettings, userData } from "@/constants";

export default function AccountSettings() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    oldPin: "",
    newPin: "",
    confirmPin: "",
    bank: "",
    accountName: "",
    accountNumber: "",
  });

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent, section: string) => {
    e.preventDefault();
    alert(
      `Perubahan di ${section} berhasil disimpan:\n` + JSON.stringify(formData)
    );
  };

  return (
    <div className="transaction-container relative">
      <Appbar title="Pengaturan Akun" />

      <div className="mt-[40px] flex flex-col w-full gap-6 p-4 flex-w">
        <form
          onSubmit={(e) => handleSubmit(e, "Informasi Personal")}
          className="bg-white p-6 rounded-[20px] shadow-md space-y-6"
        >
          <h3 className="text-xl font-semibold">Informasi Personal</h3>
          <div className="flex flex-col items-center">
            <Image
              src={userData.avatar}
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          {accountSettings[0].inputs.map(
            ({ id, type, label, placeholder, icon }) => (
              <div key={id} className="mb-4">
                <CustomInput
                  id={id}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  value={formData[id as keyof typeof formData]}
                  onChange={(e) => handleChange(id, e.target.value)}
                  leftIcon={icon}
                />
              </div>
            )
          )}

          <CustomButton
            variant="outline"
            size="lg"
            iconSize="md"
            title="Simpan Perubahan"
            leftIcon="i-material-symbols-save-rounded"
            containerStyles="w-full"
          />
        </form>

        <form
          onSubmit={(e) => handleSubmit(e, "Keamanan PIN")}
          className="bg-white p-6 rounded-[20px] shadow-md space-y-6"
        >
          <h3 className="text-xl font-semibold">Keamanan PIN</h3>
          {accountSettings[1].inputs.map(
            ({ id, type, label, placeholder, icon }) => (
              <div key={id} className="mb-4">
                <CustomInput
                  id={id}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  value={formData[id as keyof typeof formData]}
                  onChange={(e) => handleChange(id, e.target.value)}
                  leftIcon={icon}
                />
              </div>
            )
          )}

          <CustomButton
            variant="outline"
            size="lg"
            iconSize="md"
            title="Simpan Perubahan"
            leftIcon="i-material-symbols-save-rounded"
            containerStyles="w-full"
          />
        </form>

        <form
          onSubmit={(e) => handleSubmit(e, "Penarikan Dana")}
          className="bg-white p-6 rounded-[20px] shadow-md space-y-6"
        >
          <h3 className="text-xl font-semibold">Penarikan Dana</h3>
          {accountSettings[2].inputs.map(
            ({ id, type, label, placeholder, icon, options }) => (
              <div key={id} className="mb-4">
                <CustomInput
                  id={id}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  value={formData[id as keyof typeof formData]}
                  onChange={(e) => handleChange(id, e.target.value)}
                  leftIcon={icon}
                  options={options}
                />
              </div>
            )
          )}

          <CustomButton
            variant="outline"
            size="lg"
            iconSize="md"
            title="Simpan Perubahan"
            leftIcon="i-material-symbols-save-rounded"
            containerStyles="w-full"
          />
        </form>
      </div>

      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}
