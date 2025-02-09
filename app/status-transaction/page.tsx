"use client";
import React, { useEffect, useState } from "react";
import { Appbar, CustomButton, Navbar } from "@/components";
import { transactionStatusData, statusConfig } from "@/constants";
import { useRouter } from "next/router";

export default function StatusTransaction() {
  const [isClient, setIsClient] = useState(false);
  const [router, setRouter] = useState<any>(null);
  const [status, setStatus] = useState("Transaksi Sedang Diproses");
  const [transactionData, setTransactionData] =
    useState<TransactionData | null>(null);

  type TransactionData = {
    id: string;
    iconClass: string;
    title: string;
    transactionTime: string;
    amount: number;
    href: string;
    category: string;
    recipient: string;
    bank: string;
    accountNumber: string;
  };
  // const {
  //   transactionId,
  //   amount,
  //   category,
  //   recipient,
  //   bank,
  //   accountNumber,
  //   transactionTime,
  //   status,
  // } = transactionStatusData;

  useEffect(() => {
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     // const routerInstance = useRouter();
  //     setRouter(routerInstance);
  //   }
  // }, [isClient]);

  useEffect(() => {
    if (router && router.query.newTransaction) {
      const data = router.query.newTransaction;
      if (data) {
        const parsedData: TransactionData = JSON.parse(data as string);
        setTransactionData(parsedData);

        setTimeout(() => {
          setStatus("Transaksi Berhasil Diproses");
        }, 10000);
      }
    }
  }, [router]);

  if (!transactionData) {
    return <p>Loading...</p>;
  }

  const { backgroundColor, textColor, buttonTitle, icon, statusDescription } =
    statusConfig[status] || {
      backgroundColor: "bg-gray-200",
      textColor: "text-white",
      buttonTitle: "Butuh Bantuan?",
      icon: "i-material-symbols-help-rounded",
      statusDescription: null,
    };

  useEffect(() => {
    const data = router.query.newTransaction;

    if (data) {
      const parsedData: TransactionData = JSON.parse(data as string);
      setTransactionData(parsedData);

      setTimeout(() => {
        setStatus("Transaksi Berhasil Diproses");
      }, 10000);
    }
  }, [router.query]);

  if (!transactionData) {
    return <p>Loading...</p>;
  }

  const formattedAmount =
    typeof transactionData.amount === "number"
      ? `${transactionData.amount < 0 ? "- " : ""}Rp ${new Intl.NumberFormat(
          "id-ID"
        ).format(Math.abs(transactionData.amount))}`
      : transactionData.amount;

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
          <p className="id-transaction">{`ID Transaksi ${transactionData.id}`}</p>
          <p className="amount">{formattedAmount}</p>
          <div className="flex flex-col gap-2">
            <div className="subcontainer">
              <p className="status-subtitle">Kategori</p>
              <p className="detail-transaction">{transactionData.category}</p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Penerima</p>
              <p className="detail-transaction">{transactionData.recipient}</p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Bank Penerima</p>
              <p className="detail-transaction">{transactionData.bank}</p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Nomor Rekening</p>
              <p className="detail-transaction">
                {transactionData.accountNumber}
              </p>
            </div>
            <div className="subcontainer">
              <p className="status-subtitle">Waktu Transaksi</p>
              <p className="detail-transaction">
                {transactionData.transactionTime}
              </p>
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
