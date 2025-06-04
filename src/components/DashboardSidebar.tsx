import { BriefcaseBusiness, CreditCard, MessagesSquare, Settings, User } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
}

const DashboardSidebar = ({ className }: Props) => {

  return (
    <div className={cn("w-[309px] p-2 flex flex-col", className)}>
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
                  <BriefcaseBusiness />
                  <Link href="/"><span>My Applications</span></Link>
                </CommandItem>
                <CommandItem>
                  <MessagesSquare />
                  <Link href="/"><span>AI Interviews</span></Link>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <Link href="#"><span>Profile</span></Link>
                  <CommandShortcut>⌘U</CommandShortcut>
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
          <Button className="bg-black w-full">Logout</Button>
        </Card>
      </div>
    </div>
  );
}

export default DashboardSidebar;