"use server";

import db from "@/lib/db";

const getAlgorithmStatus = async (userId: string, algorithmId: string) => {
  try {
    const progress = await db.algorithmProgress.findUnique({
      where: {
        userId_algorithmId: {
          userId,
          algorithmId,
        },
      },
    });
  
    return progress ? progress.isComplete : false;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch algorithm status:", error);
    throw error;
  }
};

export default getAlgorithmStatus;