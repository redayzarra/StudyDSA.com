"use server";

import db from "@/lib/db";

const getTopics = async () => {
  try {
    const topics = await db.topic.findMany();

    return topics;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch topics:", error);
    throw error;
  }
}

export default getTopics;