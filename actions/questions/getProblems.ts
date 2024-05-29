"use server";

import db from "@/lib/db";
import { Prisma } from "@prisma/client";

// Define the type that includes tags
type LeetCodeProblemWithTags = Prisma.LeetCodeProblemGetPayload<{
  include: {
    tags: true,
  },
}>;

// Initialize the hashmap with the correct type
const problemCache: { [key: string]: LeetCodeProblemWithTags } = {};

const getProblems = async (names: string[]): Promise<LeetCodeProblemWithTags[]> => {
  // Check if the hashmap is empty
  if (Object.keys(problemCache).length === 0) {
    try {
      // Fetch all problems and populate the hashmap
      const allProblems = await db.leetCodeProblem.findMany({
        include: {
          tags: true,
        },
      });

      allProblems.forEach((problem) => {
        problemCache[problem.title] = problem;
      });

    } catch (error) {
      console.error("Failed to fetch problems:", error);
      throw error;
    }
  }

  // Retrieve the requested problems from the hashmap
  const problems = names.map((name) => problemCache[name]).filter(Boolean);

  return problems as LeetCodeProblemWithTags[];
};

export default getProblems;