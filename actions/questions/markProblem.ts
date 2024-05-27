"use server";

import db from "@/lib/db";

interface Props {
  userId: string, 
  problemId: string,
  isComplete: boolean,
}

const markProblem = async ({userId, problemId, isComplete}: Props) => {
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
        userId: userId,
        problemId: problemId,
        isComplete: isComplete,
      },
    });

    return progress;

  } catch (error) {
    console.error("Failed to toggle LeetCode problem completion:", error);
    throw error; 
  }
}

export default markProblem;
