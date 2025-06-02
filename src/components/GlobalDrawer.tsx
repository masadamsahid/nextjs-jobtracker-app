"use client";

import useGlobalDrawer from "@/stores/global-drawer.store";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";

type GlobalDrawerProps = {}

const GlobalDrawer = (props: GlobalDrawerProps) => {
  const { open, title, hideTitle, content, setOpen } = useGlobalDrawer();

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerContent>
        {content}
      </DrawerContent>
    </Drawer>
  );
}

export default GlobalDrawer;