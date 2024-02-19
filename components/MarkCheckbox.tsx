"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import getUserId from "@/hooks/client/getUserId";
import getChapterStatus from "@/actions/chapters/getChapterStatus";
import markChapter from "@/actions/chapters/markChapter";
import { Checkbox } from "./ui/checkbox"; // Adjust the import path as needed
import { useRouter } from "next/navigation";

interface Props {
  chapterId: string;
  className?: string;
}

const MarkCheckbox = ({ chapterId, className }: Props) => {
  const userId = getUserId();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }
      try {
        const status = await getChapterStatus(userId, chapterId);
        setIsChecked(status);
      } catch (error) {
        console.error("Failed to fetch chapter completion status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [userId, chapterId]);

  const onClick = async () => {
    if (!userId) {
      toast("You need to be logged in to mark a chapter");
      return;
    }

    setIsChecked(!isChecked); // Optimistic UI update

    try {
      await markChapter(userId, chapterId, !isChecked);
      router.refresh();
    } catch (error) {
      console.error("Failed to update chapter completion status:", error);
      setIsChecked(isChecked); // Revert on error
    }
  };

  // Render loading state or checkbox based on `isLoading`
  return (
    <Checkbox
      className={`rounded-full ${className}`}
      checked={isChecked}
      onClick={onClick}
    />
  );
};

export default MarkCheckbox;
