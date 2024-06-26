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

interface Props {
  userId: string | undefined;
  problemId: number;
}

export function Notes({ userId, problemId }: Props) {
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
        <NotesInput userId={userId} problemId={problemId} />
      </DialogContent>
    </Dialog>
  );
}
