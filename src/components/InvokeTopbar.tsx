"use client";

import { useDashboardTopBarStore } from '@/lib/zustand/dashboard-topbar.store';
import { ReactNode, useEffect } from 'react';


type Props = {
  children: ReactNode;
}

const InvokeTopbar = ({children}: Props) => {
  const { setRightIcons } = useDashboardTopBarStore();
  useEffect(() => {
    setRightIcons(
      children
    );
  }, []);
  
  return null;
}

export default InvokeTopbar