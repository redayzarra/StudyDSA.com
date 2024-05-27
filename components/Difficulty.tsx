import React from "react";
import { Badge } from "./ui/badge";
import { QuestionDifficulty } from "@prisma/client";

const getBadgeColor = (difficulty: QuestionDifficulty) => {
  switch (difficulty) {
    case "Easy":
      return "border bg-green-400/60 hover:bg-green-400/70 border-green-500 text-green-200";
    case "Medium":
      return "border bg-orange-400/60 hover:bg-orange-400/70 border-amber-400 text-orange-200";
    case "Hard":
      return "border bg-red-500/60 hover:bg-red-500/70 border-red-500 text-red-200";
    default:
      return "bg-gray-200 text-gray-950";
  }
};

const Difficulty = ({ difficulty }: { difficulty: QuestionDifficulty }) => {
  return <Badge variant="secondary" className={`rounded-[4px] h-6 font-medium ${getBadgeColor(difficulty)}`}>{difficulty}</Badge>;
};

export default Difficulty;

