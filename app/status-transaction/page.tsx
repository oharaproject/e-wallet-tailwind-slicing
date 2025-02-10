"use client";
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Appbar, CustomButton, Navbar } from "@/components";
import { statusConfig } from "@/constants";

export default function StatusTransaction() {
  const router = useRouter();
  const { newTransaction } = router.query;
  const [transactionStatus, setTransactionStatus] = useState(null);

  useEffect(() => {
    if (newTransaction) {
      const parsedData = JSON.parse(newTransaction as string);
      setTransactionStatus(parsedData);

      setTimeout(() => {
        setTransactionStatus((prevState: any) => ({
          ...prevState,
          status: "Transaksi Berhasil Diproses",
        }));
      }, 10000);
    }
  }, [newTransaction]);

  if (!transactionStatus) {
    return <p>Loading...</p>; /
  }

  const {
    transactionId,
    amount,
    category,
    recipient,
    bank,
    accountNumber,
    transactionTime,
    status,
  } = transactionStatus;

  const { backgroundColor, textColor, buttonTitle, icon, statusDescription } =
    statusConfig[status] || {
      backgroundColor: "bg-gray-200",
      textColor: "text-white",
      buttonTitle: "Butuh Bantuan?",
      icon: "i-material-symbols-help-rounded",
      statusDescription: null,
    };

  const formattedAmount =
    typeof amount === "number"
      ? `${amount < 0 ? "- " : ""}Rp ${new Intl.NumberFormat("id-ID").format(
          Math.abs(amount)
        )}`
      : amount;

  return (
    <div className="transaction-container relative">
      <Appbar title="Status Transaksi" />

      <div
        className={`${backgroundColor} h-[290px] absolute top-0 left-0 right-0`}
      ></div>

      <div className="status-content z-0">
        <div className="flex flex-col">
          <h1 className={`status-title ${textColor}`}>{status}</h1>
          {statusDescription && (
            <p className={`status-description ${textColor}`}>
              {statusDescription}
            </p>
          )}
        </div>

        <div className="detail-transaction-container">
          <p className="id-transaction">{`ID Transaksi ${transactionId}`}</p>
          <p className="amount">{formattedAmount}</p>
          <div className="flex flex-col gap-2">
            <div className="subcontainer">
              <p className="status-subtitle">Kategori</p>
              <p className="detail-transaction">{category}</p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Penerima</p>
              <p className="detail-transaction">{recipient}</p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Bank Penerima</p>
              <p className="detail-transaction">{bank}</p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Nomor Rekening</p>
              <p className="detail-transaction">{accountNumber}</p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Waktu Transaksi</p>
              <p className="detail-transaction">{transactionTime}</p>
            </div>
          </div>
        </div>

        <CustomButton
          variant="outline"
          size="lg"
          iconSize="md"
          title={buttonTitle}
          leftIcon={`${icon} text-icon-md`}
          containerStyles=""
        />
      </div>

      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}
