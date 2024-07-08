import { QuestionDifficulty, MasteryLevel } from "@prisma/client";

export type ProblemCategories = Record<string, number[]>;

export type Filters = {
  completed: ("complete" | "incomplete")[]; // True => show completed, False => show incomplete, null => show all
  difficulty: QuestionDifficulty[]; // Example: "Easy", "Medium", "Hard"
  status: MasteryLevel[]; // Based on user progress => "Practicing", "Review", "Mastered", "Challenging"
};

export type SearchParams = Record<string, string | string[] | undefined>;
