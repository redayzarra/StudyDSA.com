import React, { PropsWithChildren } from "react";
import { Separator } from "./ui/separator";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Bookmark from "./Bookmark";
import MarkCheckbox from "./MarkCheckbox";
import { ChapterWithProgress } from "@/types/chapters";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  id: string;
  title: string;
  userId: string | undefined;
  chapter?: ChapterWithProgress;
  showBookmark?: boolean;
}

const ChapterHeading = ({
  id,
  title,
  userId,
  children,
  chapter,
  showBookmark = false,
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
          {chapter && showBookmark && <Bookmark chapter={chapter} />}
          {chapter && (
            <MarkCheckbox
              className="h-5 w-5 border-2"
              userId={userId}
              chapter={chapter}
            />
          )}
        </div>
      </div>
      <Separator className="my-2" />
      {children}
    </div>
  );
};

export default ChapterHeading;
