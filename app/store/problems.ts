import { Filters } from '@/types/problems';
import { create } from 'zustand';

// Define the structure of our problem filter state
interface ProblemFilterState {
  filters: Filters;
  setFilter: <K extends keyof Filters>(
    category: K,
    value: Filters[K]
  ) => void;
  resetFilters: () => void;
  toggleFilter: <K extends keyof Filters>(
    category: K,
    item: Filters[K] extends (infer T)[] ? T : Filters[K]
  ) => void;
}

// Initial state of filters
const initialFilters: Filters = {
  completed: null,
  difficulty: [],
  status: [],
};

// Create the Zustand store for problem filters
export const useProblemFilterStore = create<ProblemFilterState>((set) => ({
  // Current state of filters
  filters: initialFilters,
  
  // Set an entire filter category
  setFilter: (category, value) => 
    set((state) => ({
      filters: { ...state.filters, [category]: value }
    })),
  
  // Reset all filters to their initial state
  resetFilters: () => set({ filters: initialFilters }),
  
  // Toggle individual filter items
  toggleFilter: (category, item) => 
    set((state) => {
      if (category === 'completed') {
        // Toggle between true, false, and null for completed
        return { 
          filters: { 
            ...state.filters, 
            completed: state.filters.completed === item ? null : item as boolean | null 
          }
        };
      } else {
        // For arrays (difficulty and status)
        const currentItems = state.filters[category] as any[];
        // Add item if not present, remove if present
        const newItems = currentItems.includes(item)
          ? currentItems.filter((i) => i !== item)
          : [...currentItems, item];
        return { filters: { ...state.filters, [category]: newItems } };
      }
    }),
}));
