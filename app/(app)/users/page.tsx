
import { getMockData } from "@/lib/actions";
import { User } from "@/utils/types";

import UsersClient from "@/components/UsersClient";

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
    <UsersClient users={users} activeUsers={activeUsers} usersOnLoan={usersOnLoan} usersWithSavings={ usersWithSavings} mockData={mockData}/>
  );
}

export default page;
