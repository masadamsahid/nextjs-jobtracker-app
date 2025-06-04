import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import {Instagram, Twitter, Linkedin} from "lucide-react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Footer = () => {
  return (

    <div
    className="
        flex flex-col items-center gap-4 text-white bg-primary 
        px-[32px] py-[32px] 
        lg:px-[200px]  
        md:px-[54px] 
    "
    >
        <Link className="text-8xl mb-2 font-extrabold text-white" href="#">
            LOGO
        </Link>

        <div className="flex flex-col items-center gap-2">
            <p className="text-center text-base font-normal text-white text-balance">
            Donec varius odio elit, nec egestas arcu volutpat id. Aenean aliquet tempor arcu, eu rhoncus nisl elementum et. Donec iaculis bibendum ultrices. Fusce aliquam ornare neque, quis tincidunt sapien.
            </p>
            <p className="text-center text-base font-normal text-white text-balance">
            Aenean vehicula lectus sapien, vel aliquet lectus aliquet eget. Suspendisse sit amet massa at mauris commodo vestibulum. Fusce viverra pharetra urna eget sagittis.
            </p>
           
        </div>

        <div className="flex gap-8">

            <Link href="http://instagram.com">
            <Instagram />
            </Link>
            <Link href="http://twitter.com">
            <Twitter/>
            </Link>
            <Link href="http://linkedin.com">
            <Linkedin/>
            </Link>
            

        </div>
    </div>
)}
export default Footer