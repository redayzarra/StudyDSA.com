import React from "react";

const SkillTreeHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="w-full mb-5 mt-2 text-2xl font-bold flex items-center justify-center">
      {children}
    </h1>  
  );
};

export default SkillTreeHeading;
