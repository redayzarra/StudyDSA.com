import React, { PropsWithChildren } from "react";
import { Separator } from "./ui/separator";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  id: string;
  title: string;
}

const ChapterHeading = ({ id, title, children }: PropsWithChildren<Props>) => {
  return (
    <div className="">
      <h2 id={id} className={cn("text-[1.3rem] font-semibold", font.className)}>
        {title}
      </h2>
      <Separator className="my-2" />
      {children}
    </div>
  );
};

export default ChapterHeading;
