"use server";

import db from "@/lib/db";
import { ProblemWithProgress } from "@/types/problems";

const getProblems = async (ids: number[], userId?: string): Promise<ProblemWithProgress[]> => {
  try {
    // Fetch problems
    const problems = await db.leetCodeProblem.findMany({
      where: {
        id: {
          in: ids
        }
      },
      include: {
        tags: true
      }
    });

    // If userId is not provided, return problems without progress
    if (!userId) {
      return problems;
    }

    // Fetch progress for the user and problems
    const progressList = await db.problemProgress.findMany({
      where: {
        userId: userId,
        problemId: {
          in: ids
        }
      }
    });

    // Merge problems with their progress
    const problemsWithProgress: ProblemWithProgress[] = problems.map(problem => {
      const progress = progressList.find(p => p.problemId === problem.id);
      return {
        ...problem,
        progress: progress || null
      };
    });

    return problemsWithProgress;

    // Error handling
  } catch (error) {
    console.error("Failed to fetch problems:", error);
    throw error;
  }
};

export default getProblems;