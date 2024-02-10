"use client";

import React from "react";
import UserAvatar from "./auth/UserAvatar";
import getUser from "@/hooks/getUser";
import { Separator } from "./ui/separator";

const Welcome = () => {
  const user = getUser();
  const userName = (user?.name ?? user?.username)?.trim();
  console.log(`${userName}!`);

  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-stone-700 p-4">
      <div className="flex items-center space-x-4">
        <UserAvatar />
        <h1 className="text-2xl font-bold line-clamp-2">
          {greeting}, {userName}!
        </h1>
      </div>
      <Separator className="my-4 self-stretch" />
      <h2 className="text-muted-foreground">
        Your bookmark is on:{" "}
        <a href="#segmentTrees" className="text-primary font-bold underline">
          Basics
        </a>
      </h2>
    </div>
  );
};

export default Welcome;
