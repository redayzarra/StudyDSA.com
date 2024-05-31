"use client";

import getAlgorithmStatus from "@/actions/algorithms/getAlgorithmStatus";
import markAlgorithm from "@/actions/algorithms/markAlgorithm";
import getUserId from "@/hooks/client/getUserId";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";

interface Props {
  title: string;
  description: string;
  href: string;
  algorithmId: number;
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
    <div className="relative hover:-translate-y-1 transition-all duration-200">
      <div
        className={`absolute inset-x-0 h-[1px] mx-auto bg-gradient-to-r from-transparent ${
          isChecked
            ? "via-yellow-100 dark:via-yellow-200"
            : "via-white dark:via-stone-400"
        } to-transparent`}
      />
      <Link href={href}>
        <div
          className={`rounded-sm shadow-md transition-all p-2 hover:cursor-pointer space-y-2 ${
            isChecked
              ? "bg-amber-200 dark:bg-yellow-600"
              : "bg-gray-100/25 hover:bg-gray-200/50 dark:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20"
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

      {/* Removing the ability to mark them outside of page
      <div className="absolute top-3 right-2 text-primary">
        {isChecked ? (
          <FaCheckCircle className="h-4 w-4" />
        ) : (
          <FaRegCircle className="h-4 w-4" />
        )}
      </div> */}

      <Checkbox
        checked={isChecked}
        onClick={onClick}
        className="absolute top-2 right-2 border-[2px] h-[20px] w-[20px] rounded-full"
      />

      {/* {isLoading ? (
        <Spinner className="text-primary border-[3px] absolute top-2 right-2 h-5 w-5 rounded-full" />
      ) : (
      )} */}
    </div>
  );
};

export default AlgorithmCell;
