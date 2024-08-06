import checkBookmark from '@/actions/bookmark/checkBookmark';
import toggleBookmark from '@/actions/bookmark/toggleBookmark';
import { create } from 'zustand';

interface BookmarkStoreState {
  bookmark: { href: string; title: string } | null;
  toggleBookmark: (userId: string, href: string, title: string) => Promise<void>;
  isBookmarked: (href: string) => boolean;
  fetchBookmarkStatus: (userId: string, href: string) => Promise<void>;
}

const useBookmarkStore = create<BookmarkStoreState>((set, get) => ({
  bookmark: null,
  
  toggleBookmark: async (userId: string, href: string, title: string) => {
    try {
      const success = await toggleBookmark(userId, href, title);
      if (success) {
        set(state => ({
          bookmark: state.bookmark?.href === href ? null : { href, title },
        }));
      }
    } catch (error) {
      console.error("Error toggling bookmark in backend:", error);
      throw error;
    }
  },

  isBookmarked: (href: string) => get().bookmark?.href === href,

  fetchBookmarkStatus: async (userId: string, href: string) => {
    try {
      const bookmark = await checkBookmark(userId);
      set({ bookmark: bookmark ? { href: bookmark.href!, title: bookmark.title! } : null });
    } catch (error) {
      console.error("Failed to fetch bookmark status:", error);
      throw error;
    }
  },
}));

export default useBookmarkStore;
