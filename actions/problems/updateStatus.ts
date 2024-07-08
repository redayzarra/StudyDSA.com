"use server";

import db from "@/lib/db";
import { MasteryLevel } from "@prisma/client";

interface Props {
  userId: string,
  problemId: number,
  masteryLevel: MasteryLevel
}

const updateStatus = async ({userId, problemId, masteryLevel}: Props) => {
  try {
    const progress = await db.problemProgress.upsert({
      where: {
        userId_problemId: {
          userId: userId,
          problemId: problemId,
        },
      },
      update: {
        masteryLevel: masteryLevel,
      },
      create: {
        userId: userId,
        problemId: problemId,
        masteryLevel: masteryLevel,
      },
    });

    return progress;

  } catch (error) {
    console.error("Failed to update LeetCode problem mastery level:", error);
    throw error; 
  }
}

export default updateStatus;
