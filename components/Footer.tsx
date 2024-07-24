import React from "react";
import SocialLinks from "./SocialLinks";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-[100px] flex flex-col space-y-4 bg-transparent border border-t-[1px] items-center justify-center",
        className
      )}
    >
      <SocialLinks size={26} className="mt-2" />
      <p className="text-neutral-500 text-[12px] font-normal">
        Copyright © StudyDSA. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
