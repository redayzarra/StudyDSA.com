"use client";

import React, { useEffect, useMemo } from 'react';
import { useProblemCountStore } from '@/app/store/problemCount';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface Props {
  setName: string;
  counts: Record<Difficulty, number>;
}

const ProblemSetInitializer: React.FC<Props> = ({ setName, counts }) => {
  const { initializeProblemSet, setCurrentSet } = useProblemCountStore();

  // Memoize the counts object
  const memoizedCounts = useMemo(() => counts, [counts]);

  useEffect(() => {
    initializeProblemSet(setName, memoizedCounts);
    setCurrentSet(setName);
  }, [setName, memoizedCounts, initializeProblemSet, setCurrentSet]);

  return null;
};

export default React.memo(ProblemSetInitializer);

