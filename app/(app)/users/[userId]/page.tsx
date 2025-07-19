import UserIdClient from "@/components/UserIdClient";
import { getSingleUser } from "@/lib/actions";
import { User } from "@/utils/types";

async function page({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const userDetails:User[] = await getSingleUser(userId);

  return <UserIdClient userDetails={ userDetails} />  
}

export default page;
