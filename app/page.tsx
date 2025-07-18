import { redirect } from "next/navigation";

function Home() {
  return redirect("/users");
}

export default Home;
