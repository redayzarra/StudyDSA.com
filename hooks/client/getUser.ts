import { useSession } from "next-auth/react";

const getUser = () => {
  const session = useSession();

  return session.data?.user;
};

export default getUser;