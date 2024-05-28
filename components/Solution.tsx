import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaCode } from "react-icons/fa";
import CodeBlock from "./CodeBlock";
import { Button } from "./ui/button";

export function Solution() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="bg-neutral-800/50 px-2 py-1">
          <FaCode className="text-neutral-300 hover:text-white" size={20} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] px-[10px] -py-10">
        <CodeBlock
          code={`return len(array) != len(set(array))`}
          language="python"
          title="Solution.py"
          spacing="mr-4"
          className="-mx-3 -mb-6 -mt-7"
        />
      </DialogContent>
    </Dialog>
  );
}
