import Link from "next/link";
import React from "react";
import { FaBook } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const LogoText = () => {
  return (
    <div className="gap-x-1 flex items-center">
      <FaBook size={25} />
      <h1 className={cn("text-2xl font-[600]", font.className)}>StudyDSA</h1>
    </div>
  );
};

const Logo = () => {
  return (
    <Link href={"/"}>
      <LogoText />
    </Link>
  );
};

export default Logo;
