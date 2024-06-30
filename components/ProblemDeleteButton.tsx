"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { LeetCodeProblem } from "@prisma/client";
import { toast } from "sonner";
import clearProgress from "@/actions/questions/clearProgress";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

interface Props {
  userId: string | undefined;
  title: string;
  problems: { [category: string]: LeetCodeProblem[] };
}

const ProblemDeleteButton = ({ userId, title, problems }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    // Check if the user is logged in
    if (!userId) {
      toast("You need to be logged in to clear your progress");
      return;
    }

    setIsLoading(true);

    // Extract problem IDs from the problems hashmap
    const problemIds = Object.values(problems)
      .flat()
      .map((problem) => problem.id);

    try {
      const response = await clearProgress(userId, problemIds);
      if (response.success) {
        toast(`Your progress for ${title} list is cleared`);
      }
      router.refresh();
    } catch (error) {
      toast(`Failed to clear progress for the ${title} list`);
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsDialogOpen(false);
    }
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button
          size="icon"
          className="h-9 bg-neutral-900/75 hover:bg-red-800/50 hover:border-red-900 text-neutral-400 hover:text-red-200 px-2"
          variant="outline"
        >
          <FaTrash size={15} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to clear your progress?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will delete your progress for the <strong>{title}</strong> list
            only. Your progress on other lists and problems won&apos;t be affected.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2">
          <Button
            variant="outline"
            className="h-10"
            onClick={() => setIsDialogOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            className="h-10 bg-red-800/70 hover:bg-red-800 border-[1px] border-red-950 text-white"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Clearing..." : "Continue"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProblemDeleteButton;
