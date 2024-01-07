"use client";

import { signOut } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const LogoutButton = ({ children }: Props) => {
  const onClick = () => {
    signOut();
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default LogoutButton;
