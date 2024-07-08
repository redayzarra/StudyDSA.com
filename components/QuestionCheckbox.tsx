"use client";

import getProblemCompletion from "@/actions/problems/getProblemCompletion";
import markProblem from "@/actions/problems/markProblem";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";
import { useProblemCountStore } from "@/app/store/problemCount";

interface Props {
  className?: string;
  userId: string;
  problemId: number;
  difficulty: 'easy' | 'medium' | 'hard'; // Add difficulty prop
}

const QuestionCheckbox = ({ className, userId, problemId, difficulty }: Props) => {
  const [isComplete, setIsComplete] = useState(false);
  const { incrementCount, decrementCount } = useProblemCountStore(); // Use the Zustand store

  useEffect(() => {
    const fetchCompletionStatus = async () => {
      if (!userId) {
        return;
      }
      try {
        const completionStatus = await getProblemCompletion(userId, problemId);
        setIsComplete(completionStatus);
        // If the problem is already complete when component mounts, increment the count
        if (completionStatus) {
          incrementCount(difficulty);
        }
      } catch (error) {
        console.error("Failed to fetch problem completion status:", error);
      }
    };
    fetchCompletionStatus();
  }, [userId, problemId, difficulty, incrementCount]);

  const handleChange = async () => {
    if (!userId) {
      toast("You need to be logged in to mark a problem");
      return;
    }
    const newIsComplete = !isComplete;
    setIsComplete(newIsComplete);

    // Update the Zustand store
    if (newIsComplete) {
      incrementCount(difficulty);
    } else {
      decrementCount(difficulty);
    }

    try {
      await markProblem(userId, problemId, newIsComplete);
    } catch (error) {
      console.error("Failed to toggle problem completion:", error);
      setIsComplete(isComplete); // Revert on error
      
      // Revert the Zustand store update on error
      if (newIsComplete) {
        decrementCount(difficulty);
      } else {
        incrementCount(difficulty);
      }
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
