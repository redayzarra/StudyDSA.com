import { QuestionDifficulty, MasteryLevel, LeetCodeProblem, ProblemProgress } from "@prisma/client";

export type ProblemCategories = Record<string, number[]>;

export type Filters = {
  completed: ("complete" | "incomplete")[]; // True => show completed, False => show incomplete, null => show all
  difficulty: QuestionDifficulty[]; // Example: "Easy", "Medium", "Hard"
  status: MasteryLevel[]; // Based on user progress => "Practicing", "Review", "Mastered", "Challenging"
};

export type SearchParams = Record<string, string | string[] | undefined>;

export type ProblemWithProgress = LeetCodeProblem & {
  progress?: ProblemProgress | null;
};

export interface NodeStyle {
  backgroundColorClass: string;
  size?: number;
}

export interface Edge {
  from: number;
  to: number;
  bidirectional: boolean;
}

export interface GraphNodesProps {
  nodeStyles: NodeStyle[];
  edges: Edge[];
}