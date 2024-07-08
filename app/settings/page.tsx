"use client";

import { NotationsChart } from "@/components/NotationsChart";
import getUser from "@/hooks/client/getUser";
import getUserId from "@/hooks/client/getUserId";

const SettingsPage = () => {
  const user = getUser();

  const userId = getUserId();
  console.log(userId);

  return (
    <div className="space-y-10 w-80">
      <p>{JSON.stringify(user)}</p>
      <NotationsChart />
    </div>
  );
};

export default SettingsPage;
