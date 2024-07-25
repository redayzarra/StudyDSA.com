import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  url,
  title,
  description,
  header,
  icon,
  external,
}: {
  className?: string;
  url: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}) => {
  return (
    <Link
      href={url}
      className={cn(
        "row-span-1 group/bento hover:shadow-xl transition duration-200 justify-between flex flex-col space-y-4 w-full backdrop-blur-[15px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-[1px] md:border-neutral-900/50 border-neutral-800 p-4",
        className
      )}
      target={external ? "_blank" : ""}
      rel={external ? "noopener noreferrer" : ""}
    >
      {/* Highlight at the very top */}
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 truncate">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground line-clamp-2">
          {description}
        </div>
      </div>
    </Link>
  );
};