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
  const [isComplete, setIsComplete] = useState(
    chapter.progress?.isComplete || false
  );

  const handleChange = async () => {
    if (!userId) {
      toast("You need to be logged in to mark a chapter");
      return;
    }

    const newIsComplete = !isComplete;
    setIsComplete(newIsComplete);

    try {
      await markChapter(userId, chapter.id, newIsComplete);
      if (chapter.progress) {
        chapter.progress.isComplete = newIsComplete;
      }
    } catch (error) {
      console.error("Failed to toggle chapter completion:", error);
      setIsComplete(isComplete);
      toast.error("Failed to update chapter status");
    }
  };

  return (
    <Checkbox
      className={`rounded-full ${
        isComplete
          ? "data-[state=checked]:bg-green-600 data-[state=checked]:border-green-900 data-[state=checked]:text-green-950 border-2"
          : "bg-gray-200/20 border-2 border-neutral-400"
      } ${className}`}
      checked={isComplete}
      onClick={handleChange}
    />
  );
};

export default MarkCheckbox;
