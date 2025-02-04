"use client";
import React, { useEffect, useRef, useState } from "react";
import { CustomButton, ListItem, CustomInput } from "@/components";
import { contactData } from "@/constants"; // Assuming contact data
import { SelectContactModalProps } from "@/types";

const SelectContactModal = ({
  isOpen,
  onClose,
  onSelectContact,
}: SelectContactModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const modalRef = useRef<HTMLDialogElement>(null);

  const filteredContact =
    contactData?.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.account.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal(); // Open modal when isOpen is true
    } else {
      modalRef.current?.close(); // Close modal when isOpen is false
    }
  }, [isOpen]);

  const handleSelectContact = (contact: { name: string; account: string }) => {
    // Memanggil fungsi onSelectContact yang diterima dari props untuk mengirim kontak yang dipilih
    onSelectContact(contact);
  };

  return (
    <dialog
      ref={modalRef}
      className="m-0 size-full bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-lg open:flex open:max-h-none open:max-w-none open:flex-col open:justify-end"
      onClose={onClose}
    >
      <div className="flex flex-col">
        <div className="flex justify-between px-6 pb-8">
          <CustomButton
            variant="secondary"
            size="sm"
            iconSize="sm"
            title="Back"
            leftIcon="i-material-symbols-chevron-left-rounded"
            containerStyles="items-center"
            onClick={onClose}
          />
          <CustomButton
            variant="secondary"
            size="sm"
            iconSize="sm"
            title="Close"
            leftIcon="i-material-symbols-close-rounded"
            containerStyles="items-center"
            onClick={onClose}
          />
        </div>

        <div className="flex flex-col gap-8 rounded-t-[36px] bg-white p-6">
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
                filteredContact.map((contact, index) => (
                  <div key={contact.id}>
                    <ListItem
                      iconClass={contact.iconClass}
                      title={contact.name}
                      description={contact.account}
                      rightText="Pilih"
                      href=""
                      onClick={() => handleSelectContact(contact)}
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
        </div>
      </div>
    </dialog>
  );
};

export default SelectContactModal;
