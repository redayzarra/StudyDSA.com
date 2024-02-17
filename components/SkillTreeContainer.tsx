import React, { PropsWithChildren } from "react";

interface Props {
  id: string;
}

const SkillTreeContainer = ({ children, id }: PropsWithChildren<Props>) => {
  return (
    <div
      id={id}
      className="w-full backdrop-blur-[2px] pb-10 shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-stone-700 px-8 py-4"
    >
      {children}
    </div>
  );
};

export default SkillTreeContainer;
