import Link from "next/link";
import React from "react";
import { FaBook } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["900"],
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="gap-x-1 flex items-center">
        <FaBook size={25} />
        <h1 className={cn("text-2xl font-black", font.className)}>StudyDSA</h1>
      </div>
    </Link>
  );
};

export default Logo;
