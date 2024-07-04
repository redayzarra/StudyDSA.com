"use server";
import db from "@/lib/db";
import { LeetCodeProblem, ProblemProgress, Prisma } from "@prisma/client";

type ProblemWithProgress = LeetCodeProblem & {
  progress?: ProblemProgress;
};

type ProblemWithPossibleProgress = LeetCodeProblem & {
  ProblemProgress?: ProblemProgress[];
};

const getProblems = async (ids: number[], userId?: string): Promise<ProblemWithProgress[]> => {
  try {
    const problems = await db.leetCodeProblem.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      orderBy: {
        difficulty: 'asc', // Ascending order: Easy, Medium, Hard
      },
      include: userId ? {
        ProblemProgress: {
          where: {
            userId: userId,
          },
        },
      } : undefined,
    }) as ProblemWithPossibleProgress[];

    return problems.map(problem => ({
      ...problem,
      progress: problem.ProblemProgress?.[0],
      ProblemProgress: undefined, // Remove this property as we've extracted what we need
    }));
  } catch (error) {
    console.error("Failed to fetch problems by ids:", error);
    throw error;
  }
};

export default getProblems;
