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

export function ProblemFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = {
    completed: ["complete", "incomplete"],
    difficulty: ["easy", "medium", "hard"],
    status: ["practicing", "review", "mastered", "challenging"],
  };

  const updateFilters = (category: string, item: string) => {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter</Button>
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
                checked={isChecked(category, item)}
                onCheckedChange={() => updateFilters(category, item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </DropdownMenuCheckboxItem>
            ))}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
