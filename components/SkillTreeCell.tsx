import React from "react";

const SkillTreeCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-sm transition-all p-2 bg-transparent hover:bg-muted-foreground/10 dark:hover:bg-black/25 hover:cursor-pointer space-y-2">
      <h1 className="font-semibold">{children}</h1>
      <h2 className="line-clamp-2 text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
    </div>
  );
};

export default SkillTreeCell;
