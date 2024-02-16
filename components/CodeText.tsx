import React from "react";

export const CodeText = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="bg-stone-900/10 dark:bg-muted-foreground/25 rounded-[3px] p-0.5">
      {children}
    </code>
  );
};