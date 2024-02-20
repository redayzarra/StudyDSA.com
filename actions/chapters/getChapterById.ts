"use server"

import db from "@/lib/db";

const getChapterById = async (chapterId: string | null) => {
  try {

    if (!chapterId) {
      return null;
    }

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });

    return chapter;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch chapter with the given ID:", error);
    throw error;
  }
}

export default getChapterById;

