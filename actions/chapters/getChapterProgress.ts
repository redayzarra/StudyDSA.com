import db from "@/lib/db";

const getDataProgress = async (userId: string) => {
  try {
    const totalChapters = await db.chapter.count();

    const completedChapters = await db.chapterProgress.count({
      where: {
        userId: userId,
        isComplete: true,
      },
    });

    return [completedChapters, totalChapters];

    // Error handling
  } catch (error) {
    console.error("Error fetching chapter progress:", error);
    throw error;
  }
};

export default getDataProgress;
