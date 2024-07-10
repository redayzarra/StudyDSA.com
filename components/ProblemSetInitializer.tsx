"use client";

import React, { useEffect } from 'react';
import { useProblemCountStore } from '@/app/store/problemCount';
import { QuestionDifficulty } from '@prisma/client';

interface Props {
  setName: string;
  counts: {
    total: Record<QuestionDifficulty, number>;
    completed: Record<QuestionDifficulty, number>;
  };
}

const ProblemSetInitializer: React.FC<Props> = ({ setName, counts }) => {
  const { initializeProblemSet, setCurrentSet, incrementCompleted } = useProblemCountStore();

  useEffect(() => {
    // Initialize the problem set with total counts
    initializeProblemSet(setName, counts.total);

    // Set the current set
    setCurrentSet(setName);

    // Update the completed counts
    Object.entries(counts.completed).forEach(([difficulty, count]) => {
      for (let i = 0; i < count; i++) {
        incrementCompleted(setName, difficulty as QuestionDifficulty);
      }
    });
  }, [setName, counts, initializeProblemSet, setCurrentSet, incrementCompleted]);

  return null;
};

export default ProblemSetInitializer;
