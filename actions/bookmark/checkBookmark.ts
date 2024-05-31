"use server";

import db from "@/lib/db";

const checkBookmark = async (userId: string, chapterId: number) => {
  try {
    // Simplified query without the explicit AND
    const bookmark = await db.bookmark.findFirst({
      where: {
        userId,
        chapterId,
      },
    });

    // Return true if a bookmark exists, otherwise false
    return !!bookmark;

    // Error handling
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default checkBookmark;
