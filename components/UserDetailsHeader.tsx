"use client";

import { User } from "@/utils/types";
import Image from "next/image";
import StarTier from "./StarTier";
import { userDetailsTabs } from "@/lib/constants";
import { useState } from "react";

function UserDetailsHeader({ data }: { data: User[] }) {
  const [activeTab, setActiveTab] = useState(0);

  const {
    id,
    userTier,
    personalInfo: { fullName },
    bankDetails: { accountBalance, accountNumber, bankName },
  } = data[0];

  return (
    <div className="rounded-lg bg-white px-[30px] pt-[30px] lg:pb-0">
      <div className="flex flex-wrap items-center gap-5">
        <Image
          src="/avatar.png"
          alt="user avatar"
          width={80}
          height={80}
          className="md:h-[100px] md:w-[100px]"
        />
        <div>
          <p className="text-sm font-medium text-[#213F7D] md:text-[22px]">
            {fullName}
          </p>
          <p className="text-xs text-[#545F7D] md:text-sm">{id}</p>
        </div>
        <div className="border-r border-[#545F7D] pr-[30px] max-[321px]:border-none md:border-x md:px-[30px]">
          <p className="text-xs font-medium text-[#545F7D] md:text-sm">
            User&apos;s Tier
            <StarTier tier={Number(userTier)} />
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-[#213F7D] md:text-[22px]">
            {accountBalance}
          </p>
          <p className="text-xs text-[#213F7D]">
            {accountNumber}/{bankName}
          </p>
        </div>
      </div>

      <div className="mt-[50px] flex flex-wrap items-center justify-between gap-[20px]">
        {userDetailsTabs.map((tab, index) => (
          <p
            key={tab}
            className={`py-2.5 ${activeTab === index && "cursor-pointer border-b-2 border-[#39CDCC] max-[321px]:px-[10px] px-[25px] text-[#39CDCC]"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </p>
        ))}
      </div>
    </div>
  );
}

export default UserDetailsHeader;
