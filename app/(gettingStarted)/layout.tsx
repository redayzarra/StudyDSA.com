import React from "react";
import { LinkTabs } from "./_components/LinkTabs";

const GettingStartedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <LinkTabs />
      </div>
      <main className="w-full mt-5">{children}</main>
    </div>
  );
};

export default GettingStartedLayout;
