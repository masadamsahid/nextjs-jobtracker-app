import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  AlignLeft,
  Plus,
} from "lucide-react"

import DashboardSidebar from "@/components/DashboardSidebar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type Props = {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex mx-auto">
      {/* Sidebar */}
      <DashboardSidebar className="hidden lg:flex border-r border-border" />

      {/* Right content */}
      <div className="flex-1 flex flex-col-reverse md:flex-col h-screen">
        {/* Top Bar */}
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
          <p className="flex-1 text-center">[Page Title]</p>
          <div id="top-navbar-right-icons" className="min-w-[25%] flex justify-end">
            <Button size='icon' variant='ghost' className="ml-auto">
              <Plus />
            </Button>
          </div>
        </div>

        {/* Content wrapper */}
        <div className="h-full overflow-y-auto">
          {/* Real content goes here */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout