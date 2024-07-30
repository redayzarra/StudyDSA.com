"use server";
import db from "@/lib/db";
import { ChapterWithProgress } from "@/types/chapters";

const getTopicById = async (titleId: number, userId?: string) => {
  try {
    // Make sure we also fetch the chapters with the topic
    const topic = await db.topic.findUnique({
      where: {
        id: titleId,
      },
      include: {
        chapters: true,
      }
    });

    // Error handling
    if (!topic) {
      throw new Error(`Topic with id ${titleId} not found`);
    }

    let chaptersWithProgress: ChapterWithProgress[];

    // If we have a userId, then also contain the progress with chapters
    if (userId) {
      const chapterProgress = await db.chapterProgress.findMany({
        where: {
          userId: userId,
          chapterId: {
            in: topic.chapters.map(chapter => chapter.id)
          }
        }
      });

      // Combine the chapters with the user's progress
      const progressMap = new Map(chapterProgress.map(progress => [progress.chapterId, progress]));

      chaptersWithProgress = topic.chapters.map(chapter => ({
        ...chapter,
        progress: progressMap.get(chapter.id) || null
      }));
    } else {
      chaptersWithProgress = topic.chapters.map(chapter => ({
        ...chapter,
        progress: null
      }));
    }

    return {
      ...topic,
      chapters: chaptersWithProgress
    };

    // Error handling
  } catch (error) {
    console.error("Error fetching topic by id:", error);
    throw error;
  }
}

export default getTopicById;
