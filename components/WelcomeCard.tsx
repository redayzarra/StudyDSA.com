import React from "react";

const WelcomeCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mt-[71px] min-h-[200px] backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] p-6">
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      {children}
    </div>
  );
};

export default WelcomeCard;
