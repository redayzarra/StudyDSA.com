"use server"

import db from "@/lib/db";

const getChaptersByTopic = async (topicId: number) => {
  try {
    // Find the topic by id and include its chapters
    const topicWithChapters = await db.topic.findUnique({
      where: {
        id: topicId, 
      },
      include: {
        chapters: true, // Include all chapters related to the topic
      },
    });

    // Check if the topic exists and has chapters
    if (!topicWithChapters) {
      console.log(`Topic with id '${topicId}' not found.`);
      return [];
    }

    // Return just the chapters
    return topicWithChapters.chapters;

  } catch (error) {
    console.error("Failed to fetch chapters:", error);
    throw error;
  }
}

export default getChaptersByTopic;

