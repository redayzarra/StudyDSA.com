"use client";

import { getUser } from "@/hooks/getUser";

const SettingsPage = () => {
  const user = getUser();

  return <div>{JSON.stringify(user)}</div>;
};

export default SettingsPage;
