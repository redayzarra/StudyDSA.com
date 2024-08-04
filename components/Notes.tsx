"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegStickyNote } from "react-icons/fa";
import { NotesInput } from "./NotesInput";
import { Button } from "./ui/button";
import { ProblemWithProgress } from "@/types/problems";
import { useState } from "react";

interface Props {
  userId: string | undefined;
  problem: ProblemWithProgress;
}

export function Notes({ userId, problem }: Props) {
  const [hasNotes, setHasNotes] = useState(
    Boolean(problem.progress?.notes && problem.progress.notes.trim() !== "")
  );

  const handleNotesUpdate = (updatedNotes: string) => {
    setHasNotes(Boolean(updatedNotes && updatedNotes.trim() !== ""));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className={`px-2 ${
            hasNotes
              ? "bg-neutral-700/75 hover:bg-neutral-700/50 text-white"
              : "bg-neutral-900/75 hover:bg-neutral-800/50 text-neutral-400 hover:text-white"
          }`}
        >
          <FaRegStickyNote size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notes</DialogTitle>
        </DialogHeader>
        <NotesInput
          userId={userId}
          problem={problem}
          onNotesUpdate={handleNotesUpdate}
        />
      </DialogContent>
    </Dialog>
  );
}
