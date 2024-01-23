import Link from "next/link";
import React, { PropsWithChildren } from "react";

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
    <Link href={href}>
      <div className="rounded-sm transition-all p-2 bg-transparent hover:bg-muted-foreground/10 dark:hover:bg-black/25 hover:cursor-pointer space-y-2">
        <h1 className="font-semibold">{children}</h1>
        <h2 className="line-clamp-2 text-muted-foreground">{description}</h2>
      </div>
    </Link>
  );
};

export default SkillTreeCell;
