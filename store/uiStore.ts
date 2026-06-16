
import { create } from "zustand";

interface UIState {
  isMenuOpen: boolean;
  isLoading: boolean;
  toggleMenu: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  isLoading: true,
  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen })),
  setLoading: (loading) => set({ isLoading: loading }),
}));
