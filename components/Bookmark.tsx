"use client";

import useBookmarkStore from "@/app/store/user";
import getUserId from "@/hooks/client/getUserId";
import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { toast } from "sonner";

interface Props {
  href: string;
  title: string;
}

const Bookmark = ({ href = "/", title }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"; // Fallback to localhost
  const fullHref = `${baseUrl}${href}`;
  const userId = getUserId();
  const { isBookmarked, toggleBookmark, fetchBookmarkStatus } = useBookmarkStore();

  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (userId) {
      fetchBookmarkStatus(userId).then((status) => setBookmarked(status));
    }
  }, [userId, fetchBookmarkStatus]);

  const onClick = async () => {
    if (!userId) {
      toast("You need to be logged in to bookmark this page");
      return;
    }

    try {
      await toggleBookmark(userId, fullHref, title);
      setBookmarked(!bookmarked);
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
      toast("An error occurred while bookmarking.");
    }
  };

  return (
    <button onClick={onClick}>
      {bookmarked ? (
        <FaBookmark className="text-primary" />
      ) : (
        <FaRegBookmark className="text-primary" />
      )}
    </button>
  );
};

export default Bookmark;

