"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { CustomModalProps } from "@/types";
import Image from "next/image";
import ListItem from "./ListItem";

const CustomModal = ({
  isTopupOpen,
  isTransferOpen,
  setIsTransferOpen,
  isInvalid,
  onClose,
  topupAmount,
  setTopupAmount,
  onTopup,
  contactData,
  selectedContact,
  setSelectedContact,
}: CustomModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchingContact, setIsSearchingContact] = useState(false);

  useEffect(() => {
    console.log("Modal isOpen status:", isTopupOpen, isTransferOpen);
    if (isTopupOpen || isTransferOpen) {
      console.log("Opening Modal...");
      modalRef.current?.showModal();
    } else {
      console.log("Closing modal...");
      modalRef.current?.close();
    }
  }, [isTopupOpen, isTransferOpen]);

  const filteredContact =
    contactData?.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.account.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <dialog
      ref={modalRef}
      className="m-0 size-full bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-lg open:flex open:max-h-none open:max-w-none open:flex-col open:justify-end"
      onClose={onClose}
    >
      <div className="flex flex-col">
        <div className="flex justify-between px-6 pb-8">
          {isSearchingContact ? (
            <CustomButton
              variant="secondary"
              size="sm"
              iconSize="sm"
              title="Back"
              leftIcon="i-material-symbols-chevron-left-rounded"
              containerStyles="items-center"
              onClick={() => setIsSearchingContact(false)}
            />
          ) : (
            <div></div>
          )}
          <CustomButton
            variant="secondary"
            size="sm"
            iconSize="sm"
            title="Close"
            leftIcon="i-material-symbols-close-rounded"
            containerStyles="items-center "
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col gap-8 rounded-t-[36px] bg-white p-6">
          {/* modal topup */}
          {isTopupOpen && (
            <form
              action=""
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <CustomInput
                  id="topup"
                  type="text"
                  label=""
                  placeholder="Nominal Rupiah"
                  leftIcon="i-material-symbols-account-balance-wallet"
                  value={topupAmount}
                  onChange={(e) => setTopupAmount(e.target.value)}
                  isInvalid={isInvalid}
                />
              </div>
              <CustomButton
                variant="primary"
                size="lg"
                iconSize="md"
                title="Top Up"
                leftIcon="i-material-symbols-send-rounded"
                containerStyles="items-center w-full"
                onClick={onTopup}
              />
            </form>
          )}

          {isSearchingContact ? (
            <div className="flex flex-col gap-y-1.5">
              <div className="mb-2">
                <CustomInput
                  id="search-contact"
                  type="text"
                  label=""
                  placeholder="Cari nama orang / rekening"
                  leftIcon="i-material-symbols-search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                {filteredContact.length > 0 ? (
                  filteredContact.map((item, index) => (
                    <div key={item.account}>
                      <ListItem
                        iconClass={item.icon}
                        title={item.name}
                        description={item.account}
                        rightText=""
                        href=""
                        onClick={() => {
                          if (setSelectedContact) {
                            setSelectedContact({
                              name: item.name,
                              account: item.account,
                            });
                            setIsSearchingContact(false);
                            if (setIsTransferOpen) {
                              setIsTransferOpen(true);
                            }
                          }
                        }}
                      />
                      {index !== filteredContact.length - 1 && (
                        <div className="divider"></div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="notransaction-text">
                    Tidak ada transaksi ditemukan
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* modal transfer */}
              {isTransferOpen && (
                <form
                  action=""
                  className="flex flex-col gap-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/logo-green.svg"
                        alt="kusaku logo"
                        width={57}
                        height={37}
                      />
                      {selectedContact ? (
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <span>{selectedContact.name}</span>
                          <span className="i-material-symbols-circle text-[4px] text-gray-500"></span>
                          <span>{selectedContact.account}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <span>Pilih Penerima</span>
                        </div>
                      )}
                    </div>
                    <a
                      href="#"
                      className="text-xs font-semibold text-brands-light-green hover:text-brands-light-green/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                      onClick={() => setIsSearchingContact(true)}
                    >
                      Cari Kontak
                    </a>
                  </div>
                  <div className="relative">
                    <CustomInput
                      id="topup"
                      type="text"
                      label=""
                      placeholder="Nominal Rupiah"
                      leftIcon="i-material-symbols-account-balance-wallet"
                      value={topupAmount}
                      onChange={(e) => setTopupAmount(e.target.value)}
                      isInvalid={isInvalid}
                    />
                  </div>
                  <CustomButton
                    variant="primary"
                    size="lg"
                    iconSize="md"
                    title="Top Up"
                    leftIcon="i-material-symbols-send-rounded"
                    containerStyles="items-center w-full"
                    onClick={onTopup}
                  />
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default CustomModal;
