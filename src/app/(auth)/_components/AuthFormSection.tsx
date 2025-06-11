import Link from "next/link";
import AuthIllustration from "./AuthIllustration";
import AuthForm from "./AuthForm";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

type Props = {
  mode?: "register" | "login"
}

const AuthFormSection = ({ mode = "register" }: Props) => {
  return (
    <div id="auth-section" className="p-2 md:p-4 lg:p-8 h-full w-full bg-slate-200 flex flex-col items-center">
      <Link href={mode === "register" ? "/login" : "/register"} className="text-primary ml-auto hover:underline">
        {mode === "register" ? "Login" : "Register"}
      </Link>

      <div className="flex-1 flex flex-col md:mt-10 p-5 lg:p-20  md:p-2 justify-center items-center gap-3 w-full">
        {/* Assuming you have a way to handle images in TSX, e.g., direct import or public folder */}
        <AuthIllustration mode={mode} className="block md:hidden max-h-72" />
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-semibold text-primary">
            {mode === "register" ? "Create an account" : "Login"}
          </h1>
          <p className="text-sm text-zinc-500 text-center">
            {mode === "register" ? "Enter your email below to create your account" : "Fill the form below to login"}
          </p>
        </div>
        <AuthForm formMode={mode} />
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
  );
}

export default AuthFormSection;