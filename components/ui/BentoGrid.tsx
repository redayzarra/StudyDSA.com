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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto ",
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
}: {
  className?: string;
  url: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      href={url}
      className={cn(
        "row-span-1 group/bento hover:shadow-xl transition duration-200 justify-between flex flex-col space-y-4 w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] p-4",
        className
      )}
    >
      {/* Highlight at the very top */}
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 truncate">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};
