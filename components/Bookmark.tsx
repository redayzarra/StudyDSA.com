"use client";

import { useEffect, useState } from "react";
import { Chapter } from "@prisma/client";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import checkBookmark from "@/actions/bookmark/checkBookmark";
import toggleBookmark from "@/actions/bookmark/toggleBookmark";
import getUserId from "@/hooks/client/getUserId"; // Assuming this hook exists and works similar to your example
import { toast } from "sonner";

interface Props {
  chapter: Chapter;
}

const Bookmark = ({ chapter }: Props) => {
  const userId = getUserId();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // If the user isn't logged in, don't load
    if (!userId) {
      return;
    }
    
    const checkBookmarkStatus = async () => {
      try {
        const status = await checkBookmark(userId, chapter.id);
        setIsBookmarked(status);
      } catch (error) {
        console.error("Failed to fetch bookmark status:", error);
        // Optionally show a toast message here
      }
    };

    checkBookmarkStatus();
  }, [chapter.id, userId]);

  const onClick = async () => {
    if (!userId) {
      toast("You need to be logged in to bookmark a chapter");
      return;
    }

    const previousBookmarkState = isBookmarked;
    setIsBookmarked(!isBookmarked); // Optimistic UI update

    try {
      await toggleBookmark(userId, chapter.id);
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
      setIsBookmarked(previousBookmarkState); // Revert on error
      toast("An error occurred while bookmarking the chapter.");
    }
  };

  return (
    <button onClick={onClick}>
      {isBookmarked ? (
        <FaBookmark className="text-primary" />
      ) : (
        <FaRegBookmark className="" />
      )}
    </button>
  );
};

export default Bookmark;

