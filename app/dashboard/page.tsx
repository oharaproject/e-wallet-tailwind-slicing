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
    <div className="transaction-container">
      <div className="flex">
        <Link href="#" className="user-link">
          <Image
            src={userData.avatar}
            alt="User Avatar"
            height={32}
            width={32}
          />
          <span className="user-name">{userData.name}</span>
        </Link>
      </div>

      <div className="background-container">
        <h1 className="app-title">kusaku</h1>
        <div className="user-balance">
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
          ></button>
        </div>
      </div>

      <div className="btn-dashboard">
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
        {transactionData.map((item, index) => (
          <div key={item.id}>
            <ListItem
              iconClass={item.iconClass}
              title={item.title}
              description={item.description}
              rightText={item.rightText}
              href={item.href}
            />
            {index !== transactionData.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        ))}
      </CardList>

      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}
