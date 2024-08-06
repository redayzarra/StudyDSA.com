import React, { PropsWithChildren } from "react";
import { Separator } from "./ui/separator";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Bookmark from "./Bookmark";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  id: string;
  title: string;
  href?: string;
  hideBookmark?: boolean;
}

const ChapterHeading = ({
  id,
  title,
  children,
  href = "/",
  hideBookmark,
}: PropsWithChildren<Props>) => {
  // Build the href we want to bookmark
  const addedHref = id === "definition" ? href : `${href}#${id}`;

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
          {!hideBookmark && <Bookmark href={addedHref} title={title} />}
        </div>
      </div>
      <Separator className="my-2" />
      {children}
    </div>
  );
};

export default ChapterHeading;
