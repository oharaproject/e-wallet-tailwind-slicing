import React from "react";
import { Appbar, CustomButton, Navbar } from "@/components";
import { transactionStatusData } from "@/constants";

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

  const formattedAmount =
    typeof amount === "number"
      ? `${amount < 0 ? "- " : ""}Rp ${new Intl.NumberFormat("id-ID").format(
          Math.abs(amount)
        )}`
      : amount;
  return (
    <div className="container md:max-w-md mx-auto min-h-screen bg-green-50 pb-[80px] flex flex-col gap-2">
      <Appbar title="Status Transaksi" />

      <div className="bg-brands-light-green relative h-[260px]"></div>

      <div className="absolute mt-[92px] flex flex-col w-full gap-10 p-4">
        <div className="flex flex-col">
          <h1 className="text-center text-lg font-semibold text-white">
            {status}
          </h1>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md">
          <p className="text-right text-xs text-gray-900">{`ID Transaksi ${transactionId}`}</p>
          <p className="text-center text-2xl font-bold text-gray-900">
            {formattedAmount}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">Kategori</p>
              <p className="text-xs font-semibold text-gray-900">{category}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">Penerima</p>
              <p className="text-xs font-semibold text-gray-900">{recipient}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">Bank Penerima</p>
              <p className="text-xs font-semibold text-gray-900">{bank}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">Nomor Rekening</p>
              <p className="text-xs font-semibold text-gray-900">
                {accountNumber}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">Waktu Transaksi</p>
              <p className="text-xs font-semibold text-gray-900">
                {transactionTime}
              </p>
            </div>
          </div>
        </div>

        <CustomButton
          variant="outline"
          size="lg"
          iconSize="md"
          title="Lihat Transaksi Lainnya"
          leftIcon="i-material-symbols-receipt-rounded text-icon-md"
          containerStyles=""
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full py-3 shadow-md">
        <Navbar />
      </div>
    </div>
  );
}
