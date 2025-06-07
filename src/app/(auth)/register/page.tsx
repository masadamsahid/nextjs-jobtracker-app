import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome } from "lucide-react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen bg-slate-100">
      <div
        id="register-illustration"
        className="p-2 md:p-2 lg:p-5 bg-white min-h-screen w-full hidden md:block md:justify-self-end lg:justify-self-end"
      >
        <div className="p-10">
                  <Link href="/register" className="text-green-500 ">
          Login
        </Link>
        </div>

        <div className="flex flex-col items-center p-10 my-auto">
          <img
            className="w-[calc(100%-5rem)] md:w-2/3 lg:max-w-[620px]"
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
      <div id="register-form" className="lg:p-5 sm:p-2 md:p-2 min-h-screen w-full">
        <div className="p-10 text-right">
          <Link href="/register" className="text-green-500">
            Register
          </Link>
        </div>

        <div
          id="login-form"
          className="flex flex-col my-auto p-5 lg:p-20  md:p-2 justify-center items-center gap-3 w-full max-h-screen"
        >
          {/* Assuming you have a way to handle images in TSX, e.g., direct import or public folder */}
          <img
            src="/Login-bro 1.png"
            alt="login-img"
            className="block md:hidden "
          />
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-semibold text-primary">Login</h1>
            <p className="text-sm text-zinc-500 text-center">
              Fill the form below to login
            </p>
          </div>
          <form action="" className="flex flex-col gap-2 w-full">
            <div>
              <Input type="email" id="email" placeholder="name@example.com" className="bg-white"/>
            </div>
            <div>
              <Input type="password" id="password" placeholder="password" className="bg-white"/>
            </div>
            <Button type="submit">Login</Button>
          </form>
          <p className="text-xs text-zinc-500">OR CONTINUE WITH</p>

          <Button variant="outline" className="w-full">
            <Chrome />
            Google
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
