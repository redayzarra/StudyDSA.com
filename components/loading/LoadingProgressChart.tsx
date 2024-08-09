import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  className?: string;
}

export function LoadingProgressChart({ className }: Props) {
  return (
    <div className={cn("relative mx-auto aspect-square h-[173px]", className)}>
      {/* Circular skeleton loader */}
      <div className="absolute bg-neutral-950 border-2 inset-0 rounded-full" />
      
      {/* Center content skeleton */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Skeleton className="h-8 w-16 mb-2" />
        <Skeleton className="h-4 w-24" />
      </div>
      
      {/* Difficulty label skeleton */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Skeleton className="h-6 w-14" />
      </div>
    </div>
  );
}
