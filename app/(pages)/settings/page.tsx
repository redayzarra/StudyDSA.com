"use client";

import { getUser, getUserId } from "@/hooks/getUser";

const SettingsPage = () => {
  const user = getUser();

  const userId = getUserId();
  console.log(userId)

  return <div>{JSON.stringify(user)}</div>;
};

export default SettingsPage;
