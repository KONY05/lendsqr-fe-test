import { Menu } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="flex items-center justify-between py-3 pr-4 pl-3.5 shadow-lg md:pr-9 md:pl-[30px] lg:py-[35px]">
      <div>
        <Image
          src="/logo.png"
          alt="Lendsqr Logo"
          width={80}
          height={50}
          className=""
        />
        {/* <Image src="/favicon.svg" alt="Lendsqr Logo" width={20} height={10} className="md:hidden" /> */}
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
        <p className="mr-[24px] cursor-pointer text-sm text-[#213F7D] underline md:mr-[47px] md:text-[16px]">
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
          <p className="ml-2.5 text-sm font-medium md:text-[16px]">Adedeji</p>
          <Image
            src="/icons/down.svg"
            alt="dropdown icon"
            width={15}
            height={10}
          />
        </div>
          </div>
          {/* TODO: implement mobile nav */}
      <Menu className="lg:hidden" />
    </header>
  );
}

export default Header;
