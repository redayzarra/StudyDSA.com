import React, { PropsWithChildren } from "react";
import { Separator } from "./ui/separator";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Chapter } from "@prisma/client";
import Bookmark from "./Bookmark";
import MarkCheckbox from "./MarkCheckbox";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  id: string;
  title: string;
  chapterId?: number;
  chapter?: Chapter;
}

const ChapterHeading = ({
  id,
  title,
  children,
  chapterId,
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
        <div className="flex items-center space-x-4">
          {chapter && <Bookmark chapter={chapter} />}
          {chapterId && (
            <MarkCheckbox className="h-5 w-5 border-2" chapterId={chapterId} />
          )}
        </div>
      </div>
      <Separator className="my-2" />
      {children}
    </div>
  );
};

export default ChapterHeading;
