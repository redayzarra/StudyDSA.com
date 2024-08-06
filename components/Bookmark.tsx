"use client";

import useBookmarkStore from "@/app/store/useBookmarkStore";
import getUserId from "@/hooks/client/getUserId";
import { useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { toast } from "sonner";

interface Props {
  href: string;
  title: string;
}

const Bookmark = ({ href = "/", title }: Props) => {
  const userId = getUserId();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const fullHref = `${baseUrl}${href}`;
  
  const { isBookmarked, toggleBookmark, fetchBookmarkStatus } = useBookmarkStore();

  useEffect(() => {
    if (userId) {
      fetchBookmarkStatus(userId, fullHref);
    }
  }, [userId, fullHref, fetchBookmarkStatus]);

  const onClick = async () => {
    if (!userId) {
      toast("You need to be logged in to bookmark this page");
      return;
    }
    try {
      await toggleBookmark(userId, fullHref, title);
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
      toast("An error occurred while bookmarking.");
    }
  };

  return (
    <button onClick={onClick}>
      {isBookmarked(fullHref) ? (
        <FaBookmark className="text-primary" />
      ) : (
        <FaRegBookmark className="text-primary" />
      )}
    </button>
  );
};

export default Bookmark;
