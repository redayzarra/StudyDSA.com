"use client";

import getUser from "@/hooks/client/getUser";
import { FiLogIn } from "react-icons/fi";
import NeoButton from "../NeoButton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserAvatar from "./UserAvatar";
import { BetterButton } from "../ui/BetterButton";

const UserButton = () => {
  const user = getUser();
  const userName = (user?.name ?? user?.username)?.trim();
  const firstName = userName?.split(" ")[0];

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <UserAvatar user={user} userName={firstName!} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            Profile{" "}
            <Badge variant="secondary" className="ml-14">
              Coming Soon
            </Badge>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            Log out
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <LoginButton>
      <BetterButton
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Login</span>
      </BetterButton>
    </LoginButton>
  );
};

export default UserButton;
