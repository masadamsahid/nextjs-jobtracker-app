import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome, Command } from "lucide-react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen bg-slate-100">
      <div
        id="register-illustration"
        className="md:p-2 md:h-full bg-white  w-full hidden md:block "
      >
        <div className="flex pt-10">
          <Link href="/" className="text-green-500 flex items-center gap-2">
            <Command />
            <span>LOGO</span>{" "}
            {/* Wrap LOGO in a span for better control, though not strictly necessary for this layout */}
          </Link>
        </div>

        <div className="flex flex-col items-center p-10 my-auto">
          <img
            className="w-1/3 md:w-2/3"
            src="/Login-rafiki 1.png"
            alt="Register Image"
          />

          <blockquote className="mt-6 border-l-2 pl-6 italic text-green-500">
            &quot;This library has saved me countless hours of work and helped
            me deliver stunning designs to my clients faster than ever
            before.&quot;
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-green-500">
              Sofia Davis
            </p>
          </blockquote>
        </div>
      </div>
      <div
        id="register-form"
        className="lg:p-5 sm:p-2 md:p-2 md:h-full w-full "
      >
        <div
          className="pt-10 pr-5
         text-right "
        >
          <Link href="/login" className="text-green-500">
            Login
          </Link>
        </div>

        <div
          id="register-form"
          className="flex flex-col md:mt-10 p-5 lg:p-20  md:p-2 justify-center items-center gap-3 w-full"
        >
          {/* Assuming you have a way to handle images in TSX, e.g., direct import or public folder */}
          <img
            src="/Login-rafiki 1.png"
            alt="Register-img"
            className="block w-2/3 md:hidden "
          />
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-semibold text-primary">
              Create an account
            </h1>
            <p className="text-sm text-zinc-500 text-center">
              Enter your email below to create your account
            </p>
          </div>
          <form action="" className="flex flex-col gap-2 w-full">
            <div>
              <Input
                type="text"
                id="full-name"
                placeholder="full name"
                className="bg-white"
              />
            </div>
            <div>
              <Input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="bg-white"
              />
            </div>
            <div>
              <Input
                type="password"
                id="password"
                placeholder="password"
                className="bg-white"
              />
            </div>
            <div>
              <Input
                type="password"
                id="confirm-password"
                placeholder="confirm password"
                className="bg-white"
              />
            </div>
            <Button asChild>
              <Link href="/dashboard">
                Sign-in with Email
              </Link>
            </Button>
          </form>
          <p className="text-xs text-zinc-500">OR CONTINUE WITH</p>

          <Button asChild variant="outline" className="w-full">
            <Link href="/dashboard">
              <Chrome />
              Google
            </Link>
          </Button>

          <p className="text-sm text-zinc-500 text-center max-w-[286px]">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
