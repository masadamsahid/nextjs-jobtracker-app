"use client";

import { BriefcaseBusiness, Building2, CreditCard, MessagesSquare, Settings, User } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type SidebarNav = {
  title: string;
  icon: ReactNode;
  to: string;
  regexMatcher?: RegExp;
};

const APP_NAVS: SidebarNav[] = [
  {
    title: "My Applications",
    icon: <BriefcaseBusiness />,
    to: "/dashboard",
    regexMatcher: /^\/dashboard$/,
  },
  {
    title: "AI Interviews",
    icon: <MessagesSquare />,
    to: "/dashboard/ai-interviews",
    regexMatcher: /^\/dashboard\/ai-interviews[.]*/,
  },
  {
    title: "Companies",
    icon: <Building2 />,
    to: "/dashboard/companies",
    regexMatcher: /^\/dashboard\/companies[.]*/,
  },
];

const USER_NAVS: SidebarNav[] = [
  {
    title: "Profile",
    icon: <User />,
    to: "/dashboard/profile",
    regexMatcher: /^\/dashboard\/profile[.]*/,
  },
  {
    title: "Billing",
    icon: <CreditCard />,
    to: "/dashboard/billing",
    regexMatcher: /^\/dashboard\/billing[.]*/,
  },
  {
    title: "Settings",
    icon: <Settings />,
    to: "/dashboard/settings",
    regexMatcher: /^\/dashboard\/settings[.]*/,
  },
];


type Props = {
  className?: string;
}

const DashboardSidebar = ({ className }: Props) => {
  const pathname = usePathname();
  console.log({ pathname });

  const activeNav = [...APP_NAVS, ...USER_NAVS].find(n => n.regexMatcher?.test(pathname));
  console.log({ activeNav });



  return (
    <div className={cn("w-[309px] p-2 flex flex-col", className)}>
      <div>
        <div className="py-9">
          <h1 className="mx-auto w-fit text-primary text-center text-5xl font-extrabold font-outfit">LOGO</h1>
        </div>
        <Separator />
        <div>
          <Command className="rounded-lg w-auto">
            <CommandList className="max-h-none">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Apps">
                {APP_NAVS.map((n) => (
                  <CommandItem
                    asChild
                    key={n.to}
                    value={n.to}
                    className={cn(
                      "cursor-pointer",
                      n.to === activeNav?.to && "!bg-primary !text-primary-foreground hover:!bg-primary hover:!text-primary-foreground"
                    )}
                  >
                    <Link href={n.to}>
                      {n.icon}
                      <span>{n.title}</span>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="User">
                {USER_NAVS.map((n) => (
                  <CommandItem
                    asChild
                    key={n.to}
                    value={n.to}
                    className={cn(
                      "cursor-pointer",
                      n.to === activeNav?.to && "!bg-primary !text-primary-foreground hover:!bg-primary hover:!text-primary-foreground"
                    )}
                  >
                    <Link href={n.to}>
                      {n.icon}
                      <span>{n.title}</span>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <Separator />
      </div>

      <div className="flex flex-row-2 mt-auto">
        <Card className="p-2 w-full">
          <div className="flex flex-col-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader>
              <CardTitle>Budi Bedu Beda</CardTitle>
              <CardDescription>budibedubeda@gmail.com</CardDescription>
            </CardHeader>
          </div>
          <Button asChild variant='outline' className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground w-full">
            <Link href='/'>
              Logout
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default DashboardSidebar;