import React from "react";
import { Appbar, CustomButton, ListItem } from "@/components";
import Image from "next/image";
import { accountMenuItems, userData } from "@/constants";

export default function Account() {
  return (
    <div className="container md:max-w-md mx-auto min-h-screen bg-green-50 pb-[80px] flex flex-col gap-2">
      <Appbar title="Akun" />

      <div className="bg-brands-light-green relative h-[260px]"></div>

      <div className="absolute mt-[92px] flex flex-col w-full gap-6 p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={userData.avatar}
              alt="User Avatar"
              width={32}
              height={32}
            />
            <div className="text-white">
              <p className="text-lg font-semibold">{userData.name}</p>
              <p className="text-xs">{userData.accountNumber}</p>
            </div>
          </div>

          <CustomButton
            variant="secondary"
            size="lg"
            iconSize="lg"
            title="Tarik Saldo"
            leftIcon="i-material-symbols-account-balance-wallet"
            onClick={() => router.push("/withdraw")}
            containerStyles="px-20 font-semibold "
          />
        </div>
        <span className="px-20"></span>

        <div className="rounded-[20px] bg-white p-2.5 shadow-md">
          {accountMenuItems.map((item) => (
            <div key={item.id}>
              <ListItem
                iconClass={item.icon}
                title={item.title}
                href={item.link}
              />
              <div className="divider"></div>
            </div>
          ))}
        </div>

        <CustomButton
          variant="outline"
          size="lg"
          iconSize="md"
          title="Keluar Aplikasi"
          leftIcon="i-material-symbols-power-settings-new-outline"
          containerStyles="text-brands-light-green border-brands-light-green"
          onClick={() => alert("Logout")}
        />
      </div>

      <span className=""></span>
    </div>
  );
}
