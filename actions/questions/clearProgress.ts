"use server";

import db from "@/lib/db";

// Define the function to clear user progress
const clearProgress = async (userId: string, problems: number[]) => {
  try {
    await db.problemProgress.updateMany({
      where: {
        userId: userId,
        problemId: {
          in: problems,
        },
      },
      data: {
        isComplete: false,         // Reset completion status
        masteryLevel: "Practicing", // Reset mastery level to the default
        notes: null,               // Clear any notes
      },
    });

    return { success: true, message: "User progress cleared successfully" };

  } catch (error) {
    console.error("Failed to clear user progress:", error);
    throw error;
  }
};

export default clearProgress;
