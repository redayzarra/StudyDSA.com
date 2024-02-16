import React, { PropsWithChildren } from "react";
import { Separator } from "./ui/separator";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Chapter } from "@prisma/client";
import Bookmark from "./Bookmark";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  id: string;
  title: string;
  chapter?: Chapter;
}

const ChapterHeading = ({
  id,
  title,
  children,
  chapter,
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
        {chapter && <Bookmark chapter={chapter} />}
      </div>
      <Separator className="my-2" />
      {children}
    </div>
  );
};

export default ChapterHeading;
