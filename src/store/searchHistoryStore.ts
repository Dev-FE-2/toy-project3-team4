import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchState {
  searchHistory: string[];
  actions: ISearchHistoryActions;
}

interface ISearchHistoryActions {
  addSearchHistory: (keyword: string) => void;
  removeSearchHistory: (keyword: string) => void;
}

const useSearchHistoryStore = create<SearchState>()(
  persist(
    (set) => ({
      searchHistory: [],
      actions: {
        addSearchHistory: (keyword) =>
          set((state) => ({
            searchHistory: [
              keyword,
              ...state.searchHistory.filter((k) => k !== keyword),
            ].slice(0, 5),
          })),
        removeSearchHistory: (keyword) =>
          set((state) => ({
            searchHistory: state.searchHistory.filter((k) => k !== keyword),
          })),
      },
    }),
    {
      name: 'search-storage',
      partialize: (state) => ({ searchHistory: state.searchHistory }),
    },
  ),
);

export const useSearchHistoryActions = () =>
  useSearchHistoryStore((state) => state.actions);

export const useSearchHistory = () =>
  useSearchHistoryStore((state) => state.searchHistory);
