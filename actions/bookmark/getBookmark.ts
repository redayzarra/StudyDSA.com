"use server";

import db from "@/lib/db";

const getBookmark = async (userId: string) => {
  try {
    const bookmark = await db.bookmark.findFirst({
      where: { userId },
      include: {
        chapter: true,
        algorithm: true,
      },
    });

    if (bookmark) {
      return bookmark.chapterId ? bookmark.chapter : bookmark.algorithm;
    }

    return null;

    // Error handling
  } catch (error) {
    console.error("Failed to get bookmark:", error);
    throw error;
  }
};

export default getBookmark;
