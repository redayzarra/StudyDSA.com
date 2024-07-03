"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { FaChevronDown } from "react-icons/fa6";
import Difficulty from "./Difficulty";
import { QuestionDifficulty } from "@prisma/client";
import { Badge } from "./ui/badge";

interface Props {
  userId: string | undefined;
}

export function ProblemFilter({ userId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = {
    completed: ["complete", "incomplete"],
    difficulty: ["Easy", "Medium", "Hard"],
    status: ["Practicing", "Review", "Mastered", "Challenging"],
  };

  const updateFilters = (category: string, item: string) => {
    if (!userId) {
      toast("You need to be logged in to use filters");
      return;
    }
    const params = new URLSearchParams(searchParams);
    const currentFilters = params.get(category)?.split(",") || [];
    if (currentFilters.includes(item)) {
      params.set(category, currentFilters.filter((i) => i !== item).join(","));
    } else {
      params.set(category, [...currentFilters, item].join(","));
    }
    if (params.get(category) === "") {
      params.delete(category);
    }
    router.push(`?${params.toString()}`);
  };

  const isChecked = (category: string, item: string) => {
    const currentFilters = searchParams.get(category)?.split(",") || [];
    return currentFilters.includes(item);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Practicing":
        return "bg-neutral-400/25 hover:bg-neutral-400/50 text-neutral-100";
      case "Review":
        return "bg-orange-400/50 hover:bg-orange-500/60 hover:text-white text-neutral-200";
      case "Mastered":
        return "bg-green-500/50 hover:bg-green-600/50 hover:text-white text-neutral-200";
      case "Challenging":
        return "bg-red-500/50 hover:bg-red-600/50 hover:text-white text-neutral-200";
      default:
        return "bg-neutral-600/25 text-neutral-400";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-9 text-sm px-3 font-semibold bg-neutral-600/25 hover:bg-black/30 hover:text-white text-neutral-400"
        >
          Filter <FaChevronDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {Object.entries(filters).map(([category, items]) => (
          <React.Fragment key={category}>
            <DropdownMenuLabel>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {items.map((item) => (
              <DropdownMenuCheckboxItem
                key={item}
                checked={userId ? isChecked(category, item) : false}
                onCheckedChange={() => updateFilters(category, item)}
              >
                {category === "difficulty" ? (
                  <Difficulty difficulty={item as QuestionDifficulty} />
                ) : category === "status" ? (
                  <Badge className={`${getStatusStyle(item)} font-medium rounded-[4px] border text-xs`}>
                    {item}
                  </Badge>
                ) : (
                  item.charAt(0).toUpperCase() + item.slice(1)
                )}
              </DropdownMenuCheckboxItem>
            ))}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
