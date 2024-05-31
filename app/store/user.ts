import checkBookmark from '@/actions/bookmark/checkBookmark';
import toggleBookmark from '@/actions/bookmark/toggleBookmark';
import { create } from 'zustand';

interface BookmarkStoreState {
  bookmarkedChapterId: number | null;
  toggleBookmark: (userId: string, chapterId: number) => Promise<void>;
  isBookmarked: (chapterId: number) => boolean;
  fetchBookmarkStatus: (userId: string, chapterId: number) => Promise<void>;
}

const useBookmarkStore = create<BookmarkStoreState>((set, get) => ({
  bookmarkedChapterId: null,
  toggleBookmark: async (userId: string, chapterId: number) => {
    try {
      // Toggle bookmark in the backend
      const success = await toggleBookmark(userId, chapterId); 
      if(success) {
        set(state => ({
          bookmarkedChapterId: state.bookmarkedChapterId === chapterId ? null : chapterId,
        }));
      }

      // Error handling
    } catch (error) {
      console.error("Error toggling bookmark in backend:", error);
      throw error; 
    }
  },
  isBookmarked: (chapterId: number) => get().bookmarkedChapterId === chapterId,

  fetchBookmarkStatus: async (userId: string, chapterId: number) => {
  try {
    const isBookmarked = await checkBookmark(userId, chapterId);
    if (isBookmarked) {
      set({ bookmarkedChapterId: chapterId });
      return;
    }
    console.log("Bookmark was set", chapterId)

    // Error handling
  } catch (error) {
    console.error("Failed to fetch bookmark status:", error);
    throw error;
  }
},
}));

export default useBookmarkStore;
