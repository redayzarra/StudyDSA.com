"use client";

import getAlgorithmStatus from "@/actions/algorithms/getAlgorithmStatus";
import markAlgorithm from "@/actions/algorithms/markAlgorithm";
import getUserId from "@/hooks/getUserId";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";

interface Props {
  title: string;
  description: string;
  href: string;
  algorithmId: string;
}

const AlgorithmCell = ({ title, description, href, algorithmId }: Props) => {
  const userId = getUserId();

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      // If the user isn't logged in, don't load
      if (!userId) {
        setIsLoading(false);
        return;
      }
      try {
        const status = await getAlgorithmStatus(userId, algorithmId);
        setIsChecked(status);

        // Error handling
      } catch (error) {
        console.error("Failed to fetch algorithm completion status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [userId, algorithmId]);

  const onClick = async () => {
    // Authentication handling
    if (!userId) {
      toast("You need to be logged in to mark an algorithm");
      setIsChecked(false); // Ensure checkbox is unchecked if user is not logged in
      return;
    }

    setIsChecked(!isChecked); // Let's be optimistic

    try {
      await markAlgorithm(userId, algorithmId, !isChecked);

      // Error handling
    } catch (error) {
      console.error("Failed to update algorithm completion status:", error);
      setIsChecked(isChecked); // Revert if there was an error
    }
  };

  return (
    <div className="relative hover:-translate-y-1 transition-all">
      <Link href={href}>
        <div
          className={`rounded-sm shadow-md transition-all p-2 border-t-2 border-white hover:cursor-pointer space-y-2 ${
            isChecked
              ? "bg-amber-200 dark:bg-yellow-600 dark:border-yellow-100/50"
              : "hover:bg-gray-300/70 dark:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20 dark:border-white/10"
          }`}
        >
          <h1 className="font-semibold text-[0.92rem] line-clamp-1">{title}</h1>
          <h2
            className={`line-clamp-1 text-muted-foreground text-sm ${
              isChecked && "text-gray-900 dark:text-gray-100"
            }`}
          >
            {description}
          </h2>
        </div>
      </Link>
      <Checkbox
        checked={isChecked}
        onClick={onClick}
        className="absolute top-2 right-2 h-5 w-5 rounded-full"
      />

      {/* {isLoading ? (
        <Spinner className="text-primary border-[3px] absolute top-2 right-2 h-5 w-5 rounded-full" />
      ) : (
      )} */}
    </div>
  );
};

export default AlgorithmCell;
