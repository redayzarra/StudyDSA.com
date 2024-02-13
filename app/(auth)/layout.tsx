import NavBar from "@/components/NavBar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center w-full">
      <NavBar />
      {children}
    </div>
  );
};

export default AuthLayout;
