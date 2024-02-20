"use client";

import { Chapter } from "@prisma/client";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import getUserId from "@/hooks/client/getUserId";
import { toast } from "sonner";
import useBookmarkStore from "@/app/store/user";

interface Props {
  chapter: Chapter;
}

const Bookmark = ({ chapter }: Props) => {
  const userId = getUserId();
  const { isBookmarked, toggleBookmark } = useBookmarkStore();

  const onClick = async () => {
    if (!userId) {
      toast("You need to be logged in to bookmark a chapter");
      return;
    }

    try {
      await toggleBookmark(userId, chapter.id);
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
      toast("An error occurred while bookmarking the chapter.");
    }
  };

  return (
    <button onClick={onClick}>
      {isBookmarked(chapter.id) ? (
        <FaBookmark className="text-primary" />
      ) : (
        <FaRegBookmark />
      )}
    </button>
  );
};

export default Bookmark;
