import { ReactNode } from "react";

import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardTopbar from "./_components/DashboardTopbar";

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
       <DashboardTopbar/>

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