"use server";

import db from "@/lib/db";

const getTopicByName = async (title: string) => {
  try {
    const topic = await db.topic.findUnique({
      where: {
        title: title,
      },
      include: {
        chapters: true,
      }
    });

    return topic;
    
    // Error handling
  } catch (error) {
    console.error("Error fetching topic by name:", error);
    throw error;
  }
}

export default getTopicByName;
