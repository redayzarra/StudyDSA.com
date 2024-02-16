"use server";

import db from "@/lib/db";

const getBookmark = async (userId: string) => {
  try {
    const bookmark = await db.bookmark.findUnique({
      where: { userId },
      include: {
        chapter: true, 
        algorithm: true, 
      },
    });

    // Point to either a chapter or algorithm
    if (bookmark?.chapterId) {
      return bookmark.chapter;
    } else if (bookmark?.algorithmId) {
      return bookmark.algorithm;
    } else {
      return null;
    }
    
  } catch (error) {
    console.error("Failed to get bookmark:", error);
    throw error;
  }
};

export default getBookmark;
