import Link from "next/link";
import { PropsWithChildren } from "react";
import { Checkbox } from "./ui/checkbox";

interface Props {
  description?: string;
  href?: string;
}

const SkillTreeCell = ({
  children,
  href = "/",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sapiente?",
}: PropsWithChildren<Props>) => {
  return (
    <div className="relative">
      <Link href={href}>
        <div className="rounded-sm transition-all p-2 bg-transparent hover:bg-muted-foreground/10 dark:hover:bg-black/25 hover:cursor-pointer space-y-2">
          <h1 className="font-semibold">{children}</h1>
          <h2 className="line-clamp-2 text-muted-foreground">{description}</h2>
        </div>
      </Link>
      <Checkbox className="absolute top-2 right-2 rounded-full h-5 w-5" />
    </div>
  );
};

export default SkillTreeCell;
