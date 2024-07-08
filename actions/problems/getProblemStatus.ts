"use server";

import db from "@/lib/db";

const getProblemStatus = async (userId: string, problemId: number) => {
  try {
    const progress = await db.problemProgress.findUnique({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
    });
  
    return progress?.masteryLevel;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch algorithm status:", error);
    throw error;
  }
};

export default getProblemStatus;