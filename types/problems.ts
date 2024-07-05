import { QuestionDifficulty, MasteryLevel } from "@prisma/client";

export type ProblemCategories = Record<string, number[]>;

export type Filters = {
  completed: string[];
  difficulty: QuestionDifficulty[];
  status: MasteryLevel[];
};

export type SearchParams = Record<string, string | string[] | undefined>;