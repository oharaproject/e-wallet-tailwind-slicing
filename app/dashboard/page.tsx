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
  SelectContactModal,
  SearchContactModal,
} from "@/components";

export default function Dashboard() {
  // topup state
  const [isVisible, setIsVisible] = useState(true);
  const [isTopupOpen, setIsTopupOpen] = useState(false);
  const [topupAmount, setTopupAmount] = useState<string>("");
  const [balance, setBalance] = useState(userData.balance);
  const [isInvalid, setIsInvalid] = useState(false);

  // transfer state
  const [isTransferSearchOpen, setIsTransferSearchOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<{
    name: string;
    account: string;
  } | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("Modal state changed:", isTopupOpen, isTransferOpen);
  }, [isTopupOpen, isTransferOpen]);

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
    setIsTopupOpen(false);
    setTopupAmount("");
  };

  const handleTransferClick = () => {
    setIsTransferSearchOpen(true);
    setIsTransferOpen(false);
    setIsOpen(false);
  };

  const handleSelectContact = (contact: { name: string; account: string }) => {
    setSelectedContact(contact);
    setIsOpen(false);
    setIsTransferSearchOpen(false);
    setIsTransferOpen(true);
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
            setIsTopupOpen(true);
            setIsTransferSearchOpen(false);
            setIsTransferOpen(false);
          }}
        />
        <CustomButton
          variant="primary"
          size="lg"
          iconSize="md"
          title="Transfer"
          leftIcon="i-material-symbols-download-rounded"
          containerStyles="w-full items-center"
          onClick={handleTransferClick}
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

      {isTopupOpen && (
        <CustomModal
          isTopupOpen={isTopupOpen}
          setIsTopupOpen={setIsTopupOpen}
          onClose={() => setIsTopupOpen(false)}
          topupAmount={topupAmount}
          setTopupAmount={setTopupAmount}
          onTopup={handleTopup}
          isInvalid={isInvalid}
        />
      )}

      {isTransferSearchOpen && (
        <SearchContactModal
          isOpen={isTransferSearchOpen}
          onClose={() => setIsTransferSearchOpen(false)}
          onSelectContact={handleSelectContact}
          setIsOpen={setIsOpen}
        />
      )}

      {isOpen && (
        <SelectContactModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSelectContact={handleSelectContact}
        />
      )}

      {isTransferOpen && selectedContact && (
        <CustomModal
          isTransferOpen={isTransferOpen}
          setIsTransferOpen={setIsTransferOpen}
          onClose={() => setIsTransferOpen(false)}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
          isInvalid={isInvalid}
          topupAmount=""
          setTopupAmount={() => {}}
          onTopup={() => {}}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}
