"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import getBookmark from "@/actions/bookmark/getBookmark";

// Define a custom type for the bookmark data returned by getBookmark
type BookmarkData = {
  id: string;
  href: string | null;
  title: string | null;
} | null;

const QuickBookmark = ({ userId }: { userId: string }) => {
  const [bookmark, setBookmark] = useState<BookmarkData>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookmark = async () => {
      setIsLoading(true);
      try {
        const data = await getBookmark(userId);
        setBookmark(data);
      } catch (error) {
        console.error("Failed to fetch bookmark:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookmark();
  }, [userId]);

  const iconSize = 18;

  if (isLoading) {
    return <div>Loading bookmark...</div>;
  }

  return (
    <div className="ml-0.5 flex items-center space-x-2">
      {bookmark ? (
        <>
          <FaBookmark size={iconSize} className="mr-[2px]" aria-hidden="true" />
          <p className="font-medium">
            Your bookmark is on:{" "}
            <Link href={bookmark.href ?? "/"}>
              <span className="text-yellow-500 dark:text-primary font-bold underline">
                {bookmark.title ?? "Untitled"}
              </span>
            </Link>
          </p>
        </>
      ) : (
        <>
          <FaRegBookmark size={iconSize} aria-hidden="true" />
          <p className="hidden md:block text-muted-foreground font-medium">
            You haven&apos;t bookmarked anything
          </p>
          <p className="block md:hidden text-muted-foreground font-medium">
            You have no bookmarks
          </p>
        </>
      )}
    </div>
  );
};

export default QuickBookmark;
