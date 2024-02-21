"use server";

import db from "@/lib/db";

const toggleBookmark = async (userId: string, chapterId: string) => {
  try {
    const existingBookmark = await db.bookmark.findFirst({
      where: {
        userId: userId,
      },
    });

    if (existingBookmark) {
      // If a bookmark exists but for a different chapter, update it, otherwise delete it
      if (existingBookmark.chapterId !== chapterId) {
        await db.bookmark.update({
          where: { id: existingBookmark.id },
          data: { chapterId: chapterId },
        });
        return { action: 'updated', chapterId };
      } else {
        await db.bookmark.delete({
          where: { id: existingBookmark.id },
        });
        return { action: 'deleted' };
      }
    } else {
      // Create a new bookmark if none exists
      await db.bookmark.create({
        data: {
          userId: userId,
          chapterId: chapterId,
        },
      });
      return { action: 'created', chapterId };
    }

    // Error handling
  } catch (error) {
    console.error("Failed to toggle the bookmark:", error);
    throw error;
  }
};

export default toggleBookmark;
