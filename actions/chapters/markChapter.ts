"use server";

import db from "@/lib/db";

const markChapter = async (userId: string, chapterId: number, isComplete: boolean) => {
  try {
    const progress = await db.chapterProgress.upsert({
      where: {
        userId_chapterId: {
          userId: userId,
          chapterId: chapterId,
        },
      },
      update: {
        isComplete: isComplete,
      },
      create: {
        userId,
        chapterId,
        isComplete,
      },
    });
    return progress;

    // Error handling
  } catch (error) {
    console.error("Failed to toggle chapter completion:", error);
    throw error; 
  }
}

export default markChapter;
