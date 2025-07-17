import UserIdClient from "@/components/UserIdClient";
import { getMockData } from "@/lib/actions";
import { User } from "@/utils/types";

async function page({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const mockData = await getMockData();
  const userDetails = mockData.filter((user: User) => user.id === userId);

  return <UserIdClient userDetails={ userDetails} />  
}

export default page;
