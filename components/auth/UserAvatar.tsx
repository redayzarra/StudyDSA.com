import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "next-auth";

interface Props {
  user: User
  userName: string
}

const UserAvatar = ({user, userName}: Props) => {
  const getInitials = (name: string) => {
    if (!name) return "";

    const parts = name.split(" ");
    if (parts.length === 1) {
      return name.charAt(0);
    } else {
      return parts[0].charAt(0) + parts[1].charAt(0);
    }
  };

  const userInitials = getInitials(userName!);

  return (
    <Avatar className="h-10 w-10">
      <AvatarImage
        src={user?.image ?? ""}
        alt={`${userName}'s profile image`}
      />
      <AvatarFallback>{userInitials}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
