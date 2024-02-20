"use client";

import useBookmarkStore from "@/app/store/user";
import getUserId from "@/hooks/client/getUserId";
import { Chapter } from "@prisma/client";
import { useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { toast } from "sonner";

interface Props {
  chapter: Chapter;
}

const Bookmark = ({ chapter }: Props) => {
  const userId = getUserId();
  const { isBookmarked, toggleBookmark, fetchBookmarkStatus } =
    useBookmarkStore();

  useEffect(() => {
    if (userId && chapter.id) {
      fetchBookmarkStatus(userId, chapter.id);
    }
  }, [userId, chapter.id, fetchBookmarkStatus]);

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
        <FaRegBookmark className="text-primary" />
      )}
    </button>
  );
};

export default Bookmark;
