"use server";

import db from "@/lib/db";

interface Props {
  userId: string;
  problemId: string;
  notes: string;
}

const updateNotes = async ({ userId, problemId, notes }: Props) => {
  try {
    const progress = await db.problemProgress.upsert({
      where: {
        userId_problemId: {
          userId: userId,
          problemId: problemId,
        },
      },
      update: {
        notes: notes,
      },
      create: {
        userId: userId,
        problemId: problemId,
        notes: notes,
      },
    });

    return progress;

    // Error handling
  } catch (error) {
    console.error("Failed to update LeetCode problem notes:", error);
    throw error;
  }
};

export default updateNotes;