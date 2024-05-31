"use server";

import db from "@/lib/db";

const getTopicById = async (titleId: number) => {
  try {
    const topic = await db.topic.findUnique({
      where: {
        id: titleId,
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

export default getTopicById;
