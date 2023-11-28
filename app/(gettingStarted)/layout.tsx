import NavBar from "@/components/NavBar";
import React from "react";
import { LinkTabs } from "./_components/LinkTabs";

const GettingStartedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <LinkTabs />
      <main>{children}</main>
    </div>
  );
};

export default GettingStartedLayout;
