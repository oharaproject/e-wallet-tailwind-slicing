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
    <div className="transaction-container">
      <Appbar title="Riwayat Transaksi" />

      <div className="transaction-history">
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
            filteredTransactions.map((item, index) => (
              <div key={item.id}>
                <ListItem
                  iconClass={item.iconClass}
                  title={item.title}
                  description={item.description}
                  rightText={item.rightText}
                  href={item.href}
                />
                {index !== filteredTransactions.length - 1 && (
                  <div className="divider"></div>
                )}
              </div>
            ))
          ) : (
            <p className="notransaction-text">Tidak ada transaksi ditemukan</p>
          )}
        </div>
      </div>

      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}
