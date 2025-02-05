"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { contactData } from "@/constants";

interface SearchContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContact: (contact: { name: string; account: string }) => void;
  setIsOpen: (value: boolean) => void;
}

interface FilteredContact {
  id: number;
  name: string;
  account: string;
  iconClass: string;
}

const SearchContactModal = ({
  isOpen,
  onClose,
  onSelectContact,
  setIsOpen,
}: SearchContactModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [filteredContact, setFilteredContact] =
    useState<FilteredContact | null>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const isValidNumber = /^[0-9]{9}$/.test(value);

    if (!isValidNumber) {
      setIsInvalid(true);
      setFilteredContact(null);
    } else {
      const matchedContact = contactData.find(
        (contact) => contact.account === value
      );

      if (matchedContact) {
        setIsInvalid(false);
        setFilteredContact(matchedContact);
      } else {
        setIsInvalid(true);
        setFilteredContact(null);
      }
    }
  };

  const handleContinueClick = () => {
    if (filteredContact) {
      onSelectContact(filteredContact);
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
          <div></div>
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
                placeholder="Cari KUSAKU ID"
                leftIcon="i-material-symbols-search"
                value={searchTerm}
                onChange={handleSearchChange}
                isInvalid={isInvalid}
              />
            </div>
            <CustomButton
              variant="primary"
              size="lg"
              iconSize="md"
              title="Lanjutkan"
              leftIcon="i-material-symbols-send-rounded"
              containerStyles="items-center w-full"
              onClick={handleContinueClick}
              isDisabled={isInvalid || !filteredContact}
            />
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default SearchContactModal;
