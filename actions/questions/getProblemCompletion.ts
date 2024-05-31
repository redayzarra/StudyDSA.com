"use server";

import db from "@/lib/db";

const getProblemCompletion = async (userId: string, problemId: number) => {
  try {
    const progress = await db.problemProgress.findUnique({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
    });

    return progress ? progress.isComplete : false;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch problem completion status:", error);
    throw error;
  }
};

export default getProblemCompletion;
