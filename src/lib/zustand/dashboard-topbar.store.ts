import { ReactNode } from 'react';
import { create } from 'zustand'

export interface DashboardTopBarState {
  rightIcons: ReactNode | ReactNode[];
  setRightIcons: (icons: ReactNode | ReactNode[]) => void;
}

export const useDashboardTopBarStore = create<DashboardTopBarState>()((set) => ({
  rightIcons: null,
  setRightIcons: (icons) => set(() => ({ rightIcons: icons })),
}))