import { create } from 'zustand';
import toggleBookmarkAPI from "@/actions/bookmark/toggleBookmark"; 

interface BookmarkStoreState {
  bookmarkedChapterId: string | null; 
  toggleBookmark: (userId: string, chapterId: string) => Promise<void>;
  isBookmarked: (chapterId: string) => boolean;
}

const useBookmarkStore = create<BookmarkStoreState>((set, get) => ({
  bookmarkedChapterId: null,
  toggleBookmark: async (userId: string, chapterId: string) => {
    try {
      // Toggle bookmark in the backend
      const success = await toggleBookmarkAPI(userId, chapterId); 
      if(success) {
        set(state => ({
          bookmarkedChapterId: state.bookmarkedChapterId === chapterId ? null : chapterId,
        }));
      }
    } catch (error) {
      console.error("Error toggling bookmark in backend:", error);
      throw error; // Allows error handling in the component
    }
  },
  isBookmarked: (chapterId: string) => get().bookmarkedChapterId === chapterId,
}));

export default useBookmarkStore;