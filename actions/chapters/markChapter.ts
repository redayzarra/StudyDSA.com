"use server";

import db from "@/lib/db";

const markChapter = async (userId: string, chapterId: number, isComplete: boolean) => {
  try {
    // Step 1: Update Chapter Completion Status
    const progress = await db.chapterProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        },
      },
      update: {
        isComplete,
      },
      create: {
        userId,
        chapterId,
        isComplete,
      },
    });

    // Step 2: Identify the Topic of the Chapter
    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
      },
      select: {
        topicId: true,  
      },
    });

    // Step 3: Check Completion Status of All Chapters within the Topic
    if (chapter && chapter.topicId) {
      const [completedChaptersCount, totalChaptersCount] = await Promise.all([
        db.chapterProgress.count({
          where: {
            userId,
            chapter: {
              topicId: chapter.topicId,
            },
            isComplete: true,
          },
        }),
        db.chapter.count({
          where: {
            topicId: chapter.topicId,
          },
        }),
      ]);

      // Step 4: Update Topic Completion Status
      const isTopicComplete = completedChaptersCount === totalChaptersCount;
      await db.topicProgress.upsert({
        where: {
          userId_topicId: {
            userId,
            topicId: chapter.topicId,
          },
        },
        update: {
          isComplete: isTopicComplete,
        },
        create: {
          userId,
          topicId: chapter.topicId,
          isComplete: isTopicComplete,
        },
      });
    }

    return progress;

    // Error handling
  } catch (error) {
    console.error("Failed to toggle chapter completion:", error);
    throw error;
  }
}

export default markChapter;
