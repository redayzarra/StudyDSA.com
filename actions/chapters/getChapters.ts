"use server"

import db from "@/lib/db";

const getChaptersByTopic = async (topicName: string) => {
  try {
    // Find the topic by title and include its chapters
    const topicWithChapters = await db.topic.findUnique({
      where: {
        title: topicName, 
      },
      include: {
        chapters: true, // Include all chapters related to the topic
      },
    });

    // Check if the topic exists and has chapters
    if (!topicWithChapters) {
      console.log(`Topic with title '${topicName}' not found.`);
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

