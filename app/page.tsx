"use client";
import React, { useState } from "react";
import { CustomInput, CardList, ListItem, Navbar, Footer } from "@/components";
import { transactionData } from "../constants";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email validation
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
  };

  return (
    <div className="container md:max-w-md">
      <div className="min-h=screen bg-blue-50 px-4 pb-12">
        <Navbar />
        <form className="max-w-md mx-auto mt-8">
          <h1 className="text-center text-2xl text-gray-900 mb-4">
            Input Text
          </h1>
          <CustomInput
            id="email-input"
            type="email"
            label="Input Label"
            placeholder="Input Placeholder"
            hint="This is for hint"
            value={email}
            isInvalid={isEmailInvalid}
            leftIcon="i-material-symbols-arrow-left-alt"
            rightIcon="i-material-symbols-arrow-right-alt"
            onChange={handleEmailChange}
          />
        </form>

        <div className="h-8"></div>

        <div className="max-w-lg mx-auto mt-8">
          <CardList
            title="Riwayat Transaksi"
            linkText="Lihat Lainnya"
            linkHref="#"
          >
            {transactionData.map((item) => (
              <div key={item.id}>
                <ListItem
                  iconClass={item.iconClass}
                  title={item.title}
                  description={item.description}
                  rightText={item.rightText}
                  href={item.href}
                />
                <div className="divider"></div>
              </div>
            ))}
          </CardList>
        </div>

        <Footer />
      </div>
    </div>
  );
}
