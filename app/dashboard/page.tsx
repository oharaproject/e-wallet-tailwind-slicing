"use client";
import React, { useState } from "react";
import Image from "next/image";
import { transactionData, userData } from "@/constants";
import Link from "next/link";
import { CustomButton, CardList, ListItem, Navbar } from "@/components";

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibilityToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container md:max-w-md mx-auto min-h-screen bg-green-50 p-4 pb-[80px] flex flex-col gap-2">
      <div className="flex">
        <Link
          href="#"
          className="flex items-center gap-2 mb-4 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <Image
            src={userData.avatar}
            alt="User Avatar"
            height={32}
            width={32}
          />
          <span className="text-lg font-semibold text-gray-900">
            {userData.name}
          </span>
        </Link>
      </div>

      <div className="h-[165px] flex flex-col bg-gradient-to-b from-brands-light-green to-emerald-400 rounded-2xl text-white p-5 justify-between ">
        <h1 className="text-2xl font-bold uppercase">kusaku</h1>
        <div className="flex items-center gap-2 mt-4">
          <h2 className="text-2xl font-medium">
            <span>
              {isVisible
                ? `Rp ${new Intl.NumberFormat("id-ID").format(
                    userData.balance
                  )}`
                : "•••••••••"}
            </span>
          </h2>
          <button
            type="button"
            onClick={handleVisibilityToggle}
            className={`text-icon-lg focus:outline-none ${
              isVisible
                ? "i-material-symbols-visibility"
                : "i-material-symbols-visibility-off"
            }`}
          >
            <span></span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-2 mb-6">
        <CustomButton
          variant="outline"
          size="lg"
          iconSize="md"
          title="Top Up"
          leftIcon="i-material-symbols-download-rounded"
          containerStyles="w-full items-center"
        />
        <CustomButton
          variant="primary"
          size="lg"
          iconSize="md"
          title="Transfer"
          leftIcon="i-material-symbols-download-rounded"
          containerStyles="w-full items-center"
        />
      </div>

      <CardList title="Riwayat Transaksi" linkText="Lihat Lainnya" linkHref="#">
        {transactionData.map((item) => (
          <div key={item.id}>
            <ListItem
              iconClass={item.iconClass}
              title={item.title}
              description={item.description}
              rightText={item.rightText}
              href={item.href}
            />
            <div className="divider"></div>
          </div>
        ))}
      </CardList>

      <div className="fixed bottom-0 left-0 w-full py-3 shadow-md">
        <Navbar />
      </div>
    </div>
  );
}
