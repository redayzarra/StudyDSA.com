"use client";

import React, { useEffect, useState, useCallback } from "react";
import getProblemCompletion from "@/actions/problems/getProblemCompletion";
import markProblem from "@/actions/problems/markProblem";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";
import { useProblemCountStore } from "@/app/store/problemCount";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Props {
  className?: string;
  userId: string;
  problemId: number;
  difficulty: Difficulty;
}

const QuestionCheckbox: React.FC<Props> = ({ className, userId, problemId, difficulty }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { currentSet, incrementCompleted, decrementCompleted } = useProblemCountStore();

  useEffect(() => {
    const fetchCompletionStatus = async () => {
      if (!userId) {
        return;
      }
      try {
        const completionStatus = await getProblemCompletion(userId, problemId);
        setIsComplete(completionStatus);
        if (completionStatus) {
          incrementCompleted(currentSet, difficulty);
        }
      } catch (error) {
        console.error("Failed to fetch problem completion status:", error);
      }
    };
    fetchCompletionStatus();
  }, [userId, problemId, difficulty, currentSet, incrementCompleted]);

  const handleChange = useCallback(async () => {
    if (!userId) {
      toast("You need to be logged in to mark a problem");
      return;
    }

    const newIsComplete = !isComplete;
    setIsComplete(newIsComplete);

    if (newIsComplete) {
      incrementCompleted(currentSet, difficulty);
    } else {
      decrementCompleted(currentSet, difficulty);
    }

    try {
      await markProblem(userId, problemId, newIsComplete);
    } catch (error) {
      console.error("Failed to toggle problem completion:", error);
      setIsComplete(isComplete);

      if (newIsComplete) {
        decrementCompleted(currentSet, difficulty);
      } else {
        incrementCompleted(currentSet, difficulty);
      }
    }
  }, [userId, isComplete, currentSet, difficulty, incrementCompleted, decrementCompleted, problemId]);

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

export default React.memo(QuestionCheckbox);

