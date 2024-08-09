import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { BentoGrid } from "../ui/BentoGrid";

export function LoadingWelcomeGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {(() => {
        const elements = [];
        for (let i = 0; i < 5; i++) {
          elements.push(
            <LoadingItem key={i} className={i === 3 ? "md:col-span-2" : ""} />
          );
        }
        return elements;
      })()}
    </BentoGrid>
  );
}

const LoadingItem = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "row-span-1 group/bento hover:shadow-xl transition duration-200 justify-between flex flex-col space-y-4 w-full backdrop-blur-[15px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-[1px] md:border-neutral-900/50 border-neutral-800 p-4",
        className
      )}
    >
      {/* Highlight at the very top */}
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      <Skeleton className="h-5 w-24" />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 truncate">
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="font-sans font-normal text-muted-foreground line-clamp-2">
          <Skeleton className="h-4 w-56" />
        </div>
      </div>
    </div>
  );
};
