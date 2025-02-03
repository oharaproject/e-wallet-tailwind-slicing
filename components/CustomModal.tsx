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
  setIsTopupOpen,
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
    console.log(
      "Checking modal state change: isTopupOpen:",
      isTopupOpen,
      "isTransferOpen:",
      isTransferOpen
    );
    if (isTopupOpen || isTransferOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
    console.log("Modal state after update:", isTopupOpen, isTransferOpen);
  }, [isTopupOpen, isTransferOpen]);

  if (!setSelectedContact) {
    console.error("setSelectedContact is undefined");
    return null;
  }

  const filteredContact =
    contactData?.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.account.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleCloseModal = () => {
    if (setIsTopupOpen) {
      setIsTopupOpen(false);
      console.log("setIsTopupOpen set to false");
    }

    if (setIsTransferOpen) {
      setIsTransferOpen(false);
      console.log("setIsTransferOpen set to false");
    }
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

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
            onClick={handleCloseModal}
          />
        </div>
        <div className="flex flex-col gap-8 rounded-t-[36px] bg-white p-6">
          {/* Modal topup */}
          {isTopupOpen && !isSearchingContact && (
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

          {/* Bagian pencarian kontak */}
          {isSearchingContact && (
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
                          console.log("Contact clicked:", item.name);
                          if (setSelectedContact) {
                            setSelectedContact({
                              name: item.name,
                              account: item.account,
                            });
                            console.log("Selected contact updated:", item.name);
                          } else {
                            console.error("setSelectedContact is undefined");
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
          )}

          {/* Modal transfer */}
          {isTransferOpen && !isSearchingContact && (
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
                      <span className="text-xs font-semibold text-brands-light-green">
                        Pilih Penerima
                      </span>
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
        </div>
      </div>
    </dialog>
  );
};

export default CustomModal;
