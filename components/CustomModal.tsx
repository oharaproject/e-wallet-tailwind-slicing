import React from "react";
import { useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { CustomModalProps } from "@/types";

const CustomModal = ({
  isOpen,
  isInvalid,
  onClose,
  topupAmount,
  setTopupAmount,
  onTopup,
}: CustomModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log("Modal isOpen status:", isOpen);
    if (isOpen) {
      console.log("Opening Modal...");
      modalRef.current?.showModal();
    } else {
      console.log("Closing modal...");
      modalRef.current?.close();
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
        </div>
      </div>
    </dialog>
  );
};

export default CustomModal;
