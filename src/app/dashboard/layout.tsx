import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex mx-auto">
      {/* Sidebar */}
      <div className="w-[309px] border-r border-border p-2">
        <div className="py-9">
          <h1 className="mx-auto w-fit text-primary text-center text-5xl font-extrabold font-outfit">LOGO</h1>
        </div>
        <Separator />
        <div>
          Sidebar menus go here
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="border-b border-border p-2 flex justify-center items-center h-[52px]">
          <p>[Page Title]</p>
        </div>
        
        {/* Content wrapper */}
        <div>
          {/* Real content goes here */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout