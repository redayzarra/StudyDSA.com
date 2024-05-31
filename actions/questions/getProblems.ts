"use server";

import db from "@/lib/db";

const getProblems = async (ids: number[]) => {
  try {
    const problems = await db.leetCodeProblem.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return problems;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch problems by ids:", error);
    throw error;
  }
};

export default getProblems;