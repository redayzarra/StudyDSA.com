import React from "react";
import { LinkTabs } from "./_components/LinkTabs";

const GettingStartedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background to-muted-foreground/50 dark:from-accent dark:to-background">
      <div className="w-full flex justify-center">
        <LinkTabs />
      </div>
      <main className="w-full h-full mt-5 ">
        {children}
      </main>
    </div>
  );
};

export default GettingStartedLayout;
