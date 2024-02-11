import getFirstChapter from "@/actions/chapters/getFirstChapter";
import React from "react";

const QuickBookmark = async ({ userId }: { userId: string }) => {
  const firstChapter = await getFirstChapter(userId);

  return firstChapter ? (
    <h2 className="text-muted-foreground">
      Your bookmark is on:{" "}
      <a href={firstChapter.href} className="text-primary font-bold underline">
        {firstChapter.title}
      </a>
    </h2>
  ) : (
    <h2 className="text-muted-foreground">You have completed all chapters!</h2>
  );
};

export default QuickBookmark;
