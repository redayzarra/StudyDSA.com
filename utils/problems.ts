import getProblems from "@/actions/questions/getProblems";
import { Filters, ProblemCategories, SearchParams } from "@/types/problems";
import { QuestionDifficulty, MasteryLevel } from "@prisma/client";

export const parseFilters = (searchParams: SearchParams): Filters => {
  const completed = (searchParams.completed as string)?.split(",") || [];
  const difficulty = ((searchParams.difficulty as string)?.split(",") ||
    []) as QuestionDifficulty[];
  const status = ((searchParams.status as string)?.split(",") || []).map(
    capitalizeFirstLetter
  ) as MasteryLevel[];

  return { completed, difficulty, status };
};

export const fetchProblemsByCategories = async (
  categories: ProblemCategories,
  filters: Filters,
  userId: string | undefined
) => {
  const problems: Record<string, Awaited<ReturnType<typeof getProblems>>> = {};

  for (const [category, ids] of Object.entries(categories)) {
    try {
      let categoryProblems = await getProblems(ids, userId);
      problems[category] = applyFilters(categoryProblems, filters);
    } catch (error) {
      console.error(`Error fetching problems for category: ${category}`, error);
      problems[category] = [];
    }
  }

  return problems;
};

export const applyFilters = (
  problems: Awaited<ReturnType<typeof getProblems>>,
  filters: Filters
) => {
  return problems.filter((problem) => {
    const matchesDifficulty =
      filters.difficulty.length === 0 ||
      filters.difficulty.includes(problem.difficulty);
    const matchesStatus =
      filters.status.length === 0 ||
      (problem.progress &&
        filters.status.includes(problem.progress.masteryLevel));
    const matchesCompleted =
      filters.completed.length === 0 ||
      (filters.completed.includes("complete") &&
        problem.progress?.isComplete) ||
      (filters.completed.includes("incomplete") &&
        (!problem.progress || !problem.progress.isComplete));

    return matchesDifficulty && matchesStatus && matchesCompleted;
  });
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};