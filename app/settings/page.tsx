"use client";

import { ProblemFilter } from "@/components/ProblemFilter";
import getUser from "@/hooks/client/getUser";
import getUserId from "@/hooks/client/getUserId";

const SettingsPage = () => {
  const user = getUser();

  const userId = getUserId();
  console.log(userId);

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
      <ProblemFilter />
    </div>
  );
};

export default SettingsPage;
