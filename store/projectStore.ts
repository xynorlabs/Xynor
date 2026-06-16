
import { create } from "zustand";

interface ProjectState {
  filter: string;
  setFilter: (filter: string) => void;
  selectedProject: string | null;
  setSelectedProject: (id: string | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  filter: "all",
  setFilter: (filter) => set({ filter }),
  selectedProject: null,
  setSelectedProject: (id) => set({ selectedProject: id }),
}));
