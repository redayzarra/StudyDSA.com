"use server";

import db from "@/lib/db";

const getChapterStatus = async (userId: string, chapterId: number) => {
  try {
    const progress = await db.chapterProgress.findUnique({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        },
      },
    });

    return progress ? progress.isComplete : false;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch chapter completion status:", error);
    throw error;
  }
};

export default getChapterStatus;
