import { create } from "zustand";
import { RefObject } from "react";

export interface ThemeState {
	currentTheme: string;
	setCurrentTheme: (theme: string) => void;
	headerRef: RefObject<HTMLDivElement | null> | null;
	setHeaderRef: (ref: RefObject<HTMLDivElement | null> | null) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
	currentTheme: "light",
	setCurrentTheme: (theme) => set({ currentTheme: theme }),
	headerRef: null,
	setHeaderRef: (ref) => set({ headerRef: ref }),
}));
