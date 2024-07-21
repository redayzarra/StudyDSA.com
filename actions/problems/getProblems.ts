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

    // Create a map of problems for faster lookup
    const problemMap = new Map(problems.map(problem => [problem.id, problem]));

    // If userId is not provided, return problems in the original order
    if (!userId) {
      return ids.map(id => problemMap.get(id)!);
    }

    // Fetch progress for the user and problems
    const progressList = await db.problemProgress.findMany({
      where: {
        userId: userId,
        problemId: {
          in: ids
        },
      }
    });

    // Create a map of progress for faster lookup
    const progressMap = new Map(progressList.map(progress => [progress.problemId, progress]));

    // Merge problems with their progress, maintaining the original order
    const problemsWithProgress: ProblemWithProgress[] = ids.map(id => {
      const problem = problemMap.get(id);
      if (!problem) {
        throw new Error(`Problem with id ${id} not found`);
      }
      const progress = progressMap.get(id) || null;
      return {
        ...problem,
        progress
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
