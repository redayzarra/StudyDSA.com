"use client";

import GraphNodes from "@/components/GraphNodes";
import getUser from "@/hooks/client/getUser";
import getUserId from "@/hooks/client/getUserId";
import { Edge, NodeStyle } from "@/types/problems";

const SettingsPage = () => {
  const user = getUser();

  const userId = getUserId();
  console.log(userId);

  return (
    <div className="space-y-10 w-80">
      Settings
    </div>
  );
};

export default SettingsPage;
