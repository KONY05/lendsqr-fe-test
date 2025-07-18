"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav_businesses, nav_customers, nav_settings } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(`/${path}`);
  return (
    <header className="flex w-full items-center justify-between gap-2 py-3 pr-4 pl-3.5 shadow-lg max-[321px]:pr-2.5 md:pr-9 md:pl-[30px] lg:py-[20px]">
      <div>
        <Image
          src="/logo.png"
          alt="Lendsqr Logo"
          width={80}
          height={50}
          className=""
        />
      </div>
      <div>
        <div className="cursor-pointer rounded-full bg-[#39CDCC] p-2 md:hidden">
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={15}
            height={10}
          />
        </div>
        <div className="hidden rounded-[8px] md:flex">
          <Input
            className="rounded-s-[8px] rounded-e-none border-r-0 border-[#213F7D] text-sm ring-0 outline-none placeholder:text-[#545F7D] md:w-[300px]"
            placeholder="Search for anything"
          />
          <div className="rounded-e-[8px] bg-[#39CDCC] px-5 py-2.5">
            <Image
              src="/icons/search.svg"
              alt="search icon"
              width={15}
              height={10}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className="mr-[24px] cursor-pointer text-sm text-[#213F7D] underline max-[321px]:mr-[10px] md:mr-[47px] md:text-[16px]">
          Docs
        </p>
        <Image
          src="/icons/bell.svg"
          alt="bell icon"
          width={15}
          height={10}
          className="cursor-pointer"
        />
        <div className="ml-3 flex items-center rounded-full">
          <Image
            src="/user.png"
            alt="user"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="ml-2.5 text-sm font-medium max-[321px]:text-[10px] md:text-[16px]">
            Adedeji
          </p>
          <Image
            src="/icons/down.svg"
            alt="dropdown icon"
            width={15}
            height={10}
          />
        </div>
      </div>

      <Sheet>
        <SheetTrigger>
          <Menu className="cursor-pointer lg:hidden" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="mb-0">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <section className="border-r bg-white pt-[20px] lg:hidden">
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
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
