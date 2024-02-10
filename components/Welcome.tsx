"use client";

import React from "react";
import UserAvatar from "./auth/UserAvatar";
import getUser from "@/hooks/getUser";
import { Separator } from "./ui/separator";
import getFirstChapter from "@/actions/chapters/getFirstChapter";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "./auth/LoginButton";
import Link from "next/link";
import { MdMoneyOff } from "react-icons/md";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Welcome = () => {
  const user = getUser();
  if (!user) {
    return (
      <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-stone-700 p-6 relative">
        <div className="blur-lg cursor-default">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl text-gray-500 dark:text-gray-300 font-bold">
              Good morning, Steve!
            </h1>
          </div>
          <Separator className="my-4 self-stretch" />
          <h2 className="text-muted-foreground">
            Your bookmark is on: <span className="text-primary">Basics</span>
          </h2>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1
            className={cn("text-lg font-semibold text-center", font.className)}
          >
            Log in to access all features!
          </h1>
          <h2 className="text-muted-foreground pb-5 flex space-x-1 items-center">
            It's easy and free <MdMoneyOff />
          </h2>
          <div className="flex space-x-4">
            <LoginButton>
              <Button size="sm" className="font-semibold shadow-lg">
                Log In
              </Button>
            </LoginButton>
            <Link href="/register">
              <Button
                size="sm"
                variant="link"
                className="text-primary-foreground dark:text-primary"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
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

  const firstChapter = getFirstChapter(user.id!);

  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-stone-700 p-6">
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
