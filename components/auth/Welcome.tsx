"use client";

import React from "react";
import UserAvatar from "./UserAvatar";
import getUser from "@/hooks/getUser";

const Welcome = () => {
  const user = getUser();
  const userName = user?.name ?? user?.username;

  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-stone-700 p-4">
      <div className="flex items-center space-x-2">
        <UserAvatar />
        <h1>{userName}</h1>
      </div>
    </div>
  );
};

export default Welcome;
