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

interface Props {
  userId: string | undefined;
  problem: ProblemWithProgress;
}

export function Notes({ userId, problem }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="bg-neutral-900/75 hover:bg-neutral-800/50 text-neutral-400 hover:text-white px-2"
        >
          <FaRegStickyNote size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notes</DialogTitle>
        </DialogHeader>
        <NotesInput userId={userId} problem={problem} />
      </DialogContent>
    </Dialog>
  );
}
