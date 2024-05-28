"use server";

import db from "@/lib/db";

const getNotes = async (userId: string, problemId: string) => {
  try {
    const progress = await db.problemProgress.findUnique({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
    });
  
    return progress?.notes;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch algorithm notes:", error);
    throw error;
  }
};

export default getNotes;