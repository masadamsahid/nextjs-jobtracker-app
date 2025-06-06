import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center min-h-screen bg-slate-100">
      <div
        id="login-illustration"
        className="bg-white min-h-screen w-full justify-self-center md:justify-self-end lg:justify-self-end"
      >
        <Link href="/login">Login</Link>
        <img
          className="hero-image w-full md:w-2/3 lg:max-w-[620px] "
          src="/hero.png"
          alt="Hero Image"
        />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </div>
      <div id="login-form"  className="flex  justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            
            <Button variant="link">Sign Up</Button>
            
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
