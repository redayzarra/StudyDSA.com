import checkBookmark from '@/actions/bookmark/checkBookmark';
import toggleBookmark from '@/actions/bookmark/toggleBookmark';
import { create } from 'zustand';

interface BookmarkStoreState {
  bookmarkedHref: string | null;
  toggleBookmark: (userId: string, href: string, title: string) => Promise<void>;
  isBookmarked: (href: string) => boolean;
  fetchBookmarkStatus: (userId: string) => Promise<boolean>;
}

const useBookmarkStore = create<BookmarkStoreState>((set, get) => ({
  bookmarkedHref: null,
  
  toggleBookmark: async (userId: string, href: string, title: string) => {
    try {
      const success = await toggleBookmark(userId, href, title); 
      if (success) {
        set(state => ({
          bookmarkedHref: state.bookmarkedHref === href ? null : href,
        }));
      }
    } catch (error) {
      console.error("Error toggling bookmark in backend:", error);
      throw error; 
    }
  },

  isBookmarked: (href: string) => get().bookmarkedHref === href,

  fetchBookmarkStatus: async (userId: string) => {
    try {
      const bookmark = await checkBookmark(userId);
      if (bookmark) {
        set({ bookmarkedHref: bookmark.href });
        return true;
      } else {
        set({ bookmarkedHref: null });
        return false;
      }
    } catch (error) {
      console.error("Failed to fetch bookmark status:", error);
      throw error;
    }
  },
}));

export default useBookmarkStore;
