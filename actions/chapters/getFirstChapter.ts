import db from "@/lib/db";

const getFirstChapter = async (userId: string) => {
  try {
    const firstChapterProgress = await db.chapterProgress.findFirst({
    where: {
      userId: userId,
      isComplete: false
    },
    orderBy: {
      chapter: {
        id: 'asc'
      }
    },
    include: {
      chapter: true
    }
  });

  if (firstChapterProgress) {
      return firstChapterProgress.chapter;
    } else {
      return null; // Return null if no incomplete chapter is found
  }

  // Error handling
  } catch (error) {
    console.error("Failed to fetch first chapter:", error);
    throw error;
  }

}

export default getFirstChapter;
