"use client";

import getUser from "@/hooks/getUser";
import getUserId from "@/hooks/getUserId";

const SettingsPage = () => {
  const user = getUser();

  const userId = getUserId();
  console.log(userId);

  return <div>{JSON.stringify(user)}</div>;
};

export default SettingsPage;
