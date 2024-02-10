import { useSession } from "next-auth/react";

const getUserId = () => {
  const session = useSession();

  return session.data?.user.id;
}

export default getUserId;