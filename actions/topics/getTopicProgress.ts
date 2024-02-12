import db from "@/lib/db";

const getTopicProgress = async (userId: string) => {
  try {
    const totalTopics = await db.topic.count();

    // Count the number of completed topics for the user
    const completedTopics = await db.topicProgress.count({
      where: {
        userId: userId,
        isComplete: true,
      },
    });

    return [completedTopics, totalTopics];

    // Error handling
  } catch (error) {
    console.error("Error fetching topic progress:", error);
    throw error;
  }
};

export default getTopicProgress;
