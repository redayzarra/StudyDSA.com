import { useSession } from "next-auth/react";

export const getUser = () => {
  const session = useSession();

  return session.data?.user;
};

export const getUserId = () => {
  const session = useSession();

  return session.data?.user.id;
}