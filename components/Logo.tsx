import Link from "next/link";
import React from "react";
import { FaBook } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface Props {
  size?: "default" | "lg";
}

export const LogoText = ({ size = "default" }: Props) => {
  return (
    <div className="gap-x-1 flex items-center">
      <FaBook size={size === "lg" ? 30 : 18} />
      <h1
        className={cn(
          "font-[700]",
          font.className,
          size === "lg" ? "text-4xl" : "text-xl"
        )}
      >
        StudyDSA
      </h1>
    </div>
  );
};

const Logo = ({ size }: Props) => {
  return (
    <Link href={"/"}>
      <LogoText size={size} />
    </Link>
  );
};

export default Logo;
