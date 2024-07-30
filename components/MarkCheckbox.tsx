"use client";

import React, { useState } from "react";
import markChapter from "@/actions/chapters/markChapter";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";
import { ChapterWithProgress } from "@/types/chapters";

interface Props {
  className?: string;
  userId: string | undefined;
  chapter: ChapterWithProgress;
}

const MarkCheckbox = ({ className, userId, chapter }: Props) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = async () => {
    // If the user doesn't exist, tell them to go away
    if (!userId) {
      toast("You need to be logged in to mark a chapter");
      return;
    }


    const newIsComplete = !isComplete;
    setIsComplete(newIsComplete);
    try {
      await markChapter(userId, chapter.id, newIsComplete);
      toast.success("Updated chapter status");
      // Note: We're not modifying chapter.progress directly here

      // Error handling
    } catch (error) {
      console.error("Failed to toggle chapter completion:", error);
      setIsComplete(isComplete);
      toast.error("Failed to update chapter status");
    }
  };

  return (
    <Checkbox
      className={`rounded-full h-5 w-5 ${className}`}
      checked={isComplete}
      onClick={handleChange}
    />
  );
};

export default MarkCheckbox;
