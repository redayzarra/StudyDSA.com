import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Header = ({ title, label }: { title: string; label: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>{title}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
