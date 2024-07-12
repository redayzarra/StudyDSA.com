"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import updateStatus from "@/actions/problems/updateStatus";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MasteryLevel } from "@prisma/client";
import { ProblemWithProgress } from "@/types/problems";

interface Props {
  userId: string | undefined;
  problem: ProblemWithProgress;
}

export function Status({ userId, problem }: Props) {
  const [masteryLevel, setMasteryLevel] = useState<MasteryLevel>("Practicing");

  useEffect(() => {
    if (problem.progress) {
      setMasteryLevel(problem.progress.masteryLevel);
    }
  }, [problem.progress]);

  const handleStatusChange = async (newStatus: string) => {
    if (userId && isMasteryLevel(newStatus)) {
      setMasteryLevel(newStatus);
      try {
        // Send api request to update the data in database
        await updateStatus({
          userId,
          problemId: problem.id,
          masteryLevel: newStatus,
        });

        // Update the stale data so we can still work with it
        if (problem.progress) {
          problem.progress.masteryLevel = newStatus;
        }

        // Error handling
      } catch (error) {
        console.error("Failed to update mastery level:", error);
      }
    }
  };

  const getBackgroundColor = (masteryLevel: MasteryLevel) => {
    switch (masteryLevel) {
      case "Practicing":
        return "bg-neutral-600/25 hover:bg-black/30 hover:text-white text-neutral-400";
      case "Mastered":
        return "bg-green-500/50 hover:bg-green-600/50 hover:text-white text-neutral-200";
      case "Review":
        return "bg-orange-400/50 hover:bg-orange-500/60 hover:text-white text-neutral-200";
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
          className={`bg-neutral-600/25 h-[30px] ${getBackgroundColor(
            masteryLevel
          )} text-sm px-2`}
        >
          {masteryLevel} <FaChevronDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-45 `}>
        <DropdownMenuLabel>Problem Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={masteryLevel}
          onValueChange={handleStatusChange}
        >
          <DropdownMenuRadioItem value="Practicing" disabled={!userId}>
            Practicing
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Mastered" disabled={!userId}>
            Mastered
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Review" disabled={!userId}>
            Review
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Challenging" disabled={!userId}>
            Challenging
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Type guard to check if a string is a valid MasteryLevel
function isMasteryLevel(value: string): value is MasteryLevel {
  return ["Practicing", "Mastered", "Review", "Challenging"].includes(
    value as MasteryLevel
  );
}
