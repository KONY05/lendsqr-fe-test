import UserDashboardBox from "@/components/UserDashboardBox";
import { DataTable } from "@/components/usersTable/data-table";
import { getMockData } from "@/lib/actions";
import { User } from "@/utils/types";
import { columns } from "@/components/usersTable/columns";

async function page() {
  const mockData = await getMockData();
  const users = mockData.length;
  const activeUsers = mockData.filter((user: User) => user.isActive).length;
  const usersOnLoan = mockData.filter(
    (user: User) => user.loans.hasLoan,
  ).length;
  const usersWithSavings = mockData.filter(
    (user: User) => user.savings.hasSavings,
  ).length;

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <main className="flex-1 flex flex-col space-y-5 bg-[#00000008] px-5 py-5 md:space-y-10 md:px-[60px] md:py-[60px] overflow-hidden">
        <h1 className="text-2xl font-medium text-[#213F7D] flex-shrink-0">Users</h1>

        <div className="grid grid-cols-2 gap-3 md:gap-[26px] lg:flex flex-shrink-0">
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

        <div className="flex-1 min-h-0">
          <DataTable columns={columns} data={mockData} />
        </div>
      </main>
    </div>
  );
}

export default page;
