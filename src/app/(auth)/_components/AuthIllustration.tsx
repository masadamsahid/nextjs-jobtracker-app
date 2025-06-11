"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  mode?: "register" | "login";
}

const AuthIllustration = ({ className, mode }: Props) => {
  const pathname = usePathname();
  if(!mode) mode = pathname === "/login" ? "login" : "register";
  
  return (
    <img
      src={mode === "login" ? "/Login-bro 1.png" : "/Login-rafiki 1.png"}
      alt={mode + ' illustration'}
      className={cn(className)}
    />
  );
}

export default AuthIllustration;