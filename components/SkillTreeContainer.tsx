import React, { PropsWithChildren } from "react";

interface Props {
  id: string;
}

const SkillTreeContainer = ({ children, id }: PropsWithChildren<Props>) => {
  return (
    <div
      id={id}
      className="w-full border-t-[1px] backdrop-blur-[1px] pb-10 shadow-lg rounded-md bg-slate-200/50 dark:bg-neutral-900/20 border-white dark:border-stone-800 px-8 py-4"
    >
      <div className="absolute inset-x-0 h-[2px] mx-auto -top-px bg-gradient-to-r from-transparent via-white dark:via-stone-400 to-transparent" />
      {children}
    </div>
  );
};

export default SkillTreeContainer;
