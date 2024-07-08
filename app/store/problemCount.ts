import { create } from 'zustand';

interface ProblemCountState {
  easy: number;
  medium: number;
  hard: number;
  incrementCount: (difficulty: 'easy' | 'medium' | 'hard') => void;
  decrementCount: (difficulty: 'easy' | 'medium' | 'hard') => void;
  setCount: (difficulty: 'easy' | 'medium' | 'hard', count: number) => void;
}

export const useProblemCountStore = create<ProblemCountState>((set) => ({
  easy: 0,
  medium: 0,
  hard: 0,
  incrementCount: (difficulty) =>
    set((state) => ({ [difficulty]: state[difficulty] + 1 })),
  decrementCount: (difficulty) =>
    set((state) => ({ [difficulty]: Math.max(0, state[difficulty] - 1) })),
  setCount: (difficulty, count) => set(() => ({ [difficulty]: count })),
}));