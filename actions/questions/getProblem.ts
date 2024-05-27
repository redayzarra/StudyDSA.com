"use server";

import db from "@/lib/db";
import { LeetCodeProblem } from "@prisma/client";

const problemCache: { [key: string]: LeetCodeProblem } = {}; // Initialize the hashmap

const getProblems = async (names: string[]) => {
  // Check if the hashmap is empty
  if (Object.keys(problemCache).length === 0) {
    try {
      // Fetch all problems and populate the hashmap
      const allAlgorithms = await db.leetCodeProblem.findMany();
      allAlgorithms.forEach(problem => {
        problemCache[problem.title] = problem;
      });
    } catch (error) {
      console.error("Failed to fetch problems:", error);
      throw error;
    }
  }

  // Retrieve the requested problems from the hashmap
  const problems = names.map(name => problemCache[name]).filter(Boolean);

  return problems;
};

export default getProblems;