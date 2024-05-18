import React, { PropsWithChildren } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  id: string;
  title: string;
}

const MainChapter = ({
  id,
  title,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className="">
      <div
        id={id}
        className={cn(
          "text-[1.3rem] font-semibold flex items-center justify-between",
          font.className
        )}
      >
        {title}
      </div>
      <Separator className="my-2" />
      {children}
    </div>
  );
};

export default MainChapter;
