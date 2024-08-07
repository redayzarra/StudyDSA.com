import { create } from "zustand";
import { produce } from "immer";

// Define a type for difficulties to reduce repetition
type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface ProblemSetCounts {
  total: Record<Difficulty, number>;
  completed: Record<Difficulty, number>;
}

interface ProblemCountState {
  currentSet: string;
  problemSets: Record<string, ProblemSetCounts>;
  setCurrentSet: (set: string) => void;
  initializeProblemSet: (set: string, counts: ProblemSetCounts['total']) => void;
  incrementCompleted: (set: string, difficulty: Difficulty) => void;
  decrementCompleted: (set: string, difficulty: Difficulty) => void;
  calculateTotalPercentage: (set: string) => number;
}

export const useProblemCountStore = create<ProblemCountState>((set, get) => ({
  currentSet: 'NeetCode150',
  problemSets: {},
  setCurrentSet: (newSet: string): void => set({ currentSet: newSet }),
  initializeProblemSet: (newSet: string, counts: ProblemSetCounts['total']): void => 
    set(produce((state: ProblemCountState) => {
      state.problemSets[newSet] = {
        total: counts,
        completed: { Easy: 0, Medium: 0, Hard: 0 }
      };
    })),
  incrementCompleted: (setName: string, difficulty: Difficulty): void =>
    set(produce((state: ProblemCountState) => {
      const set = state.problemSets[setName];
      if (set) {
        set.completed[difficulty] = (set.completed[difficulty] || 0) + 1;
      } else {
        console.error(`Problem set ${setName} not found`);
      }
    })),
  decrementCompleted: (setName: string, difficulty: Difficulty): void =>
    set(produce((state: ProblemCountState) => {
      const set = state.problemSets[setName];
      if (set) {
        set.completed[difficulty] = Math.max(0, (set.completed[difficulty] || 0) - 1);
      } else {
        console.error(`Problem set ${setName} not found`);
      }
    })),
  calculateTotalPercentage: (setName: string): number => {
    const state = get();
    const set = state.problemSets[setName];
    if (set) {
      const totalCompleted = Object.values(set.completed).reduce((sum, count) => sum + count, 0);
      const totalProblems = Object.values(set.total).reduce((sum, count) => sum + count, 0);
      return totalProblems > 0 ? Math.round((totalCompleted / totalProblems) * 100) : 0;
    }
    return 0;
  },
}));
