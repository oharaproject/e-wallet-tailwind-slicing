"use client";
import React, { useEffect, useRef } from "react";
import { CustomButton, ListItem } from "@/components";
import { contactData } from "@/constants"; // Assuming contact data
import { SelectContactModalProps } from "@/types";

const SelectContactModal = ({
  isOpen,
  onClose,
  onSelectContact,
}: SelectContactModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal(); // Open modal when isOpen is true
    } else {
      modalRef.current?.close(); // Close modal when isOpen is false
    }
  }, [isOpen]);

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
          <div className="contact-list mt-4">
            {contactData.map((contact) => (
              <ListItem
                key={contact.account}
                iconClass="i-material-symbols-account-circle"
                title={contact.name}
                description={contact.account}
                rightText="Pilih"
                href=""
                onClick={() => onSelectContact(contact)} // Trigger selection when clicked
              />
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SelectContactModal;
