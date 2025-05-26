import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BriefcaseBusiness,
  MessagesSquare ,
  CreditCard,
  Settings,
  User,
} from "lucide-react"
 
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
 
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

type Props = {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex mx-auto">
      {/* Sidebar */}
      <div className="w-[309px] border-r border-border p-2">
        <div>
        <div className="py-9">
          <h1 className="mx-auto w-fit text-primary text-center text-5xl font-extrabold font-outfit">LOGO</h1>
        </div>
        <Separator />
        <div>
          <Command className="rounded-lg w-auto">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <BriefcaseBusiness  />
                  <Link href="/"><span>My Applications</span></Link>
                  
                </CommandItem>
                <CommandItem>
                  <MessagesSquare/>
                  <Link href="/"><span>AI Interviews</span></Link>
                  
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <Link href="#"><span>Profile</span></Link>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <Link href="#"><span>Billing</span></Link>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <Link href="#"><span>Settings</span></Link>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <Separator/>
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
            <Button variant="destructive" className="w-full">Logout</Button>
          </Card>

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