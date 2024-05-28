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
  problemId: string;
}

export function Notes({ userId, problemId }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="bg-black/50 hover:bg-neutral-950/50 text-neutral-400 hover:text-white px-2 py-1"
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
