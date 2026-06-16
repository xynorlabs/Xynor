
import { create } from "zustand";

interface UserState {
  user: { id: string; name: string; email: string } | null;
  setUser: (user: UserState["user"]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
