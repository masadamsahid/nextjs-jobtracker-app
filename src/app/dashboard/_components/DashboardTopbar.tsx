"use client";

import DashboardSidebar from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignLeft, Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {}

const DashboardTopbar = (props: Props) => {
  const pathname = usePathname();
  const [title, setTitle] = useState<string>("Page Title");
  
  useEffect(() => {
    if (pathname.startsWith("/dashboard/companies")) setTitle("Companies");
    else if (pathname.startsWith("/dashboard/job-applications")) setTitle("Job Applications");
    else if (pathname.startsWith("/dashboard/ai-interviews")) setTitle("AI Interviews");
    else if (pathname.startsWith("/dashboard/profile")) setTitle("Profiles");
    else if (pathname === "/dashboard") setTitle("My Applications");
    else if (pathname.startsWith("/dashboard")) setTitle("Jobtracker App");
  }, [pathname]);
  
  return (
    <div className="border-t md:border-t-0 md:border-b border-border p-2 flex justify-center items-center h-[52px]">
      <div id="top-navbar-left-icons" className="min-w-[25%] flex justify-start">
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button size='icon' variant='ghost' className="mr-auto">
              <AlignLeft />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className="w-fit p-0">
            <SheetHeader hidden>
              <SheetTitle hidden>Dashboard Sidebar</SheetTitle>
            </SheetHeader>
            <DashboardSidebar className="h-full" />
          </SheetContent>
        </Sheet>
      </div>
      <p className="flex-1 text-center">{title}</p>
      <div id="top-navbar-right-icons" className="min-w-[25%] flex justify-end">
        {/* <Button size='icon' variant='ghost' className="ml-auto">
          <Plus />
        </Button> */}
      </div>
    </div>
  );
}

export default DashboardTopbar