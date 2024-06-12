import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserSlice, createUserSlice } from "./AuthStore";

export interface RootStore extends UserSlice {}

export const useStore = create<RootStore, [["zustand/persist", RootStore]]>(
  persist(
    (...args) => ({
      ...createUserSlice(...args),
    }),
    {
      name: "streaming-app",
    }
  )
);
