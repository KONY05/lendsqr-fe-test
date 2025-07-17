"use client";

import { nav_businesses, nav_customers, nav_settings } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function DesktopNav() {
  const pathname = usePathname();
  console.log(pathname);

  const isActive = (path: string) => pathname.startsWith(`/${path}`);

  return (
    <section className="hidden border-r bg-white pt-[39px] lg:block">
      <p className="flex items-center gap-2.5 px-[30px] text-[#213F7D]">
        <Image
          src="/navIcons/briefcase.svg"
          alt="nav icon"
          width={15}
          height={10}
        />{" "}
        Switch organization
        <ChevronDown className="size-4" />
      </p>
      <p className="mt-[32px] flex items-center gap-2.5 px-[30px] text-[#213F7D] opacity-55">
        <Image
          src="/navIcons/briefcase.svg"
          alt="nav icon"
          width={15}
          height={10}
        />{" "}
        Dashboard
      </p>

      <div className="mt-[41px] h-[65vh] space-y-[41px] overflow-y-auto">
        <div>
          <h2 className="px-[30px] text-xs font-medium text-[#213F7D] uppercase">
            Customers
          </h2>
          <div className="mt-2.5">
            {nav_customers.map(({ name, icon }) => (
              <p
                key={name}
                className={`flex cursor-pointer items-center gap-2.5 px-[30px] py-2.5 text-[#213F7D] ${isActive(name.toLowerCase()) ? "border-l-3 border-[#39CDCC] bg-[#39CDCC0F]" : "opacity-55"}`}
              >
                <Image src={icon} alt="nav icon" width={15} height={10} />{" "}
                {name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="px-[30px] text-xs font-medium text-[#213F7D] uppercase">
            Businesses
          </h2>
          <div className="mt-2.5">
            {nav_businesses.map(({ name, icon }) => (
              <p
                key={name}
                className="flex cursor-pointer items-center gap-2.5 px-[30px] py-2.5 text-[#213F7D] opacity-55"
              >
                <Image src={icon} alt="nav icon" width={15} height={10} />{" "}
                {name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="px-[30px] text-xs font-medium text-[#213F7D] uppercase">
            Settings
          </h2>
          <div className="mt-2.5">
            {nav_settings.map(({ name, icon }) => (
              <p
                key={name}
                className="flex cursor-pointer items-center gap-2.5 px-[30px] py-2.5 text-[#213F7D] opacity-55"
              >
                <Image src={icon} alt="nav icon" width={15} height={10} />{" "}
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesktopNav;
