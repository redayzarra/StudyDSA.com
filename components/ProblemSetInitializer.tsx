"use client";
import React, { useEffect } from 'react';
import { useProblemCountStore } from '@/app/store/problemCount';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface Props {
  setName: string;
  counts: Record<Difficulty, number>;
}

const ProblemSetInitializer: React.FC<Props> = ({ setName, counts }) => {
  const { initializeProblemSet, setCurrentSet } = useProblemCountStore();

  useEffect(() => {
    initializeProblemSet(setName, counts);
    setCurrentSet(setName);
  }, [setName, counts, initializeProblemSet, setCurrentSet]);

  return null;
};

export default ProblemSetInitializer;
