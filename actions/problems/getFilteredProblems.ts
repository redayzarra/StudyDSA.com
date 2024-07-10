"use server";
import db from "@/lib/db";
import { Filters, ProblemWithProgress } from "@/types/problems";

const getFilteredProblems = async (
  ids: number[],
  userId?: string,
  filters?: Filters
): Promise<ProblemWithProgress[]> => {
  try {
    let where: any = {
      id: {
        in: ids,
      },
    };

    // Apply difficulty filter
    if (filters?.difficulty && filters.difficulty.length > 0) {
      where.difficulty = {
        in: filters.difficulty,
      };
    }

    // Prepare the include object for progress
    let progressWhere: any = {};
    if (userId) {
      progressWhere.userId = userId;

      // Apply status filter
      if (filters?.status && filters.status.length > 0) {
        progressWhere.masteryLevel = {
          in: filters.status,
        };
      }

      // Apply completed filter
      if (filters?.completed && filters.completed.length > 0) {
        progressWhere.isComplete = filters.completed.includes("complete");
      }
    }

    const problems = await db.leetCodeProblem.findMany({
      where,
      orderBy: {
        difficulty: 'asc', // Ascending order: Easy, Medium, Hard
      },
      include: {
        ProblemProgress: {
          where: progressWhere,
          take: 1, // We only need one progress record per problem
        },
      },
    });

    return problems
      .filter(problem => {
        // If filters are applied and user is logged in, only return problems with matching progress
        if (userId && (filters?.status?.length || filters?.completed?.length)) {
          return problem.ProblemProgress.length > 0;
        }
        return true;
      })
      .map(problem => ({
        ...problem,
        progress: problem.ProblemProgress[0],
        ProblemProgress: undefined, // Remove this property as we've extracted what we need
      }));

  } catch (error) {
    console.error("Failed to fetch filtered problems:", error);
    throw error;
  }
};

export default getFilteredProblems;
