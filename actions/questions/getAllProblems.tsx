"use server";

import db from "@/lib/db";

const getAllProblems = async () => {
  try {
    const problems = await db.leetCodeProblem.findMany({
      include: {
        tags: true, // Include tags associated with each problem
      },
    });

    return problems;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch all problems:", error);
    throw error;
  }
};

export default getAllProblems;
