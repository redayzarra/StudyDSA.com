"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
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

interface Props {
  userId: string | undefined;
}

export function ProblemFilter({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
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

    const current = qs.parse(searchParams.toString());
    const currentCategory = current[category] as string | undefined;
    const currentItems = currentCategory ? currentCategory.split(',') : [];

    let newItems: string[];
    if (currentItems.includes(item)) {
      newItems = currentItems.filter((i) => i !== item);
    } else {
      newItems = [...currentItems, item];
    }

    const newQuery = {
      ...current,
      [category]: newItems.join(','),
    };

    if (newItems.length === 0) {
      delete newQuery[category];
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: newQuery,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  const isChecked = (category: string, item: string) => {
    const currentCategory = searchParams.get(category);
    return currentCategory ? currentCategory.split(',').includes(item) : false;
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
