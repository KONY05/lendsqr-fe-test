"use client";

import { Button } from "@/components/ui/button";
import UserDetails from "@/components/UserDetails";
import UserDetailsHeader from "@/components/UserDetailsHeader";
import { User } from "@/utils/types";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function UserIdClient({ userDetails }: { userDetails: User[] }) {
  const router = useRouter();

  useEffect(() => {
    // check if the user is logged in to access data
    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
      router.push("/login"); // redirect to login page if not logged in
    }
  }, [router]);
  return (
    <main className="flex flex-1 flex-col space-y-5 overflow-auto bg-[#00000008] px-5 py-5 md:space-y-10 md:px-[60px] md:py-[60px]">
      <Link href="/users">
        <p className="flex cursor-pointer items-center gap-3 text-[#545F7D] underline-offset-2 hover:underline">
          <MoveLeft /> Back to Users
        </p>
      </Link>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium text-[#213F7D]">User Details</h1>

        <div className="flex flex-col justify-end gap-2 min-[425px]:flex-row">
          <Button className="cursor-pointer rounded-[8px] border border-[#E4033B] bg-transparent px-2 py-1.5 text-xs font-semibold text-[#E4033B] uppercase transition-all hover:bg-[#E4033B] hover:text-white md:px-4 md:py-3">
            Blacklist User
          </Button>
          <Button className="cursor-pointer rounded-[8px] border border-[#39CDCC] bg-transparent px-2 py-1.5 text-xs font-semibold text-[#39CDCC] uppercase transition-all hover:bg-[#39CDCC] hover:text-white md:px-4 md:py-3">
            Activate User
          </Button>
        </div>
      </div>

      <div className="space-y-[30px]">
        <UserDetailsHeader data={userDetails} />
        <UserDetails data={userDetails} />
      </div>
    </main>
  );
}

export default UserIdClient;
