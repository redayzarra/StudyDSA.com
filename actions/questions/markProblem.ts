"use server";

import db from "@/lib/db";

const markProblem = async (userId: string, problemId: number, isComplete: boolean) => {
  try {
    const progress = await db.problemProgress.upsert({
      where: {
        userId_problemId: {
          userId: userId,
          problemId: problemId,
        },
      },
      update: {
        isComplete: isComplete,
      },
      create: {
        userId,
        problemId,
        isComplete,
      },
    });

    return progress;

  } catch (error) {
    console.error("Failed to toggle LeetCode problem completion:", error);
    throw error; 
  }
}

export default markProblem;
