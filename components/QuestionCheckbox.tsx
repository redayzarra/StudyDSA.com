"use client";

import getProblemCompletion from "@/actions/questions/getProblemCompletion";
import markProblem from "@/actions/questions/markProblem";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";

interface Props {
  className?: string;
  userId: string;
  problemId: string;
}

const QuestionCheckbox = ({
  className,
  userId,
  problemId,
}: Props) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const fetchCompletionStatus = async () => {
      if (!userId) {
        return;
      }
      try {
        const completionStatus = await getProblemCompletion(userId, problemId);
        setIsComplete(completionStatus);

        // Error handling
      } catch (error) {
        console.error("Failed to fetch problem completion status:", error);
      } finally {
      }
    };

    fetchCompletionStatus();
  }, [userId, problemId]);

  const handleChange = async () => {
    if (!userId) {
      toast("You need to be logged in to mark a problem");
      return;
    }

    const newIsComplete = !isComplete;
    setIsComplete(newIsComplete);

    try {
      await markProblem(userId, problemId, newIsComplete);
    } catch (error) {
      console.error("Failed to toggle problem completion:", error);
      setIsComplete(isComplete); // Revert on error
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
