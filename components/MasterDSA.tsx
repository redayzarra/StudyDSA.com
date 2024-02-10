import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const MasterDSA = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className={cn("font-bold text-4xl", font.className)}>
        Master Data Structures <br /> and Algorithms
      </h1>
      <h2 className="dark:text-muted-foreground text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        eveniet libero, ipsa totam laborum numquam provident.
      </h2>
    </div>
  );
};

export default MasterDSA;
