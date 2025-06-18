import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

type NavbarProps = {
  className?: string;
}

const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Achievements",
    href: "/#achievements",
  },
  {
    name: "Reviews",
    href: "/#reviews",
  },
  {
    name: "Pricing",
    href: "/#pricing",
  },
  {
    name: "FAQs",
    href: "/#FAQs",
  },
];

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn("border-b border-border flex justify-between items-center px-4 md:px-12 py-3 w-full", className)}>
      <Link href='/' className="text-5xl text-primary w-fit font-extrabold">
        LOGO
      </Link>

      <ul className="hidden lg:flex items-center gap-2">
        {NAV_LINKS.map((nav) => {
          return (
            <li key={nav.name}>
              <Button asChild variant='link' className="text-foreground">
                <Link href={nav.href}>
                  {nav.name}
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:flex items-center gap-2">
        <Button asChild variant='outline'>
          <Link href='/login'>
            Login
          </Link>
        </Button>
        <Button asChild>
          <Link href='register'>
            Register
          </Link>
        </Button>
      </div>


      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className="lg:hidden">
            <Menu className="size-9" />
          </Button>
        </SheetTrigger>

        <SheetContent side='top' className="flex flex-col gap-4 h-[80vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle asChild className="text-4xl text-primary w-fit font-extrabold">
              <Link href='/'>
                LOGO
              </Link>
            </SheetTitle>
            <SheetDescription className="text-left">
              Simplify Your Job Search: AI Interviews & Effortless Application
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((nav) => {
              return (
                <li key={nav.name}>
                  <Button asChild variant='link' className="text-foreground">
                    <Link href={nav.href}>
                      {nav.name}
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto flex flex-col items-stretch gap-2">
            <Button asChild variant='outline'>
              <Link href='/login'>
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href='register'>
                Register
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

    </div>
  );
}

export default Navbar