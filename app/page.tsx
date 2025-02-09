"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { contactData, transactionData, userData } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CustomButton,
  CardList,
  ListItem,
  Navbar,
  CustomModal,
  SelectContactModal,
  SearchContactModal,
} from "@/components";

const MAX_DAILY_TRANSFER = 100000000;
const MIN_REMAINING_BALANCE = 50000;

type TransactionData = {
  id: string;
  iconClass: string;
  title: string;
  transactionTime: string;
  amount: number;
  href: string;
  rightText?: number;
  category: string;
  recipient: string;
  bank: string;
  accountNumber: string;
  status: string;
  description?: string;
};

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false);
  // const [router, setRouter] = useState<any>(null);

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
  const [transferAmount, setTransferAmount] = useState("");
  const [isAmountInvalid, setIsAmountInvalid] = useState(false);

  // transaction data
  const [transactionData, setTransactionData] = useState<TransactionData[]>([]);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     const routerInstance = useRouter();
  //     setRouter(routerInstance);
  //   }
  // }, [isClient]);

  // if (!router) {
  //   return <p>Loading...</p>;
  // }

  useEffect(() => {
    console.log("Modal state changed:", isTopupOpen, isTransferOpen);
  }, [isTopupOpen, isTransferOpen]);

  const handleVisibilityToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleTopupAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setTopupAmount(value);

    if (value && parseInt(value, 10) <= 10000) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }

    const amount = parseInt(value, 10);
    if (amount <= 10000) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
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
    setIsInvalid(false);
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
    console.log("isTransferOpen after select contact:", isTransferOpen);
  };

  const handleTransferAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("User input:", e.target.value);
    const value = e.target.value.replace(/\D/g, "");
    setTransferAmount(value);

    if (!value || isNaN(parseInt(value, 10))) {
      setIsAmountInvalid(false);
      return;
    }

    const amount = parseInt(value, 10);
    if (amount > MAX_DAILY_TRANSFER) {
      alert("Maksimal transfer per hari adalah Rp 100.000.000");
      setIsAmountInvalid(true);
    } else if (amount > balance) {
      alert("Saldo tidak mencukupi untuk melakukan transfer ini");
      setIsAmountInvalid(true);
    } else if (balance - amount < MIN_REMAINING_BALANCE) {
      alert(`Saldo minimun setelah transfer harus Rp ${MIN_REMAINING_BALANCE}`);
      setIsAmountInvalid(true);
    } else {
      setIsAmountInvalid(false);
    }
  };

  const handleTransfer = () => {
    if (!isAmountInvalid && transferAmount) {
      const amount = parseInt(transferAmount, 10);
      setBalance((prev) => prev - amount);

      const transactionID = "#K" + Math.floor(Math.random() * 1000000000);

      const formattedDate = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const selectedContactData = contactData.find(
        (contact) => contact.account === selectedContact?.account
      );

      const newTransaction: TransactionData = {
        id: transactionID,
        iconClass: "i-material-symbols-download-rounded",
        title: selectedContact?.name || "Unknown",
        description: formattedDate,
        rightText: -amount,
        href: "#",
        amount: -amount,
        category: "Uang Keluar",
        recipient: selectedContact?.name || "Unknown",
        bank: selectedContactData?.bank || "Unknown",
        accountNumber: selectedContact?.account || "Unknown",
        transactionTime: formattedDate + " " + new Date().toLocaleString(),
        status: "Transaksi Sedang Diproses",
      };

      // transactionData.push(newTransaction);
      setTransactionData((prevData) => [...prevData, newTransaction]);

      router.push({
        pathname: "/status-transaction",
        query: { newTransaction: JSON.stringify(newTransaction) },
      });

      // alert("Transfer berhasil!");
      setIsTransferOpen(false);
      setTransferAmount("");
      setIsAmountInvalid(false);
    }
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
              description={item.transactionTime}
              rightText={item.amount}
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
          onTopupAmountChange={handleTopupAmountChange}
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
          onCloseSearch={() => {
            setIsTransferSearchOpen(false);
            setIsOpen(false);
          }}
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
          isAmountInvalid={isAmountInvalid}
          transferAmount={transferAmount}
          setTransferAmount={setTransferAmount}
          onTransferAmountChange={handleTransferAmountChange}
          onTransfer={handleTransfer}
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
