'use client';
import { Separator } from "@/components/ui/separator";
import { ReactNode, createContext, useContext, useState } from "react";

// Buat Context baru
interface PageTitleContextType {
  pageTitle: string;
  setPageTitle: (title: string) => void;
}

const PageTitleContext = createContext<PageTitleContextType | undefined>(undefined);

// Hook kustom untuk menggunakan context
export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error('usePageTitle must be used within a PageTitleProvider');
  }
  return context;
};

type Props = {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const [pageTitle, setPageTitle] = useState("Page Title"); // Judul default

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
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
            <p>{pageTitle}</p> {/* Menggunakan judul dari state */}
          </div>

          {/* Content wrapper */}
          <div>
            {/* Real content goes here */}
            {children}
          </div>
        </div>
      </div>
    </PageTitleContext.Provider>
  );
}

export default DashboardLayout;