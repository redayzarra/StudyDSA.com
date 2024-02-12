"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import getUserId from "@/hooks/client/getUserId";
import getChapterStatus from "@/actions/chapters/getChapterStatus";
import { toast } from "sonner";
import markChapter from "@/actions/chapters/markChapter";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  href: string;
  chapterId: string;
}

const SkillTreeCell = ({ title, href, description, chapterId }: Props) => {
  const userId = getUserId();

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      // If the user isn't logged in, don't load
      if (!userId) {
        setIsLoading(false);
        return;
      }
      try {
        const status = await getChapterStatus(userId, chapterId);
        setIsChecked(status);

        // Error handling
      } catch (error) {
        console.error("Failed to fetch chapter completion status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [userId, chapterId]);

  const onClick = async () => {
    // Authentication handling
    if (!userId) {
      toast("You need to be logged in to mark a chapter");
      setIsChecked(false); // Ensure checkbox is unchecked if user is not logged in
      return;
    }

    setIsChecked(!isChecked); // Let's be optimistic

    try {
      await markChapter(userId, chapterId, !isChecked);

      // Error handling
    } catch (error) {
      console.error("Failed to update chapter completion status:", error);
      setIsChecked(isChecked); // Revert if there was an error
    }
  };

  return (
    <div className="relative">
      <Link href={href}>
        <div className="rounded-sm transition-all p-2 bg-transparent hover:bg-muted-foreground/10 dark:hover:bg-black/25 hover:cursor-pointer space-y-2">
          <h1 className="font-semibold">{title}</h1>
          <h2 className="line-clamp-2 text-muted-foreground">{description}</h2>
        </div>
      </Link>
      <Checkbox
        className="absolute top-2 right-2 rounded-full"
        checked={isChecked}
        onClick={onClick}
      />
    </div>
  );
};

export default SkillTreeCell;
