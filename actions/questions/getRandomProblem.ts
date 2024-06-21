"use server";

import db from "@/lib/db";
import { QuestionDifficulty, MasteryLevel } from "@prisma/client";

// Define the function to get a random problem based on given criteria
const getRandomProblem = async (problems: number[], difficulty?: QuestionDifficulty, masteryLevel?: MasteryLevel) => {
  try {
    // Query the database to filter problems based on provided criteria
    const filteredProblems = await db.leetCodeProblem.findMany({
      where: {
        id: {
          in: problems,
        },
        difficulty: difficulty,
        ProblemProgress: masteryLevel ? {
          some: {
            masteryLevel: masteryLevel,
          },
        } : undefined,
      },
    });

    // Check if there are any problems that match the criteria
    if (filteredProblems.length === 0) {
      throw new Error("No problems match the given criteria");
    }

    // Select a random problem from the filtered list
    const randomProblem = filteredProblems[Math.floor(Math.random() * filteredProblems.length)];

    return randomProblem;

  } catch (error) {
    console.error("Failed to get a random problem:", error);
    throw error;
  }
};

export default getRandomProblem;

