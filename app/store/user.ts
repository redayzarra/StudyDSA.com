import checkBookmark from '@/actions/bookmark/checkBookmark';
import toggleBookmark from '@/actions/bookmark/toggleBookmark';
import { create } from 'zustand';

interface BookmarkStoreState {
  bookmarkedChapterId: string | null;
  toggleBookmark: (userId: string, chapterId: string) => Promise<void>;
  isBookmarked: (chapterId: string) => boolean;
  fetchBookmarkStatus: (userId: string, chapterId: string) => Promise<void>;
}

const useBookmarkStore = create<BookmarkStoreState>((set, get) => ({
  bookmarkedChapterId: null,
  toggleBookmark: async (userId: string, chapterId: string) => {
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
  isBookmarked: (chapterId: string) => get().bookmarkedChapterId === chapterId,

  fetchBookmarkStatus: async (userId: string, chapterId: string) => {
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
