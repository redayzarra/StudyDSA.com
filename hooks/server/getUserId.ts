import { auth } from "@/auth";

const getUserId = async () => {
  const session = await auth();

  return session?.user.id;
}

export default getUserId;