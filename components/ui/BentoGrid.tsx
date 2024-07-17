import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

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
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleHeaderMouseEnter = () => setIsHeaderHovered(true);
  const handleHeaderMouseLeave = () => setIsHeaderHovered(false);

  return (
    <div
      className={cn(
        "row-span-1 group/bento hover:shadow-xl transition duration-200 justify-between flex flex-col space-y-4 w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] p-4 relative",
        className
      )}
    >
      {/* Highlight at the very top */}
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      
      {/* Interactive header */}
      <div
        className="z-10"
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        {header}
      </div>
      
      {/* Link wrapper for the rest of the content */}
      <Link
        href={url}
        className={cn(
          "absolute inset-0 z-0",
          isHeaderHovered ? "pointer-events-none" : "pointer-events-auto"
        )}
        target={external ? "_blank" : ""}
        rel={external ? "noopener noreferrer" : ""}
      />
      
      <div className="group-hover/bento:translate-x-2 transition duration-200 z-0">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 truncate">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground line-clamp-2">
          {description}
        </div>
      </div>
    </div>
  );
};