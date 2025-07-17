"use client";

import { User } from "@/utils/types";
import UserDashboardBox from "./UserDashboardBox";
import { DataTable } from "./usersTable/data-table";
import { columns } from "@/components/usersTable/columns";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function UsersClient({
  users,
  activeUsers,
  usersOnLoan,
  usersWithSavings,
  mockData,
}: {
  users: number;
  activeUsers: number;
  usersOnLoan: number;
  usersWithSavings: number;
  mockData: User[];
}) {
  const router = useRouter();

  useEffect(() => {
    // check if the user is logged in to access data
    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
      router.push("/login"); // redirect to login page if not logged in
    }
  }, [router]);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <main className="flex flex-1 flex-col space-y-5 overflow-hidden bg-[#00000008] px-5 py-5 md:space-y-10 md:px-[60px] md:py-[60px]">
        <h1 className="flex-shrink-0 text-2xl font-medium text-[#213F7D]">
          Users
        </h1>

        <div className="grid flex-shrink-0 grid-cols-2 gap-3 md:gap-[26px] lg:flex">
          <UserDashboardBox
            icon="/icons/users.svg"
            title="Users"
            data={users}
          />
          <UserDashboardBox
            icon="/icons/activeUsers.svg"
            title="Active Users"
            data={activeUsers}
          />
          <UserDashboardBox
            icon="/icons/loan.svg"
            title="Users with Loan"
            data={usersOnLoan}
          />
          <UserDashboardBox
            icon="/icons/savings.svg"
            title="Users with savings"
            data={usersWithSavings}
          />
        </div>

        <div className="min-h-0 flex-1">
          <DataTable columns={columns} data={mockData} />
        </div>
      </main>
    </div>
  );
}

export default UsersClient;
