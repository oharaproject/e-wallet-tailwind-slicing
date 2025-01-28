import React from "react";
import { Appbar, CustomButton, Navbar } from "@/components";
import { transactionStatusData, statusConfig } from "@/constants";

export default function StatusTransaction() {
  const {
    transactionId,
    amount,
    category,
    recipient,
    bank,
    accountNumber,
    transactionTime,
    status,
  } = transactionStatusData;

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
    <div className="status-transaction-container">
      <Appbar title="Status Transaksi" />

      <div className={`${backgroundColor} relative h-[260px]`}></div>

      <div className="status-content">
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
