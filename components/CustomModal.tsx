"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { CustomModalProps } from "@/types";
import Image from "next/image";

const CustomModal = ({
  isTopupOpen,
  setIsTopupOpen,
  isOpen,
  setIsOpen,
  isTransferOpen,
  setIsTransferOpen,
  selectedContact,
  isInvalid,
  onClose,
  topupAmount,
  setTopupAmount,
  onTopup,
}: CustomModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const transferModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isTopupOpen && modalRef.current) {
      modalRef.current.showModal();
    } else if (modalRef.current) {
      modalRef.current.close();
    }
  }, [isTopupOpen]);

  useEffect(() => {
    if (isTransferOpen && transferModalRef.current) {
      transferModalRef.current.showModal();
    } else if (transferModalRef.current) {
      transferModalRef.current.close();
    }
  }, [isTransferOpen]);

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

    if (transferModalRef.current) {
      transferModalRef.current.close();
    }
  };

  return (
    <>
      {/* topup modal */}
      <dialog
        ref={modalRef}
        className="m-0 size-full bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-lg open:flex open:max-h-none open:max-w-none open:flex-col open:justify-end"
        onClose={onClose}
      >
        <div className="flex flex-col">
          <div className="flex justify-between px-6 pb-8">
            {isOpen ? (
              <CustomButton
                variant="secondary"
                size="sm"
                iconSize="sm"
                title="Back"
                leftIcon="i-material-symbols-chevron-left-rounded"
                containerStyles="items-center"
                onClick={handleCloseModal}
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
          </div>
        </div>
      </dialog>

      {/* transfer modal */}
      <dialog
        ref={transferModalRef}
        className="m-0 size-full bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-lg open:flex open:max-h-none open:max-w-none open:flex-col open:justify-end"
        onClose={onClose}
      >
        <div className="flex flex-col">
          <div className="flex justify-between px-6 pb-8">
            {isOpen ? (
              <CustomButton
                variant="secondary"
                size="sm"
                iconSize="sm"
                title="Back"
                leftIcon="i-material-symbols-chevron-left-rounded"
                containerStyles="items-center"
                onClick={handleCloseModal}
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
            {/* Modal transfer */}
            {isTransferOpen && selectedContact && (
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
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <span>{selectedContact.name}</span>
                      <span className="i-material-symbols-circle text-[4px] text-gray-500"></span>
                      <span>{selectedContact.account}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-brands-light-green hover:text-brands-light-green/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                    onClick={() => setIsOpen(true)}
                  >
                    Cari Kontak
                  </a>
                </div>
                <div className="relative">
                  <CustomInput
                    id="search-contact"
                    type="text"
                    label=""
                    placeholder="Masukan Nominal Transfer..."
                    leftIcon="i-material-symbols-search"
                    value={searchTerm}
                    onChange={() => {}}
                  />
                </div>
                <CustomButton
                  variant="primary"
                  size="lg"
                  iconSize="md"
                  title="Lanjutkan Transfer"
                  leftIcon="i-material-symbols-send-rounded"
                  containerStyles="items-center w-full"
                  onClick={() => {}}
                />
              </form>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CustomModal;
