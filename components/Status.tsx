"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import getProblemStatus from "@/actions/questions/getProblemStatus";
import updateStatus from "@/actions/questions/updateStatus";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MasteryLevel } from "@prisma/client";

interface Props {
  userId: string | undefined;
  problemId: number;
}

export function Status({ userId, problemId }: Props) {
  const [masteryLevel, setMasteryLevel] = useState<string>("Practicing");

  // Function to fetch initial status
  const fetchInitialStatus = async (userId: string, problemId: number) => {
    try {
      const status = await getProblemStatus(userId, problemId);
      setMasteryLevel(status || "Practicing");
    } catch (error) {
      console.error("Failed to fetch initial mastery level:", error);
    }
  };

  // Fetch the initial status when the component mounts
  useEffect(() => {
    if (userId) {
      fetchInitialStatus(userId, problemId);
    }
  }, [userId, problemId]);

  // Function to handle status change
  const handleStatusChange = async (newStatus: string) => {
    if (userId) {
      setMasteryLevel(newStatus);
      try {
        await updateStatus({ userId, problemId, masteryLevel: newStatus as MasteryLevel });
      } catch (error) {
        console.error("Failed to update mastery level:", error);
      }
    }
  };

  const getBackgroundColor = (masteryLevel: string) => {
    switch (masteryLevel) {
      case "Practicing":
        return "bg-neutral-600/25 hover:bg-black/30 text-neutral-400";
      case "Review":
        return "bg-orange-400/50 hover:bg-yellow-400/50 text-neutral-200";
      case "Mastered":
        return "bg-green-500/50 hover:bg-green-500/50 text-neutral-200";
      case "Challenging":
        return "bg-red-500/50 hover:bg-red-500/50 text-neutral-200";
      default:
        return "bg-neutral-600/25 text-neutral-400";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`bg-neutral-600/25 h-8 ${getBackgroundColor(masteryLevel)} text-sm px-2 py-2`}>
          {masteryLevel} <FaChevronDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-45 `}>
        <DropdownMenuLabel>Problem Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={masteryLevel} onValueChange={handleStatusChange}>
          <DropdownMenuRadioItem value="Practicing" disabled={!userId}>Practicing</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Review" disabled={!userId}>Review</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Mastered" disabled={!userId}>Mastered</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Challenging" disabled={!userId}>Challenging</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

