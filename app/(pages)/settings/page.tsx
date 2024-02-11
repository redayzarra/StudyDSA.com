"use client";

import getUser from "@/hooks/client/getUser";
import getUserId from "@/hooks/client/getUserId";

const SettingsPage = () => {
  const user = getUser();

  const userId = getUserId();
  console.log(userId);

  return <div>{JSON.stringify(user)}</div>;
};

export default SettingsPage;
