import getProblems from "@/actions/problems/getProblems";
import React from "react";
import { QuestionsTable } from "./QuestionsTable";

const ProblemTables = ({
  problemsByCategory,
  userId,
}: {
  problemsByCategory: Record<string, Awaited<ReturnType<typeof getProblems>>>;
  userId: string | undefined;
}) => (
  <div className="w-full mt-4 space-y-12">
    {Object.entries(problemsByCategory)
      .filter(([_, problems]) => problems.length > 0)
      .map(([category, problems]) => (
        <QuestionsTable
          key={category}
          title={category}
          problems={problems}
          userId={userId}
        />
      ))}
  </div>
);

export default ProblemTables;
