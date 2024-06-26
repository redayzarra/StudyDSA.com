import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="h-[100px] hidden md:flex flex-col space-y-4 bg-transparent border-t border-1 items-center justify-center">
      <SocialLinks size={26} className="mt-2" />
      <p className="text-neutral-500 text-[12px] font-normal">
        Copyright © StudyDSA. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
