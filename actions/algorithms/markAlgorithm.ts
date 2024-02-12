"use server";

import db from "@/lib/db";

const markAlgorithm = async (userId: string, algorithmId: string, isComplete: boolean) => {
  try {
    const progress = await db.algorithmProgress.upsert({
      where: {
        userId_algorithmId: {
          userId: userId,
          algorithmId: algorithmId,
        },
      },
      update: {
        isComplete: isComplete,
      },
      create: {
        userId: userId,
        algorithmId: algorithmId,
        isComplete: isComplete,
      },
    });

    return progress;

    // Error handling
  } catch (error) {
    console.error("Failed to toggle algorithm completion:", error);
    throw error; 
  }
}

export default markAlgorithm;