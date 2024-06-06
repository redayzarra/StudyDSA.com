import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { FaCode } from "react-icons/fa";
import CodeBlock from "./CodeBlock";
import { Button } from "./ui/button";
import SolutionBlock from "./SolutionBlock";

export function Solution({ code }: { code?: string | undefined | null }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="bg-neutral-900/75 hover:bg-neutral-800/50 text-neutral-400 hover:text-white px-2"
        >
          <FaCode className="" size={20} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] p-0 rounded-lg">
        <SolutionBlock
          code={code!}
          language="python"
          title="Solution.py"
        />
      </DialogContent>
    </Dialog>
  );
}
