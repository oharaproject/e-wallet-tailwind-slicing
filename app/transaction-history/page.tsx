"use client";
import React, { useState } from "react";
import { Appbar, CustomInput, ListItem, Navbar } from "@/components";
import { transactionData } from "@/constants";

export default function TransactionHistory() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactionData.filter(
    (transaction) =>
      transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.rightText.toString().includes(searchTerm)
  );

  return (
    <div className="container md:max-w-md mx-auto min-h-screen bg-green-50 pb-[80px] flex flex-col gap-2 p-4">
      <Appbar title="Riwayat Transaksi" />

      <div className="rounder-[20px] bg-white shadow-md mt-20 overflow-hidden rounded-2xl px-2.5">
        <div className="">
          <CustomInput
            id="search-transaction"
            type="text"
            label=""
            placeholder="Cari transaksi..."
            leftIcon="i-material-symbols-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((item) => (
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
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm italic mt-4">
              Tidak ada transaksi ditemukan
            </p>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full py-3 shadow-md">
        <Navbar />
      </div>
    </div>
  );
}
