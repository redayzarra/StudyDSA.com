"use server";

import db from "@/lib/db";

const getFirstChapter = async (userId: string) => {
  try {
    const firstChapter = await db.chapterProgress.findFirst({
    where: {
      userId: userId,
      isComplete: false
    },
    orderBy: {
      chapter: {
        id: 'asc'
      }
    },
    select: {
      chapter: {
        select: {
          href: true
        }
      }
    }
  });

  return firstChapter;

  // Error handling
  } catch (error) {
    console.error("Failed to fetch first chapter:", error);
    throw error;
  }

}

export default getFirstChapter;
