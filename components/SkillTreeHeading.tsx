import React from "react";

const SkillTreeHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="w-full flex items-center justify-center text-xl text-muted-foreground">
      {children}
    </h1>
  );
};

export default SkillTreeHeading;
