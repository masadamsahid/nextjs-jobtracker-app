import { ReactNode } from 'react';
import { create } from 'zustand';

export type GlobalDrawerState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  
  title: string;
  setTitle: (title: string) => void;
  
  hideTitle: boolean;
  setHideTitle: (hide: boolean) => void;

  content: ReactNode;
  setContent: (content: ReactNode) => void;
};

const useGlobalDrawer = create<GlobalDrawerState>((set) => {
  return {
    open: false,
    setOpen: (open) => set({ open }),

    title: 'Drawer Title',
    setTitle: (title) => set({ title }),

    hideTitle: true,
    setHideTitle: (hide) => set({ hideTitle: hide }),

    content: null,
    setContent: (content) => set({ content }),
  };
});

export default useGlobalDrawer;