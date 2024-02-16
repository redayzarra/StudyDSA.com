"use server";

import db from "@/lib/db";

const checkBookmark = async (userId: string, chapterId: string) => {
  try {
    // Query the Bookmark model to check if a bookmark exists for the given chapterId and userId
    const bookmark = await db.bookmark.findFirst({
      where: {
        AND: [
          { userId: userId },
          { chapterId: chapterId },
        ],
      },
    });

    // If a bookmark exists, return true to indicate the chapter is bookmarked
    if (bookmark) {
      return true;
    }

    // If no bookmark is found, return false to indicate the chapter is not bookmarked
    return false;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default checkBookmark;

