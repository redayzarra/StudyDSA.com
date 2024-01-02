import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo, { LogoText } from "../Logo";
import { FaBook } from "react-icons/fa6";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600"],
});

const Header = ({ title, label }: { title: string; label: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>{title}</h1> */}
      <Logo />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
