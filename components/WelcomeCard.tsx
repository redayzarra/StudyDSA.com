import React from "react";

const WelcomeCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:border-neutral-900/50 border-neutral-800 w-full mt-[71px] min-h-[200px] backdrop-blur-[15px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-[1px] p-6">
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      {children}
    </div>
  );
};

export default WelcomeCard;
