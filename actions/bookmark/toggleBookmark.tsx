"use server";

import db from "@/lib/db";

const toggleBookmark = async (userId: string, chapterId: string) => {
  try {
    // Check if the specified chapter is already bookmarked by the user
    const existingBookmark = await db.bookmark.findFirst({
      where: {
        userId: userId,
        chapterId: chapterId,
      },
    });

    if (existingBookmark) {
      // If the chapter is already bookmarked, remove the bookmark
      await db.bookmark.delete({
        where: {
          id: existingBookmark.id,
        },
      });
    } else {
      // If the chapter is not bookmarked, first remove any existing bookmarks for this user
      await db.bookmark.deleteMany({
        where: {
          userId: userId,
        },
      });

      // Then, create a new bookmark for the specified chapter
      await db.bookmark.create({
        data: {
          userId: userId,
          chapterId: chapterId,
        },
      });
    }

    return true;

    // Error handling
  } catch (error) {
    console.error("Failed to toggle the bookmark:", error);
    throw error;
  }
};

export default toggleBookmark;
