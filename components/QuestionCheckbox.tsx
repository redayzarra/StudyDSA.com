"use client";

import React, { useState, useEffect } from "react";
import markProblem from "@/actions/problems/markProblem";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";
import { useProblemCountStore } from "@/app/store/problemCount";
import { ProblemWithProgress } from "@/types/problems";

interface Props {
  className?: string;
  userId: string;
  problem: ProblemWithProgress;
}

const QuestionCheckbox = ({ className, userId, problem }: Props) => {
  const [isComplete, setIsComplete] = useState(problem.progress?.isComplete || false);
  const { currentSet, incrementCompleted, decrementCompleted } = useProblemCountStore();

  useEffect(() => {
    if (isComplete) {
      incrementCompleted(currentSet, problem.difficulty);
    }
  }, [isComplete, currentSet, problem.difficulty, incrementCompleted]);

  const handleChange = async () => {
    if (!userId) {
      toast("You need to be logged in to mark a problem");
      return;
    }
    const newIsComplete = !isComplete;
    setIsComplete(newIsComplete);

    if (newIsComplete) {
      incrementCompleted(currentSet, problem.difficulty);
    } else {
      decrementCompleted(currentSet, problem.difficulty);
    }

    try {
      await markProblem(userId, problem.id, newIsComplete);
    } catch (error) {
      console.error("Failed to toggle problem completion:", error);
      setIsComplete(isComplete);
      if (newIsComplete) {
        decrementCompleted(currentSet, problem.difficulty);
      } else {
        incrementCompleted(currentSet, problem.difficulty);
      }
      toast.error("Failed to update problem status");
    }
  };

  return (
    <Checkbox
      className={`rounded-[4px] h-5 w-5 ${
        isComplete
          ? "data-[state=checked]:bg-green-600 data-[state=checked]:border-green-900 data-[state=checked]:text-green-950 border-2"
          : "bg-gray-200/20 border-2 border-neutral-400"
      } ${className}`}
      checked={isComplete}
      onClick={handleChange}
    />
  );
};

export default QuestionCheckbox;
