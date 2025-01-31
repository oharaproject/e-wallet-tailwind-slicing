"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { transactionData, userData } from "@/constants";
import Link from "next/link";
import {
  CustomButton,
  CardList,
  ListItem,
  Navbar,
  CustomModal,
} from "@/components";

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topupAmount, setTopupAmount] = useState<string>("");
  const [balance, setBalance] = useState(userData.balance);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    console.log("Modal state changed:", isModalOpen);
  }, [isModalOpen]);

  const handleVisibilityToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleTopup = () => {
    const amount = parseInt(topupAmount.replace(/^0+/, ""), 10);

    if (isNaN(amount) || amount <= 10000) {
      alert("Minimal top-up adalah Rp 10.000");
      setIsInvalid(true);
      return;
    }

    setBalance((prev) => prev + amount);
    setIsModalOpen(false);
    setTopupAmount("");
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
                ? `Rp ${new Intl.NumberFormat("id-ID").format(balance)}`
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
          onClick={() => {
            console.log("Opening Topup Modal...");
            setIsModalOpen(true);
          }}
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

      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          topupAmount={topupAmount}
          setTopupAmount={setTopupAmount}
          onTopup={handleTopup}
          isInvalid={isInvalid}
        />
      )}
    </div>
  );
}
