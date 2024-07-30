"use client";

import getChapterStatus from "@/actions/chapters/getChapterStatus";
import markChapter from "@/actions/chapters/markChapter";
import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }
      try {
        const status = await getChapterStatus(userId, chapter.id);
        setIsComplete(status);
      } catch (error) {
        console.error("Failed to fetch chapter completion status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [userId, chapter.id]);

  const handleChange = async () => {
    if (!userId) {
      toast("You need to be logged in to mark a chapter");
      return;
    }

    const newIsComplete = !isComplete;
    setIsComplete(newIsComplete);

    try {
      await markChapter(userId, chapter.id, newIsComplete);
    } catch (error) {
      console.error("Failed to toggle chapter completion:", error);
      setIsComplete(!newIsComplete); // Revert state if update fails
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
