import { UserDashboardBoxProps } from "@/utils/types";
import Image from "next/image";

function UserDashboardBox({ icon, title, data }: UserDashboardBoxProps) {
  return (
    <div className="rounded-lg bg-white px-[30px] pt-5 pb-[30px] lg:w-1/2">
      <Image src={icon} alt={title} width={40} height={40} />
      <p className="mt-[7px] text-sm font-medium text-[#545F7D] uppercase">
        {title}
      </p>
      <p className="mt-[11px] text-xl font-semibold text-[#213F7D] md:text-2xl">
        {data}
      </p>
    </div>
  );
}

export default UserDashboardBox;
